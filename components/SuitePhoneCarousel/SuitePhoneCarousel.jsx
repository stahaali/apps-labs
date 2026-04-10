"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import styles from "./SuitePhoneCarousel.module.css";

export default function SuitePhoneCarousel({
  frameSrc,
  screenSrcs,
  alt = "App preview on a phone",
  sizes = "(max-width: 639px) 280px, (max-width: 1023px) 300px, 320px",
  intervalMs = 2000,
  aspectClassName = "aspect-[10/20]",
  className = "",
}) {
  const n = screenSrcs.length;
  const multi = n > 1;
  // Index 0 se 7 tak images hain (total 8), 9th image (index 8) clone hai.
  const slides = multi ? [...screenSrcs, screenSrcs[0]] : screenSrcs;
  const m = slides.length;

  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(false);
  const activeRef = useRef(0);
  activeRef.current = active;

  const intervalRef = useRef(null);

  const clearTick = useCallback(() => {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTick = useCallback(() => {
    clearTick();
    if (!multi) return;

    intervalRef.current = window.setInterval(() => {
      setActive((i) => {
        // CRITICAL: Agar hum clone (index 8) par hain, toh agla tick 
        // seedha image 2 (index 1) par jana chahiye bina ruke.
        if (i >= n) return 1; 
        return i + 1;
      });
    }, intervalMs);
  }, [clearTick, multi, n, intervalMs]);

  const jumpToStart = useCallback(() => {
    // Timer ko touch nahi karna, warna delay aayega. 
    // Sirf position teleport karni hai.
    flushSync(() => {
      setInstant(true);
      setActive(0);
    });
    
    // Browser ko layout update karne ka time dein taake animation off ho jaye
    requestAnimationFrame(() => {
      setInstant(false);
    });
  }, []);

  useEffect(() => {
    if (!multi) return undefined;
    startTick();
    return () => clearTick();
  }, [clearTick, multi, startTick]);

  const onTransitionEnd = useCallback(
    (e) => {
      if (!multi || e.propertyName !== "transform") return;
      if (e.target !== e.currentTarget) return;
      
      // Jab 8th image se clone par transition khatam ho
      if (activeRef.current === n) {
        jumpToStart();
      }
    },
    [jumpToStart, multi, n]
  );

  return (
    <div className={`${styles.phoneWrap} ${aspectClassName} ${className}`}>
      <div className={styles.screenSlot}>
        <div className={styles.slideViewport} role="img" aria-label={alt}>
          <div
            className={`${styles.slideTrack} ${instant ? styles.slideTrackInstant : ""}`}
            style={{
              width: `${m * 100}%`,
              transform: `translate3d(calc(${-active} * 100% / ${m}), 0, 0)`,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((src, i) => (
              <div
                key={multi && i === m - 1 ? `${src}-wrap` : `${src}-${i}`}
                className={styles.slideCell}
                style={{
                  flex: `0 0 calc(100% / ${m})`,
                  width: `calc(100% / ${m})`,
                  maxWidth: `calc(100% / ${m})`,
                }}
                aria-hidden={active !== i}
              >
                <div className={styles.slideCanvas}>
                  <Image
                    src={src}
                    alt={active === i ? alt : ""}
                    fill
                    className={styles.slideImg}
                    sizes={sizes}
                    priority={i === 0}
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.frameLayer}>
        <div className={styles.frameImageBox}>
          <Image
            src={frameSrc}
            alt=""
            fill
            className="pointer-events-none object-contain object-center select-none"
            sizes={sizes}
            priority
          />
        </div>
      </div>
    </div>
  );
}