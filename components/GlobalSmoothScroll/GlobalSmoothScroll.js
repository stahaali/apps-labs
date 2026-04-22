"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

/** Slower than native `scroll-behavior: smooth` (browser duration is not configurable). */
const SCROLL_DURATION_MS = 1150;
const HEADER_OFFSET_PX = 72;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function targetYForElement(el) {
  const rect = el.getBoundingClientRect();
  return Math.max(0, window.scrollY + rect.top - HEADER_OFFSET_PX);
}

function animateScrollTo(targetY) {
  if (prefersReducedMotion()) {
    window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const t0 = performance.now();

  function step(now) {
    const t = Math.min(1, (now - t0) / SCROLL_DURATION_MS);
    const eased = easeInOutQuad(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function GlobalSmoothScroll() {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  const scrollToHash = useCallback(() => {
    if (typeof window === "undefined") return;
    const { hash } = window.location;
    if (!hash || hash === "#") return;
    const id = hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    animateScrollTo(targetYForElement(el));
  }, []);

  useEffect(() => {
    const id = window.setTimeout(scrollToHash, 40);
    return () => clearTimeout(id);
  }, [pathname, scrollToHash]);

  useEffect(() => {
    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [scrollToHash]);

  useEffect(() => {
    const onClickCapture = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      const raw = a.getAttribute("href");
      if (!raw || raw === "#") return;

      let hash = "";
      try {
        const u = new URL(a.href);
        if (u.pathname !== window.location.pathname) return;
        if (!u.hash || u.hash === "#") return;
        hash = u.hash;
      } catch {
        return;
      }

      const id = hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const search = window.location.search || "";
      const next = `${pathnameRef.current}${search}${hash}`;
      router.push(next, { scroll: false });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => animateScrollTo(targetYForElement(el)));
      });
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [router]);

  return null;
}
