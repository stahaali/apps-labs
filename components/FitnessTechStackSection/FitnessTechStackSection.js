"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import GreenButton from "@/components/GreenButton/GreenButton";
import styles from "./FitnessTechStackSection.module.css";

const SHADOW_IMAGE = "/assets/images-webp/techstack/shadow-1.png";
const SHADOW_WIDTH = 700;
const img = (n) => `/assets/images-webp/techstack/${n}.png`;

const TAB_ID_PREFIX = "fitness-tab-";
const PANEL_ID_PREFIX = "fitness-techstack-panel-";

const TABS = [
  {
    id: "mobile",
    label: "Mobile Technologies",
    items: [
      { title: "React Native", image: img(1) },
      { title: "Flutter", image: img(2) },
      { title: "Swift & Kotlin", image: img(3) },
    ],
  },
  {
    id: "uiux",
    label: "Ui/Ux",
    items: [
      { title: "Design Systems", image: img(1) },
      { title: "Prototyping", image: img(2) },
      { title: "User Research", image: img(3) },
    ],
  },
  {
    id: "web",
    label: "Web & Hybrid",
    items: [
      { title: "Progressive Web", image: img(1) },
      { title: "Cross-Platform", image: img(2) },
      { title: "API Integration", image: img(3) },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Push Notifications",
    items: [
      { title: "Cloud Scale", image: img(1) },
      { title: "Real-Time Alerts", image: img(2) },
      { title: "Secure Delivery", image: img(3) },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    items: [
      { title: "Smart Recommendations", image: img(1) },
      { title: "Demand Forecasting", image: img(2) },
      { title: "Fraud Detection", image: img(3) },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    items: [
      { title: "Secure Auth", image: img(1) },
      { title: "Data Encryption", image: img(2) },
      { title: "Compliance Ready", image: img(3) },
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    items: [
      { title: "Live Dashboards", image: img(1) },
      { title: "Order Insights", image: img(2) },
      { title: "KPI Tracking", image: img(3) },
    ],
  },
  {
    id: "wearables",
    label: "Wearables",
    items: [
      { title: "Android Wear", image: img(1) },
      { title: "Fitness Tracker", image: img(2) },
      { title: "Apple Watch", image: img(3) },
    ],
  },
];

function ChevronLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FitnessTechStackSection() {
  const scrollRef = useRef(null);
  const [activeId, setActiveId] = useState("wearables");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const alignTabInRail = useCallback((tabId) => {
    requestAnimationFrame(() => {
      const container = scrollRef.current;
      const btn = document.getElementById(`${TAB_ID_PREFIX}${tabId}`);
      if (!container || !btn) return;

      const c = container.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      const btnCenter = b.left + b.width / 2;
      const railCenter = c.left + c.width / 2;
      const delta = btnCenter - railCenter;
      if (Math.abs(delta) < 2) return;

      container.scrollBy({ left: delta, behavior: "auto" });
    });
  }, []);

  const scrollTabs = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  const activeTab = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section
      className={styles.fitnessTechStack}
      aria-labelledby="fitness-tech-stack-heading"
    >
      <div className={`${styles.iconShadowWrap} hidden sm:block`} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={SHADOW_WIDTH}
          height={SHADOW_WIDTH}
          className={styles.iconShadowImage}
        />
      </div>

      <div className={`${styles.inner} relative z-10`}>
        <header className="mx-auto max-w-[1020px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Techstack
          </span>
          <h2
            id="fitness-tech-stack-heading"
            className="title text-balance text-neutral-900"
          >
            Advanced Tools &{" "}
            <span className="text-[#70AA26]">Latest Technologies</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Ship your fitness product with modern stacks—mobile, cloud, wearables,
            and analytics—so you can innovate fast and scale with confidence.
          </p>
        </header>

        <div
          className="mx-auto mt-10 w-full max-w-4xl sm:mt-12 "
          role="region"
          aria-label="Technology categories"
        >
          <div className={styles.tabBarRow}>
            <div className={styles.tabRail}>
              <button
                type="button"
                className={styles.arrowBtnLeft}
                onClick={() => scrollTabs(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll tabs left"
              >
                <span className="text-stone-600">
                  <ChevronLeft />
                </span>
              </button>

              <div
                ref={scrollRef}
                className={styles.tabScroll}
                role="tablist"
                aria-label="Select technology category"
              >
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`${TAB_ID_PREFIX}${tab.id}`}
                    aria-selected={activeId === tab.id}
                    aria-controls={`${PANEL_ID_PREFIX}${tab.id}`}
                    className={
                      activeId === tab.id
                        ? `${styles.tabBtn} ${styles.tabBtnActive}`
                        : styles.tabBtn
                    }
                    onClick={() => {
                      setActiveId(tab.id);
                      alignTabInRail(tab.id);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.arrowBtnRight}
                onClick={() => scrollTabs(1)}
                disabled={!canScrollRight}
                aria-label="Scroll tabs right"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div
          id={`${PANEL_ID_PREFIX}${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`${TAB_ID_PREFIX}${activeTab.id}`}
          className="mx-auto mt-10 w-full sm:mt-12"
        >
          <div className={styles.cardsGrid}>
            {activeTab.items.map((item) => (
              <article key={item.title} className={styles.techCard}>
                <div className={styles.iconWrap}>
                  <ImageWithSkeleton
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 639px) 120px, 96px"
                    skeletonClassName="rounded-xl"
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <GreenButton
            href="/contact"
            focusOn="light"
            className="font-bold tracking-[0.02em] text-[15px] shadow-[0_4px_14px_-4px_rgba(112,170,38,0.55)] sm:text-base"
          >
            Book Free Consultation
          </GreenButton>
        </div>
      </div>
    </section>
  );
}
