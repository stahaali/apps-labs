"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimateOnView.module.css";

/**
 * Subtle scroll-triggered reveal. Respects prefers-reduced-motion via CSS.
 */
export default function AnimateOnView({
  children,
  className = "",
  variant = "fadeUp",
  delayMs = 0,
  once = true,
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.06,
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        if (e.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  const variantClass = styles[variant] ?? styles.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${styles.root} ${variantClass} ${className}`}
      data-visible={visible ? "true" : "false"}
      style={
        delayMs > 0
          ? { transitionDelay: visible ? `${delayMs}ms` : undefined }
          : undefined
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
