"use client";

import Link from "next/link";
import HeaderLeadFormDialog from "@/components/LeadFormModal/HeaderLeadFormDialog";
import WhiteButton from "@/components/WhiteButton/WhiteButton";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import headerStyles from "@/components/Header.module.css";

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

const navLinkBase =
  "flex items-center gap-1 font-medium leading-none text-white/90 transition-colors duration-200 hover:text-white";

/**
 * Industries mega menu — three columns, icon + title + short description (weDevs-style).
 * First column links match footer `FOOTER_LINK_HREF` where applicable.
 */
const SERVICES_MEGA_COLUMNS = [
  [
    {
      href: "/food-delivery",
      label: "Food Delivery",
      description:
        "Full landing: operations, web & apps, fulfillment, integrations, FAQ, and blogs.",
      tone: "brand",
      icon: "food",
      badge: "New",
    },
    {
      href: "/ecommerce-app-development",
      label: "Ecommerce",
      description:
        "Storefronts, checkout, and admin tooling built for scale.",
      tone: "emerald",
      icon: "cart",
      badge: "New",
    },
    {
      href: "/fitness-app-development",
      label: "Fitness App Development",
      description:
        "Training, habits, and wellness experiences your users open daily.",
      tone: "rose",
      icon: "fitness",
    },
    {
      href: "/book-appointment",
      label: "Book an Appointment",
      description:
        "Pick a time with our team to scope timeline, stack, and budget.",
      tone: "sky",
      icon: "calendar",
    },
  ],
  [
    {
      href: "/classified-platform",
      label: "Classified Platform",
      description:
        "Listings and buyer–seller flows tailored to your niche.",
      tone: "violet",
      icon: "classified",
    },
    {
      href: "/nutrition-platform",
      label: "Nutrition Platform",
      description:
        "Meal plans, macros, and coaching touchpoints around your brand.",
      tone: "lime",
      icon: "nutrition",
      badge: "New",
    },
    {
      href: "/ride-booking-app",
      label: "Ride Booking App",
      description:
        "Dispatch, live tracking, and payments for mobility products.",
      tone: "amber",
      icon: "ride",
    },
    {
      href: "/chauffeur-service-booking",
      label: "Chauffeur Service Booking",
      description:
        "Premium bookings, fleet tools, and polished rider experiences.",
      tone: "slate",
      icon: "chauffeur",
    },
  ],
  [
    {
      href: "/logistics-transportation",
      label: "Logistics & Transportation",
      description:
        "Shipments, routes, and field visibility on mobile and web.",
      tone: "blue",
      icon: "logistics",
    },
    {
      href: "/auction-app",
      label: "Auction App",
      description:
        "Timed bidding, seller tools, and secure payments in one shell.",
      tone: "orange",
      icon: "auction",
    },
  ],
];

const SERVICES_MEGA_PREFETCH_HREFS = SERVICES_MEGA_COLUMNS.flat().map(
  (item) => item.href
);

/** Industries mega-menu: soft mint pill + saturated lime strokes (all items match). */
const SERVICE_MENU_ICON_WRAP =
  "bg-[#E8F5E1] text-[#5EC00A]";

