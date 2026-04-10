"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "./ImageWithSkeleton.module.css";

/**
 * Next/Image with a shimmer skeleton until the image loads (`onLoad`).
 * Use `fill` + `wrapClassName` when the parent already establishes size.
 * `darkBackground` — charcoal shimmer for black/dark sections (hero banners).
 */
export default function ImageWithSkeleton({
  className,
  wrapClassName,
  skeletonClassName,
  onLoadingComplete,
  alt,
  fill,
  darkBackground = false,
  priority = false,
  /** Skip opacity fade when the image becomes ready (e.g. carousels that already slide). */
  noOpacityTransition = false,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e) => {
      setLoaded(true);
      onLoadingComplete?.(e.currentTarget);
    },
    [onLoadingComplete]
  );

  /* LCP: never hide priority images — opacity:0 delays Largest Contentful Paint */
  const showSkeleton = !priority && !loaded;
  const imgClassName = [
    styles.imgZ,
    showSkeleton
      ? styles.imgPending
      : noOpacityTransition
        ? styles.imgReadyInstant
        : styles.imgReady,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const skeletonBase = darkBackground ? styles.skeletonDark : styles.skeleton;

  const skeleton = showSkeleton && (
    <span
      className={[skeletonBase, skeletonClassName].filter(Boolean).join(" ")}
      aria-hidden
    />
  );

  if (fill) {
    return (
      <span
        className={[styles.wrap, styles.wrapFill, wrapClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {skeleton}
        <Image
          {...rest}
          alt={alt ?? ""}
          fill
          priority={priority}
          className={imgClassName}
          onLoad={handleLoad}
        />
      </span>
    );
  }

  return (
    <span
      className={[styles.wrap, styles.wrapBlock, wrapClassName]
        .filter(Boolean)
        .join(" ")}
    >
      {skeleton}
      <Image
        {...rest}
        alt={alt ?? ""}
        priority={priority}
        className={imgClassName}
        onLoad={handleLoad}
      />
    </span>
  );
}
