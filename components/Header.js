"use client";

import Link from "next/link";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

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
 * Services mega menu — three columns, icon + title + short description (weDevs-style).
 * First column links match footer `FOOTER_LINK_HREF` where applicable.
 */
const SERVICES_MEGA_COLUMNS = [
  [
    {
      href: "/food-delivery",
      label: "Food Delivery",
      description:
        "Ordering, delivery tracking, and restaurant dashboards in one product.",
      tone: "brand",
      icon: "food",
    },
    {
      href: "/food-delivery/v1",
      label: "Restaurant ordering (v1)",
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

/** Services mega-menu: soft mint pill + saturated lime strokes (all items match). */
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

/** Match `SERVICE_MENU_ICON_WRAP` (mint pill + lime label). */
const megaBadgeClass =
  "inline-flex shrink-0 items-center rounded-md bg-[#E8F5E1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-900";

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
              View all services
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
              <span className="inline-flex shrink-0 items-center rounded-md bg-[#E8F5E1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-900">
                {item.badge}
              </span>
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
        View all services
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
  { href: "#", label: "Services" },
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
  const { openModal } = useLeadFormModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const servicesWrapRef = useRef(null);

  const navLink = `${navLinkBase} text-[15px]`;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const closeServicesMenu = useCallback(() => {
    setServicesMenuOpen(false);
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
    let rafId = 0;

    const applyScroll = () => {
      rafId = 0;
      setHeaderScrolled(window.scrollY > 8);
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
    <header
      className={`fixed z-[100] overflow-visible ${
        headerScrolled
          ? "left-1/2 top-[10px] w-[min(100%-2rem,1200px)] -translate-x-1/2 rounded-2xl border border-solid border-white/[0.1] shadow-[0_12px_40px_-14px_rgba(0,0,0,0.55)]"
          : "inset-x-0 top-0 w-full border-b border-solid border-white/10 shadow-none"
      }`}
    >
      <div
        className={`relative min-h-[72px] w-full ${
          headerScrolled ? headerStyles.verticalDockIn : ""
        }`}
      >
        {/* Blur + tint; separate layer avoids backdrop jump in some browsers. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 ${
            headerScrolled ? "rounded-2xl" : ""
          } ${
            headerScrolled
              ? "bg-[#050505]/85 backdrop-blur-xl backdrop-saturate-150"
              : "bg-[#050505]/24 backdrop-blur-md backdrop-saturate-125 supports-[backdrop-filter]:bg-[#050505]/16"
          }`}
        />
        <div
          className={`relative mx-auto flex h-[72px] min-h-[72px] w-full items-center justify-between px-4 min-[480px]:px-6 min-[992px]:px-8 ${
            headerScrolled ? "max-w-none" : "max-w-[1280px]"
          }`}
        >
        <Link
          href="/"
          className="min-w-0 shrink-0 text-lg font-bold tracking-tight min-[400px]:text-[22px]"
        >
          <span className="text-white">Apex </span>
          <span className="text-[#70AA26]">Labs</span>
        </Link>

        <nav className="hidden items-center gap-[34px] lg:flex" aria-label="Main navigation">
          <Link href="/" className={navLink}>
            Home
          </Link>
          <Link href="/about" className={navLink}>
            About
          </Link>
          <div
            ref={servicesWrapRef}
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
            onFocusCapture={() => setServicesMenuOpen(true)}
            onBlurCapture={onServicesBlurCapture}
          >
            <div
              tabIndex={0}
              className={`flex cursor-default items-center gap-1 rounded-md text-[15px] font-medium leading-none outline-none ring-offset-2 ring-offset-transparent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 ${
                servicesMenuOpen
                  ? "text-[#70AA26] hover:text-[#70AA26]"
                  : "text-white/90 hover:text-white"
              }`}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="menu"
              aria-label="Services menu"
            >
              Services
              <ChevronDown
                className={`mt-px transition-transform duration-200 ${servicesMenuOpen ? "rotate-180 text-[#70AA26]" : "text-white/70"}`}
              />
            </div>
            <div
              className={`fixed left-1/2 z-[120] w-[min(100vw-1.25rem,1000px)] max-w-[calc(100vw-1.25rem)] -translate-x-1/2 pt-3 transition-[opacity,visibility] duration-150 ${
                headerScrolled
                  ? "top-[calc(10px+72px+0.75rem)]"
                  : "top-[calc(72px+0.75rem)]"
              } ${
                servicesMenuOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
              role="menu"
              aria-label="Services"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_24px_64px_-16px_rgba(15,23,42,0.28)]">
                <div className="border-b border-neutral-100 bg-white px-6 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-500">
                    Services
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
          <Link href="/pricing" className={navLink}>
            Pricing
          </Link>
          <Link href="/testimonials" className={navLink}>
            Testimonials
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
              className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-md transition-colors hover:bg-white/15"
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

          <button
            type="button"
            className="hidden cursor-pointer rounded-full border-0 bg-white px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold leading-none text-[#050505] transition-opacity hover:opacity-90 lg:inline-flex lg:items-center"
            onClick={openModal}
          >
            Get Started
          </button>
        </div>
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
            {MOBILE_NAV_LINKS.map((item) =>
              item.label === "Services" ? (
                <div key="services" className="relative z-20 flex flex-col">
                  <button
                    type="button"
                    className="flex w-full touch-manipulation cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-medium text-white/90 hover:bg-white/10"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-panel"
                    id="mobile-services-trigger"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen((o) => !o);
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`shrink-0 text-white/50 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "-rotate-90"}`}
                    />
                  </button>
                  {mobileServicesOpen ? (
                    <div
                      id="mobile-services-panel"
                      role="region"
                      aria-labelledby="mobile-services-trigger"
                      className="mb-1 w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.06] px-1.5 py-2"
                    >
                      <p className="px-2 pb-2 text-[12px] font-bold uppercase tracking-wide text-white/55">
                        Services
                      </p>
                      <ServicesMenuLinksMobile
                        onNavigate={closeMenu}
                        classNameLink="flex items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-white/10"
                      />
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
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
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-full border-0 bg-white px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold text-[#050505] transition-opacity hover:opacity-90"
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