function ServiceMenuGlyph({ name, className: iconClass = "h-[18px] w-[18px]" }) {
  const c = iconClass;
  switch (name) {
    case "food":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10c0-3 2.5-5 8-5s8 2 8 5v2H4v-2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M6 12v6M10 12v6M14 12v6M18 12v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="18" cy="7" r="2" fill="currentColor" />
        </svg>
      );
    case "cart":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 6h15l-1.5 9h-12L6 6zM6 6L5 3H2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="20" r="1.25" fill="currentColor" />
          <circle cx="17" cy="20" r="1.25" fill="currentColor" />
        </svg>
      );
    case "fitness":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 10v4h2.5V10H5zm11 0v4H18.5V10H16zM7.5 11.25h9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 5V3M16 5V3M5 9h14M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h2M13 14h2M9 17h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "classified":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9 9h6M9 12h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "nutrition":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3c-2 4-6 6-6 11a6 6 0 1012 0c0-5-4-7-6-11z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ride":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 16l1.5-4h13L20 16M6 16h12v2H6v-2zM7 12l1-2h8l1 2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8.5" cy="18" r="1.25" fill="currentColor" />
          <circle cx="15.5" cy="18" r="1.25" fill="currentColor" />
        </svg>
      );
    case "chauffeur":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 17h16v1H4v-1zM5 17l2-5h10l2 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12V9h8v3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="8" cy="18" r="1.25" fill="currentColor" />
          <circle cx="16" cy="18" r="1.25" fill="currentColor" />
        </svg>
      );
    case "logistics":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 7h11v8H3V7zM14 11h3l3 4v3h-4M14 15h5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="18" r="1.5" fill="currentColor" />
          <circle cx="17" cy="18" r="1.5" fill="currentColor" />
        </svg>
      );
    case "auction":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 20h16M8 18l10-10 2 2L10 20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 6l2 2M12 8l1.5-1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

/** NEW — same base as header bar (`#050505`), white label */
const megaBadgeClass =
  "inline-flex shrink-0 items-center rounded-md bg-[#050505] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white";

