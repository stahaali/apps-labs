"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

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

/** Column 1 first three labels match footer `FOOTER_LINK_HREF` in ContactFooterSection. */
const SERVICES_MEGA_COLUMN_1 = [
  {
    href: "/food-delivery",
    label: "Food Delivery",
    tone: "brand",
    icon: "food",
  },
  {
    href: "/ecommerce-app-development",
    label: "Ecommerce",
    tone: "emerald",
    icon: "cart",
  },
  {
    href: "/fitness-app-development",
    label: "Fitness App Development",
    tone: "rose",
    icon: "fitness",
  },
  {
    href: "/get-started",
    label: "Book an Appointment",
    tone: "sky",
    icon: "calendar",
  },
];

const SERVICES_MEGA_COLUMN_2 = [
  {
    href: "#",
    label: "Classified Platform",
    tone: "violet",
    icon: "classified",
  },
  {
    href: "#",
    label: "Nutrition Platform",
    tone: "lime",
    icon: "nutrition",
  },
  {
    href: "#",
    label: "Ride Booking App",
    tone: "amber",
    icon: "ride",
  },
  {
    href: "#",
    label: "Chauffeur Service Booking",
    tone: "slate",
    icon: "chauffeur",
  },
];

const SERVICES_MEGA_COLUMN_3 = [
  {
    href: "#",
    label: "Logistics Transportation",
    tone: "blue",
    icon: "logistics",
  },
  {
    href: "#",
    label: "Auction App",
    tone: "orange",
    icon: "auction",
  },
];

const toneClass = {
  brand: "bg-[#70AA26]/18 text-[#70AA26]",
  emerald: "bg-emerald-100 text-emerald-700",
  rose: "bg-rose-100 text-rose-700",
  sky: "bg-sky-100 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  lime: "bg-lime-100 text-lime-800",
  amber: "bg-amber-100 text-amber-800",
  slate: "bg-slate-100 text-slate-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
};

function ServiceMenuGlyph({ name }) {
  const c = "h-[18px] w-[18px]";
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

function ServicesMenuLinks({ onNavigate, classNameLink, surface = "light" }) {
  const labelClass =
    surface === "dark"
      ? "text-[15px] font-medium leading-snug text-white/90"
      : "text-[15px] font-medium leading-snug text-neutral-900";

  const labelSpanClass = `${labelClass} min-w-0 flex-1 text-left leading-snug`;

  const linkRow = (item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className={classNameLink}
        onClick={onNavigate}
        role="menuitem"
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${toneClass[item.tone]}`}
        >
          <ServiceMenuGlyph name={item.icon} />
        </span>
        <span className={labelSpanClass}>{item.label}</span>
      </Link>
    </li>
  );

  if (surface === "dark") {
    return (
      <div className="flex min-w-0 w-full flex-col gap-0">
        <ul className="m-0 w-full min-w-0 list-none py-1.5" role="list">
          {SERVICES_MEGA_COLUMN_1.map(linkRow)}
        </ul>
        <div
          className="my-1 border-t border-white/12"
          aria-hidden
        />
        <ul className="m-0 w-full min-w-0 list-none py-1.5" role="list">
          {SERVICES_MEGA_COLUMN_2.map(linkRow)}
        </ul>
        <div
          className="my-1 border-t border-white/12"
          aria-hidden
        />
        <ul className="m-0 w-full min-w-0 list-none py-1.5" role="list">
          {SERVICES_MEGA_COLUMN_3.map(linkRow)}
        </ul>
      </div>
    );
  }

  return (
    <div
      className="grid w-full grid-cols-3 divide-x divide-neutral-200/90 [grid-template-columns:minmax(14.5rem,1fr)_minmax(14.5rem,1fr)_minmax(14.5rem,1fr)]"
      role="presentation"
    >
      <ul className="m-0 min-w-0 list-none py-2 pl-3 pr-3" role="list">
        {SERVICES_MEGA_COLUMN_1.map(linkRow)}
      </ul>
      <ul className="m-0 min-w-0 list-none px-3 py-2" role="list">
        {SERVICES_MEGA_COLUMN_2.map(linkRow)}
      </ul>
      <ul className="m-0 min-w-0 list-none py-2 pl-3 pr-3" role="list">
        {SERVICES_MEGA_COLUMN_3.map(linkRow)}
      </ul>
    </div>
  );
}

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#", label: "Services" },
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesWrapRef = useRef(null);

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
              className={`${navLink} flex cursor-default items-center gap-1 rounded-md outline-none ring-offset-2 ring-offset-transparent focus-visible:ring-2 focus-visible:ring-white/50`}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="menu"
              aria-label="Services menu"
            >
              Services
              <ChevronDown
                className={`mt-px text-white/70 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`absolute left-1/2 top-full z-[120] w-[min(100vw-1.5rem,960px)] max-w-[calc(100vw-1.5rem)] -translate-x-1/2 pt-3 transition-[opacity,visibility] duration-150 ${
                servicesMenuOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
              role="menu"
              aria-label="Services"
            >
              <div className="overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.22)]">
                <div className="border-b border-sky-200/80 bg-sky-100 px-4 py-3">
                  <p className="text-[15px] font-bold text-neutral-900">
                    Services
                  </p>
                </div>
                <div className="min-w-0 w-full overflow-x-auto">
                  <ServicesMenuLinks
                    onNavigate={closeServicesMenu}
                    classNameLink="flex items-start gap-3 rounded-lg px-1 py-2.5 transition-colors hover:bg-neutral-50"
                  />
                </div>
              </div>
            </div>
          </div>
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
            className="hidden rounded-full bg-white px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold leading-none text-[#050505] transition-opacity hover:opacity-90 lg:inline-flex lg:items-center"
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
                      <ServicesMenuLinks
                        surface="dark"
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
              <Link
                href="/get-started"
                className="flex w-full items-center justify-center rounded-full bg-white px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold text-[#050505] transition-opacity hover:opacity-90"
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
