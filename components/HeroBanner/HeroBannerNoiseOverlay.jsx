"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBanner.module.css";

/** Internal resolution — scaled up with pixelated rendering (full 1024×1024 each frame is too heavy) */
const BW = 320;
const BH = 320;

export default function HeroBannerNoiseOverlay() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = BW;
    canvas.height = BH;

    const imageData = ctx.createImageData(BW, BH);
    const { data } = imageData;

    const drawNoise = () => {
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 26;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let running = false;

    const tick = () => {
      if (!running) return;
      drawNoise();
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    drawNoise();
    if (!mq.matches) start();

    const onMq = () => {
      if (mq.matches) {
        stop();
        drawNoise();
      } else {
        start();
      }
    };

    mq.addEventListener("change", onMq);

    const onVis = () => {
      if (document.hidden) stop();
      else if (!mq.matches) start();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={`noise-overlay ${styles.noiseOverlay}`}
      width={BW}
      height={BH}
      aria-hidden
    />
  );
}