function MegaServiceRowDesktop({ item, onNavigate }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-neutral-50"
        onClick={onNavigate}
        role="menuitem"
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${SERVICE_MENU_ICON_WRAP}`}
        >
          <ServiceMenuGlyph name={item.icon} className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-[15px] font-bold leading-tight tracking-tight text-neutral-900">
              {item.label}
            </span>
            {item.badge ? (
              <span className={megaBadgeClass}>{item.badge}</span>
            ) : null}
          </span>
          <span className="mt-1 block text-[13px] font-normal leading-snug text-neutral-500">
            {item.description}
          </span>
        </span>
      </Link>
    </li>
  );
}

function ServicesMegaMenuDesktop({ onNavigate }) {
  const [col1, col2, col3] = SERVICES_MEGA_COLUMNS;
  return (
    <div
      className="grid min-w-0 grid-cols-3 gap-x-8 gap-y-4"
      role="presentation"
    >
      <ul className="m-0 min-w-0 list-none space-y-0.5 p-0" role="list">
        {col1.map((item) => (
          <MegaServiceRowDesktop key={item.label} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
      <ul
        className="m-0 min-w-0 list-none space-y-0.5 border-x border-neutral-100 px-5"
        role="list"
      >
        {col2.map((item) => (
          <MegaServiceRowDesktop key={item.label} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
      <div className="flex min-w-0 flex-col">
        <ul className="m-0 min-w-0 flex-1 list-none space-y-0.5 p-0" role="list">
          {col3.map((item) => (
            <MegaServiceRowDesktop key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-[#70AA26]/22 bg-[rgba(112,170,38,0.09)] px-4 py-3.5 text-left transition-colors hover:bg-[rgba(112,170,38,0.14)]"
        >
          <span>
            <span className="block text-[14px] font-bold text-neutral-900">
              View all industries
            </span>
            <span className="mt-0.5 block text-[12px] leading-snug text-neutral-600">
              Tell us what you&apos;re building — we&apos;ll map the right stack.
            </span>
          </span>
          <span className="shrink-0 text-lg font-semibold text-[#70AA26]" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

function ServicesMenuLinksMobile({ onNavigate, classNameLink }) {
  const [c1, c2, c3] = SERVICES_MEGA_COLUMNS;
  const linkRow = (item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className={classNameLink}
        onClick={onNavigate}
        role="menuitem"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${SERVICE_MENU_ICON_WRAP}`}
        >
          <ServiceMenuGlyph name={item.icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-[14px] font-semibold leading-snug text-white/95">
              {item.label}
            </span>
            {item.badge ? (
              <span className={megaBadgeClass}>{item.badge}</span>
            ) : null}
          </span>
          <span className="mt-0.5 block text-[12px] leading-snug text-white/55">
            {item.description}
          </span>
        </span>
      </Link>
    </li>
  );

  return (
    <div className="flex min-w-0 w-full flex-col gap-0">
      <ul className="m-0 w-full min-w-0 list-none space-y-0.5 py-1" role="list">
        {c1.map(linkRow)}
      </ul>
      <div className="my-2 border-t border-white/12" aria-hidden />
      <ul className="m-0 w-full min-w-0 list-none space-y-0.5 py-1" role="list">
        {c2.map(linkRow)}
      </ul>
      <div className="my-2 border-t border-white/12" aria-hidden />
      <ul className="m-0 w-full min-w-0 list-none space-y-0.5 py-1" role="list">
        {c3.map(linkRow)}
      </ul>
      <Link
        href="/contact"
        onClick={onNavigate}
        className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-left text-[13px] font-semibold text-white transition-colors hover:bg-white/[0.14]"
      >
        View all industries
        <span className="text-[#70AA26]" aria-hidden>
          →
        </span>
      </Link>
    </div>
  );
}

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
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
  const pathname = usePathname();
  const router = useRouter();
  const [headerLeadOpen, setHeaderLeadOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [megaMenuTop, setMegaMenuTop] = useState(null);
  const [mobileNavPortalReady, setMobileNavPortalReady] = useState(false);
  const servicesWrapRef = useRef(null);
  const servicesTriggerRef = useRef(null);

  const navLink = `${navLinkBase} text-[15px]`;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const closeServicesMenu = useCallback(() => {
    setServicesMenuOpen(false);
  }, []);

  /** Match absolute `top-[calc(100%-10px)]` on trigger: mega top = trigger bottom − 10px (viewport px). */
  const syncMegaMenuTop = useCallback(() => {
    const el = servicesTriggerRef.current;
    if (!el) return;
    setMegaMenuTop(el.getBoundingClientRect().bottom - 10);
  }, []);

  const openServicesMenu = useCallback(() => {
    const el = servicesTriggerRef.current;
    if (el) setMegaMenuTop(el.getBoundingClientRect().bottom - 10);
    setServicesMenuOpen(true);
  }, []);

  const onServicesBlurCapture = useCallback((e) => {
    const root = servicesWrapRef.current;
    const next = e.relatedTarget;
    if (!root) return;
    if (next instanceof Node && root.contains(next)) return;
    setServicesMenuOpen(false);
  }, []);

  useEffect(() => {
    setServicesMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesMenuOpen) return undefined;

    const prefetchAll = () => {
      for (const href of SERVICES_MEGA_PREFETCH_HREFS) {
        router.prefetch(href);
      }
      router.prefetch("/contact");
    };

    let idleId = 0;
    let timeoutId = 0;

    if (typeof requestIdleCallback === "function") {
      idleId = requestIdleCallback(prefetchAll, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(prefetchAll, 0);
    }

    return () => {
      if (idleId && typeof cancelIdleCallback === "function") {
        cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [servicesMenuOpen, router]);

  useEffect(() => {
    let rafId = 0;

    const applyScroll = () => {
      rafId = 0;
      const y = window.scrollY;
      /* Hysteresis: avoids flicker / jerk at the threshold */
      setHeaderScrolled((prev) => {
        if (prev) return y < 10 ? false : true;
        return y > 28 ? true : false;
      });
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(applyScroll);
    };

    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!servicesMenuOpen) return undefined;
    const onKey = (ev) => {
      if (ev.key === "Escape") setServicesMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesMenuOpen]);

  useLayoutEffect(() => {
    if (!servicesMenuOpen) return undefined;
    syncMegaMenuTop();
    const onScroll = () => syncMegaMenuTop();
    const onResize = () => syncMegaMenuTop();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [servicesMenuOpen, headerScrolled, pathname, syncMegaMenuTop]);

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

  useEffect(() => {
    setMobileNavPortalReady(true);
  }, []);

  return (
    <>
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center overflow-visible">
      <div
        className={`pointer-events-auto relative min-h-[72px] min-w-0 overflow-visible ${headerStyles.headerShell} ${
          headerScrolled
            ? "mt-[10px] w-[min(100%-2rem,1200px)] max-w-[1200px] rounded-[100px] max-[576px]:rounded-xl border border-solid border-white/[0.1]"
            : "mt-0 w-full max-w-none rounded-none border-0 border-b border-solid border-white/10 shadow-none"
        }`}
      >
        {/* Blur + tint; separate layer avoids backdrop jump in some browsers. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 ${headerStyles.headerShellBackdrop} ${
            headerScrolled ? "rounded-[100px] max-[576px]:rounded-xl" : "rounded-none"
          } ${
            headerScrolled
              ? "bg-[#050505]/85 backdrop-blur-xl backdrop-saturate-150"
              : "bg-[#050505]/24 backdrop-blur-md backdrop-saturate-125 supports-[backdrop-filter]:bg-[#050505]/16"
          }`}
        />
        <div className="relative mx-auto flex h-[72px] min-h-[72px] w-full max-w-[1280px] items-center justify-between overflow-visible px-4 min-[480px]:px-6 min-[992px]:px-8">
        <Link
          prefetch={false}
          href="/"
          aria-label="Apex Labs — Home"
          className="relative z-[20] inline-flex min-w-0 shrink-0 items-center text-lg font-bold tracking-tight min-[400px]:text-[22px] text-inherit no-underline hover:opacity-95"
        >
          <span className="text-white">Apex </span>
          <span className="text-[#70AA26]">Labs</span>
        </Link>

        <nav
          className="hidden items-center gap-[34px] overflow-visible lg:flex"
          aria-label="Main navigation"
        >
          <Link prefetch={false} href="/" className={navLink}>
            Home
          </Link>
          <Link prefetch={false} href="/about" className={navLink}>
            About
          </Link>
          <div
            ref={servicesWrapRef}
            className="relative z-[110]"
            onMouseEnter={openServicesMenu}
            onMouseLeave={() => setServicesMenuOpen(false)}
            onFocusCapture={openServicesMenu}
            onBlurCapture={onServicesBlurCapture}
          >
            <div
              ref={servicesTriggerRef}
              tabIndex={0}
              className={`flex cursor-default items-center gap-1 rounded-md text-[15px] font-medium leading-none outline-none ring-offset-2 ring-offset-transparent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 ${
                servicesMenuOpen
                  ? "text-[#70AA26] hover:text-[#70AA26]"
                  : "text-white/90 hover:text-white"
              }`}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="menu"
              aria-label="Industries menu"
            >
              Industries
              <ChevronDown
                className={`mt-px transition-transform duration-200 ${servicesMenuOpen ? "rotate-180 text-[#70AA26]" : "text-white/70"}`}
              />
            </div>
            <div
              className={`fixed left-1/2 z-[120] w-[min(100vw-1.25rem,1000px)] max-w-[calc(100vw-1.25rem)] -translate-x-1/2 pt-3 transition-[opacity,visibility] duration-150 ${
                servicesMenuOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
              style={megaMenuTop != null ? { top: megaMenuTop } : undefined}
              role="menu"
              aria-label="Industries"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_24px_64px_-16px_rgba(15,23,42,0.28)]">
                <div className="border-b border-neutral-100 bg-white px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-500">
                    Industries
                  </p>
                  <p className="mt-1 text-[17px] font-bold tracking-tight text-neutral-900">
                    Mobile products & platforms
                  </p>
                </div>
                <div className="min-w-0 px-5 py-6 sm:px-6">
                  <ServicesMegaMenuDesktop onNavigate={closeServicesMenu} />
                </div>
              </div>
            </div>
          </div>
          <Link prefetch={false} href="/pricing" className={navLink}>
            Pricing
          </Link>
          <Link prefetch={false} href="/testimonials" className={navLink}>
            Testimonials
          </Link>
          <Link prefetch={false} href="/blog" className={navLink}>
            Blog
          </Link>
          <Link prefetch={false} href="/contact" className={navLink}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/* Hamburger + slide drawer: phone + iPad / tablet until desktop (lg 992px) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="site-btn-motion rounded-full border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-md hover:border-white/25 hover:bg-white/18"
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

          <div className="header-bar-get-started-wrap">
            <WhiteButton
              type="button"
              surface="onDark"
              className="font-semibold"
              onClick={() => setHeaderLeadOpen(true)}
            >
              Get Started
            </WhiteButton>
          </div>
        </div>
        </div>
      </div>

      <HeaderLeadFormDialog open={headerLeadOpen} onClose={() => setHeaderLeadOpen(false)} />
    </header>
    {mobileNavPortalReady
      ? createPortal(
          <div
            className={`pointer-events-none fixed inset-0 z-[10045] lg:hidden ${
              menuOpen ? "pointer-events-auto" : ""
            }`}
            aria-hidden={!menuOpen}
          >
            <button
              type="button"
              className={`absolute inset-0 z-0 bg-black/55 transition-opacity duration-300 ${
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
              className={`pointer-events-auto absolute inset-y-0 right-0 z-10 flex w-[min(92vw,440px)] max-w-full flex-col border-l border-white/12 bg-[#0b0c10]/98 shadow-[-12px_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 ease-out ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <Link
                  prefetch={false}
                  href="/"
                  onClick={closeMenu}
                  aria-label="Apex Labs — Home"
                  className="relative z-[20] inline-flex shrink-0 items-center text-lg font-bold tracking-tight text-inherit no-underline hover:opacity-95"
                >
                  <span className="text-white">Apex </span>
                  <span className="text-[#70AA26]">Labs</span>
                </Link>
                <button
                  type="button"
                  className="site-btn-motion rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-3" aria-label="Mobile">
                {MOBILE_NAV_LINKS.map((item) =>
                  item.label === "Industries" ? (
                    <div key="industries" className="relative z-20 flex flex-col">
                      <button
                        type="button"
                        className="site-btn-motion flex w-full touch-manipulation cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-medium text-white/90 hover:bg-white/10"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-industries-panel"
                        id="mobile-industries-trigger"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileServicesOpen((o) => !o);
                        }}
                      >
                        <span>Industries</span>
                        <ChevronDown
                          className={`shrink-0 text-white/50 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "-rotate-90"}`}
                        />
                      </button>
                      {mobileServicesOpen ? (
                        <div
                          id="mobile-industries-panel"
                          role="region"
                          aria-labelledby="mobile-industries-trigger"
                          className="mb-1 w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.06] px-1.5 py-2"
                        >
                          <p className="px-2 pb-2 text-[12px] font-bold uppercase tracking-wide text-white/55">
                            Industries
                          </p>
                          <ServicesMenuLinksMobile
                            onNavigate={closeMenu}
                            classNameLink="flex items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-white/10"
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link prefetch={false}
                      key={item.href + item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      <span>{item.label}</span>
                      {"chevron" in item && item.chevron ? (
                        <ChevronDown className="-rotate-90 text-white/50" />
                      ) : null}
                    </Link>
                  ),
                )}
                <div className="mt-4 px-1">
                  <WhiteButton
                    type="button"
                    surface="onDark"
                    className="flex w-full items-center justify-center font-semibold"
                    onClick={() => {
                      closeMenu();
                      window.setTimeout(() => setHeaderLeadOpen(true), 0);
                    }}
                  >
                    Get Started
                  </WhiteButton>
                </div>
              </nav>
            </div>
          </div>,
          document.body,
        )
      : null}
    </>
  );
}
