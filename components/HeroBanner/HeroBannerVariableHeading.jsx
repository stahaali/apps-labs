"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./HeroBanner.module.css";

const PARTS = [
  { text: "We Build Apps That ", accent: false },
  { text: "Dominate Markets", accent: true },
];

const MIN_WGHT = 480;
const MAX_WGHT = 800;
const PROXIMITY_PX = 150;
const RESET_WGHT = 640;

function splitIntoCharNodes(parts) {
  const nodes = [];
  let key = 0;
  for (const part of parts) {
    for (const ch of part.text) {
      nodes.push({
        key: key++,
        ch,
        accent: part.accent,
      });
    }
  }
  return nodes;
}

const CHAR_NODES = splitIntoCharNodes(PARTS);

export default function HeroBannerVariableHeading() {
  const spanRefs = useRef([]);
  const rafRef = useRef(null);
  const pointRef = useRef({ x: 0, y: 0 });
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const applyProximity = useCallback(() => {
    if (reducedRef.current) return;
    const { x, y } = pointRef.current;
    const spans = spanRefs.current;
    for (let i = 0; i < spans.length; i++) {
      const el = spans[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const d = Math.hypot(x - cx, y - cy);
      const t = Math.max(0, 1 - d / PROXIMITY_PX);
      const w = Math.round(MIN_WGHT + t * (MAX_WGHT - MIN_WGHT));
      el.style.fontVariationSettings = `"wght" ${w}`;
    }
  }, []);

  const scheduleApply = useCallback(() => {
    if (reducedRef.current) return;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      applyProximity();
    });
  }, [applyProximity]);

  const onPointerMove = useCallback(
    (e) => {
      if (reducedRef.current) return;
      pointRef.current = { x: e.clientX, y: e.clientY };
      scheduleApply();
    },
    [scheduleApply]
  );

  const resetWeights = useCallback(() => {
    const spans = spanRefs.current;
    for (let i = 0; i < spans.length; i++) {
      const el = spans[i];
      if (!el) continue;
      el.style.fontVariationSettings = `"wght" ${RESET_WGHT}`;
    }
  }, []);

  const onPointerLeave = useCallback(() => {
    resetWeights();
  }, [resetWeights]);

  useEffect(() => () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <h1
      id="hero-heading"
      className={`${styles.heroHeading} ${styles.heroHeadingVariable} text-white`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {CHAR_NODES.map(({ key, ch, accent }) => (
        <span
          key={key}
          ref={(el) => {
            spanRefs.current[key] = el;
          }}
          className={accent ? "text-[#70AA26]" : undefined}
          style={{ fontVariationSettings: `"wght" ${RESET_WGHT}` }}
        >
          {ch}
        </span>
      ))}
    </h1>
  );
}
