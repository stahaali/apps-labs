"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroBanner.module.css";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

const TARGET_APPS = 500;
const TARGET_RETENTION = 98;
const TARGET_RATING = 4.9;
const DURATION_MS = 2000;

export default function HeroBannerStats() {
  const rootRef = useRef(null);
  const [apps, setApps] = useState(0);
  const [retention, setRetention] = useState(0);
  const [rating, setRating] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const runFinal = () => {
      setApps(TARGET_APPS);
      setRetention(TARGET_RETENTION);
      setRating(TARGET_RATING);
    };

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      runFinal();
      return;
    }

    const startAnimation = () => {
      const start = performance.now();

      const frame = (now) => {
        const raw = Math.min((now - start) / DURATION_MS, 1);
        const t = easeOutCubic(raw);
        setApps(Math.round(TARGET_APPS * t));
        setRetention(Math.round(TARGET_RETENTION * t));
        setRating(Number((TARGET_RATING * t).toFixed(1)));
        if (raw < 1) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          runFinal();
        }
      };

      rafRef.current = requestAnimationFrame(frame);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        obs.disconnect();
        startAnimation();
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="mt-6 grid w-full max-w-xl grid-cols-3 items-stretch justify-items-start gap-x-2 sm:mt-8 sm:flex sm:max-w-none sm:flex-nowrap sm:justify-start sm:gap-x-0"
      aria-label="Company statistics"
    >
      <div
        className={`flex min-w-0 flex-col items-start gap-0.5 text-left border-[rgba(217,217,217,0.4)] pr-2 sm:min-w-[118px] sm:items-stretch sm:gap-1 sm:border-r sm:pr-10 ${styles.statCellFirst}`}
      >
        <span
          className={`text-[40px] font-bold leading-none tracking-tight text-[#70AA26] max-[639px]:text-[28px] tabular-nums ${styles.statCounterValue}`}
        >
          {apps}+
        </span>
        <span
          className={`text-[16px] font-medium leading-snug text-neutral-400 ${styles.statCounterLabel}`}
        >
          Apps Shipped
        </span>
      </div>
      <div
        className={`flex min-w-0 flex-col items-start gap-0.5 text-left border-[rgba(217,217,217,0.4)] px-2 sm:min-w-[118px] sm:items-stretch sm:gap-1 sm:border-r sm:px-10 ${styles.statCellMid}`}
      >
        <span
          className={`text-[40px] font-bold leading-none tracking-tight text-[#70AA26] max-[639px]:text-[28px] tabular-nums ${styles.statCounterValue}`}
        >
          {retention}%
        </span>
        <span
          className={`text-[16px] font-medium leading-snug text-neutral-400 ${styles.statCounterLabel}`}
        >
          Client Retention
        </span>
      </div>
      <div
        className={`flex min-w-0 flex-col items-start gap-0.5 text-left pl-2 sm:min-w-[132px] sm:items-stretch sm:justify-start sm:gap-1 sm:pl-10 ${styles.statCellLast}`}
      >
        <span
          className={`inline-flex items-center justify-start gap-1 text-[40px] max-[639px]:text-[28px] sm:gap-1.5 ${styles.statCounterValue}`}
        >
          <span className="font-bold leading-none tracking-tight text-[#70AA26] tabular-nums">
            {rating.toFixed(1)}
          </span>
          <StarIcon className="h-[0.85em] w-[0.85em] shrink-0 text-[#eab308]" />
        </span>
        <span
          className={`text-[16px] font-medium leading-snug text-neutral-400 ${styles.statCounterLabel}`}
        >
          Avg Rating
        </span>
      </div>
    </div>
  );
}
