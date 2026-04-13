"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import styles from "./HeroBanner.module.css";

/** One span per word so proximity only affects the word under the cursor */
const WORDS = [
  { text: "We", accent: false },
  { text: "Build", accent: false },
  { text: "Apps", accent: false },
  { text: "That", accent: false },
  { text: "Dominate", accent: true },
  { text: "Markets", accent: true },
];

/**
 * Line breaks for layout (matches design):
 * Line 1: We Build Apps
 * Line 2: That Dominate
 * Line 3: Markets
 */
const LINE_BREAK_AFTER_WORD_INDEX = new Set([2, 4]);

function buildChars() {
  const out = [];
  let i = 0;
  for (let wi = 0; wi < WORDS.length; wi++) {
    const w = WORDS[wi];
    for (const ch of w.text) {
      out.push({ key: i++, ch, accent: w.accent, wordIndex: wi });
    }
  }
  return out;
}

const CHARS = buildChars();

const PROXIMITY_RADIUS = 200;
/** Default weight */
const WGHT_FAR = 500;
/** Proximity peak (browsers clamp to the font’s max wght, e.g. Manrope ~800) */
const WGHT_NEAR = 900;
/** Lower = smoother motion (more frames to settle) */
const LERP = 0.11;
/** Smooth raw mouse so targets don’t jump frame-to-frame */
const POINTER_LERP = 0.24;

function smoothstep(t) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

function smootherFalloff(t) {
  return smoothstep(smoothstep(t));
}

const HEADING_LABEL = "We Build Apps That Dominate Markets";

export default function HeroBannerVariableProximityHeading() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const spanRefs = useRef([]);
  const wordSpanRefs = useRef([]);
  const currentW = useRef(CHARS.map(() => WGHT_FAR));
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const pointerSmoothRef = useRef({ x: 0, y: 0, ready: false });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tick = useCallback(() => {
    rafRef.current = null;
    const raw = pointerRef.current;
    let useX = raw.x;
    let useY = raw.y;

    if (raw.active) {
      const sm = pointerSmoothRef.current;
      if (!sm.ready) {
        pointerSmoothRef.current = { x: raw.x, y: raw.y, ready: true };
        useX = raw.x;
        useY = raw.y;
      } else {
        const nx = sm.x + (raw.x - sm.x) * POINTER_LERP;
        const ny = sm.y + (raw.y - sm.y) * POINTER_LERP;
        pointerSmoothRef.current = { x: nx, y: ny, ready: true };
        useX = nx;
        useY = ny;
      }
    }

    const spans = spanRefs.current;
    let needsAnother = false;

    let activeWord = -1;
    if (raw.active) {
      const words = wordSpanRefs.current;
      for (let wi = 0; wi < WORDS.length; wi++) {
        const wel = words[wi];
        if (!wel) continue;
        const wr = wel.getBoundingClientRect();
        if (
          useX >= wr.left &&
          useX <= wr.right &&
          useY >= wr.top &&
          useY <= wr.bottom
        ) {
          activeWord = wi;
          break;
        }
      }
    }

    for (let i = 0; i < CHARS.length; i++) {
      const el = spans[i];
      if (!el) continue;

      let tw = WGHT_FAR;
      if (raw.active && activeWord >= 0 && CHARS[i].wordIndex === activeWord) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(useX - cx, useY - cy);
        const t = Math.max(0, Math.min(1, 1 - d / PROXIMITY_RADIUS));
        const p = smootherFalloff(t);
        tw = WGHT_FAR + p * (WGHT_NEAR - WGHT_FAR);
      }

      const cw = currentW.current[i];
      const nw = cw + (tw - cw) * LERP;
      currentW.current[i] = nw;

      /* Manrope: drive the variable axis via font-weight only */
      el.style.removeProperty("font-variation-settings");
      el.style.fontWeight = String(Math.round(nw));

      if (Math.abs(nw - tw) > 0.35) {
        needsAnother = true;
      }
    }

    if (needsAnother) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const scheduleTick = useCallback(() => {
    if (reducedMotion) return;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(tick);
  }, [reducedMotion, tick]);

  const onPointerMove = useCallback(
    (e) => {
      if (reducedMotion) return;
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };
      scheduleTick();
    },
    [reducedMotion, scheduleTick]
  );

  const onPointerLeave = useCallback(() => {
    pointerRef.current = { ...pointerRef.current, active: false };
    pointerSmoothRef.current = { x: 0, y: 0, ready: false };
    scheduleTick();
  }, [scheduleTick]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    scheduleTick();
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, scheduleTick]);

  if (reducedMotion) {
    return (
      <h1
        id="hero-heading"
        className={`${styles.heroHeading} ${styles.heroVariableHeading} ${styles.heroVariableHeadingLines} text-white`}
      >
        We Build Apps
        <br />
        That <span className="text-[#70AA26]">Dominate</span>
        <br />
        <span className="text-[#70AA26]">Markets</span>
      </h1>
    );
  }

  return (
    <h1
      id="hero-heading"
      className={`${styles.heroHeading} ${styles.heroVariableHeading} ${styles.heroVariableHeadingLines} text-white`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span className={styles.heroVarSrOnly}>{HEADING_LABEL}</span>
      {(() => {
        let pos = 0;
        return WORDS.map((w, wi) => {
          const slice = CHARS.slice(pos, pos + w.text.length);
          pos += w.text.length;
          const prevHadLineBreak = wi > 0 && LINE_BREAK_AFTER_WORD_INDEX.has(wi - 1);
          return (
            <Fragment key={wi}>
              {wi > 0 && !prevHadLineBreak ? (
                <span className={styles.heroVarWordSpace} aria-hidden>
                  {" "}
                </span>
              ) : null}
              <span
                ref={(el) => {
                  wordSpanRefs.current[wi] = el;
                }}
                className={styles.heroVarWord}
              >
                {slice.map(({ key, ch, accent }) => (
                  <span
                    key={key}
                    ref={(el) => {
                      spanRefs.current[key] = el;
                    }}
                    className={`${styles.heroVarChar}${accent ? " text-[#70AA26]" : ""}`}
                    aria-hidden
                    style={{
                      fontWeight: WGHT_FAR,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              {LINE_BREAK_AFTER_WORD_INDEX.has(wi) ? <br /> : null}
            </Fragment>
          );
        });
      })()}
    </h1>
  );
}
