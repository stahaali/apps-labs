"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navLink =
  "flex items-center gap-1 text-[15px] font-medium leading-none text-white/90 transition-colors hover:text-white";

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home", chevron: true },
  { href: "/about", label: "About" },
  { href: "/pages", label: "Pages", chevron: true },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const mq = window.matchMedia("(max-width: 991px)");
    const onMq = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-[100] w-full border-b border-solid border-b-white/10">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 min-[992px]:px-8">
        <Link href="/" className="shrink-0 text-[22px] font-bold tracking-tight">
          <span className="text-white">Apex </span>
          <span className="text-[#70AA26]">Labs</span>
        </Link>

        <nav
          className="hidden items-center gap-[34px] lg:flex"
          aria-label="Main navigation"
        >
          <Link href="/" className={navLink}>
            Home
          </Link>
          <Link href="/about" className={navLink}>
            About
          </Link>
          <Link href="/pages" className={navLink}>
            Pages
            <ChevronDown className="mt-px text-white/70" />
          </Link>
          <Link href="/pricing" className={navLink}>
            Pricing
          </Link>
          <Link href="/reviews" className={navLink}>
            Reviews
          </Link>
          <Link href="/blog" className={navLink}>
            Blog
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/* Hamburger + slide drawer: phone + iPad / tablet until desktop (lg 992px) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-md transition hover:bg-white/15"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <CloseIcon className="h-[22px] w-[22px]" />
              ) : (
                <MenuIcon className="h-[22px] w-[22px]" />
              )}
            </button>
          </div>

          <Link
            href="/get-started"
            className="hidden rounded-full bg-white px-[26px] py-[11px] text-[15px] font-semibold leading-none text-[#050505] transition-opacity hover:opacity-90 lg:inline-flex lg:items-center"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Slide-in panel: same UI on phone + iPad; hidden from lg (992px) up */}
      <div
        className={`pointer-events-none fixed inset-0 z-[200] lg:hidden ${
          menuOpen ? "pointer-events-auto" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,320px)] max-w-full flex-col border-l border-white/12 bg-[#0b0c10]/98 shadow-[-12px_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="shrink-0 text-lg font-bold tracking-tight"
            >
              <span className="text-white">Apex </span>
              <span className="text-[#70AA26]">Labs</span>
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3" aria-label="Mobile">
            {MOBILE_NAV_LINKS.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10"
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                {item.chevron ? (
                  <ChevronDown className="-rotate-90 text-white/50" />
                ) : null}
              </Link>
            ))}
            <div className="mt-4 px-1">
              <Link
                href="/get-started"
                className="flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-[15px] font-semibold text-[#050505] transition-opacity hover:opacity-90"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
