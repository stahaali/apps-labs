"use client";

import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import HeroBannerNoiseOverlay from "@/components/HeroBanner/HeroBannerNoiseOverlay";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import contactStyles from "@/components/ContactPage/ContactPage.module.css";
import styles from "./BookAppointmentPage.module.css";

const PRIMARY = "#70AA26";

/** Same rhythm as inner pages + contact light bands */
const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";

const AFTER_HEAD = "mt-12 sm:mt-14 lg:mt-16";

const SECTION_LIGHT =
  "px-4 py-12 min-[480px]:px-6 sm:px-10 sm:py-16 lg:py-20";

const STEPS = [
  {
    n: "01",
    title: "Pick a time",
    body: "Share your availability—we’ll confirm a slot that works for your timezone and team.",
    icon: "calendar",
  },
  {
    n: "02",
    title: "Discovery call",
    body: "We’ll walk through goals, platforms, integrations, and timeline so nothing important is missed.",
    icon: "call",
  },
  {
    n: "03",
    title: "Clear next steps",
    body: "You’ll leave with a concise summary: scope options, rough phases, and how to move forward.",
    icon: "plan",
  },
];

const PREP_ITEMS = [
  "A short note on the product (audience, problem, and what “done” looks like)",
  "Rough timeline or launch window, if you have one",
  "Any must-have integrations (payments, auth, maps, POS, etc.)",
];

const STATS_MINI = [
  { value: "30–45", label: "Typical call length" },
  { value: "24h", label: "Reply on business days" },
  { value: "Global", label: "Time zones supported" },
];

const CALL_TOPICS = [
  {
    title: "Product & MVP scope",
    body: "Audience, core flows, and what a first release should prove in market.",
    icon: "target",
  },
  {
    title: "Platforms & UX",
    body: "iOS, Android, web—or all three—and how the experience should feel for your users.",
    icon: "device",
  },
  {
    title: "Integrations & data",
    body: "Payments, auth, maps, POS, CRM, and how systems should connect cleanly.",
    icon: "plug",
  },
  {
    title: "Timeline & model",
    body: "Milestones, team involvement, and engagement options that fit your stage.",
    icon: "timeline",
  },
];

function StepGlyph({ name }) {
  const c = "h-6 w-6";
  switch (name) {
    case "calendar":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 5V3M16 5V3M5 9h14M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path d="M9 14h2M13 14h2M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "call":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 10l2.5 2.5a2 2 0 010 2.8l-1 1a2 2 0 01-2.1.5 9 9 0 01-4.2-4.2 2 2 0 01.5-2.1l1-1a2 2 0 012.8 0L15 10z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8 5c2.5 4 6.5 8 10.5 10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "plan":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2v0z" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function TopicGlyph({ name }) {
  const c = "h-5 w-5";
  switch (name) {
    case "target":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="1.25" fill="currentColor" />
        </svg>
      );
    case "device":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "plug":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 10V8a4 4 0 014-4h1M16 10v2a4 4 0 01-4 4h-1M10 14l-2 2M14 14l2 2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "timeline":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19h16M7 15l3-8 4 5 3-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckBullet() {
  return (
    <span
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(112,170,38,0.15)] text-[#5a8a22]"
      aria-hidden
    >
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path
          d="M1 5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function BookAppointmentPage() {
  const { openModal } = useLeadFormModal();

  return (
    <main className="flex min-h-screen flex-col">
      <section
        className={`${contactStyles.contactHero} relative px-4 pb-14 pt-[calc(72px+2.5rem)] min-[480px]:px-6 sm:px-10 sm:pb-16 sm:pt-[calc(72px+3rem)] lg:pb-20 lg:pt-[calc(72px+4rem)]`}
        aria-labelledby="book-appointment-heading"
      >
        <HeroBannerNoiseOverlay />
        <div className={styles.heroGlow} aria-hidden />
        <div className={`${styles.heroInner} mx-auto max-w-[1200px] text-center`}>
          <AnimateOnView variant="fadeIn">
            <span
              className="inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
              style={{ backgroundColor: PRIMARY }}
            >
              Book a call
            </span>
          </AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={90}>
            <h1
              id="book-appointment-heading"
              className="title mx-auto mt-5 max-w-4xl text-balance text-white sm:mt-6"
            >
              Book an <span style={{ color: PRIMARY }}>appointment</span>
            </h1>
          </AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={160}>
            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
              Reserve time with our team to align on scope, stack, milestones, and budget—before you
              commit to a build.
            </p>
          </AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={230}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border-0 bg-[#70AA26] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold text-white transition-[filter] hover:brightness-105 min-[480px]:w-auto"
              >
                Schedule consultation
              </button>
              <Link
                href="/contact"
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 min-[480px]:w-auto"
              >
                Prefer the contact form?
              </Link>
            </div>
          </AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={300}>
            <div className={styles.trustRow}>
              <span className={styles.trustChip}>No obligation</span>
              <span className={styles.trustChip}>Free consultation</span>
              <span className={styles.trustChip}>Product & engineering on the call</span>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section
        className={`${contactStyles.contactLight} ${SECTION_LIGHT}`}
        aria-label="Why book and how it works"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-[900px] sm:mb-14 lg:mb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <AnimateOnView variant="fadeLeft" className="relative order-2 mt-10 lg:order-1 lg:mt-0">
              <div className={`${styles.imageFrame} aspect-[4/3] w-full min-h-[200px]`}>
                <ImageWithSkeleton
                  src="/assets/images-webp/our-portfolio/home/1.png"
                  alt=""
                  fill
                  className={`object-cover object-center ${styles.imageHover}`}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  skeletonClassName="rounded-2xl"
                />
              </div>
            </AnimateOnView>
            <AnimateOnView variant="fadeUp" delayMs={100} className="order-1 text-center lg:order-2 lg:text-left">
              <span className={`${THEME_PILL} lg:inline-flex`}>Why book a call</span>
              <h2 className="title mt-0 text-balance text-neutral-900">
                A working session with{" "}
                <span className="text-[#70AA26]">product experts</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px] lg:mx-0">
                We’ll listen first, then map realistic options for design, engineering, and launch—so
                you can decide with confidence.
              </p>
              <div className={`mx-auto mt-8 grid max-w-md grid-cols-3 gap-3 sm:gap-4 lg:mx-0 lg:max-w-none`}>
                {STATS_MINI.map((s) => (
                  <div key={s.label} className={styles.statMini}>
                    <span className={styles.statMiniValue}>{s.value}</span>
                    <span className={styles.statMiniLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>

          <AnimateOnView variant="fadeUp" className="mx-auto max-w-[900px] text-center">
            <span className={THEME_PILL}>How it works</span>
            <h2 className="title text-balance text-neutral-900">
              From calendar invite to{" "}
              <span className="text-[#70AA26]">a clear plan</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              A focused session with product and engineering leads—no pressure, no jargon-only decks.
            </p>
          </AnimateOnView>

          <div className={`${styles.stepsTrack} ${AFTER_HEAD} grid gap-6 md:grid-cols-3 lg:gap-8`}>
            {STEPS.map((s, i) => (
              <AnimateOnView key={s.n} variant="fadeUp" delayMs={i * 80}>
                <article
                  className={`${contactStyles.contactLightCard} ${styles.stepCard} flex h-full flex-col p-6 sm:p-7`}
                >
                  <div className={styles.stepIconWrap}>
                    <StepGlyph name={s.icon} />
                  </div>
                  <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#70AA26]">
                    {s.n}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
                    {s.body}
                  </p>
                </article>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${SECTION_LIGHT} border-y border-neutral-200/80 bg-[#fdf7ec]`}
        aria-labelledby="book-call-topics-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <AnimateOnView variant="fadeUp" className="mx-auto max-w-[900px] text-center">
            <span className={THEME_PILL}>On the call</span>
            <h2 id="book-call-topics-heading" className="title text-balance text-neutral-900">
              What we typically{" "}
              <span className="text-[#70AA26]">cover together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              Every project is different—these are the themes that help us give you useful, honest
              guidance in one session.
            </p>
          </AnimateOnView>

          <div className={`grid gap-5 sm:grid-cols-2 sm:gap-6 ${AFTER_HEAD}`}>
            {CALL_TOPICS.map((t, i) => (
              <AnimateOnView key={t.title} variant="fadeUp" delayMs={i * 70}>
                <article className={styles.topicCard}>
                  <div className={styles.topicIcon}>
                    <TopicGlyph name={t.icon} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
                    {t.body}
                  </p>
                </article>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className={`${contactStyles.contactLight} ${SECTION_LIGHT}`} aria-label="Prepare for your call">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto border-t border-neutral-200/90 pt-16 sm:pt-20 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:pt-24">
            <AnimateOnView variant="fadeLeft" className="relative order-2 lg:order-1">
              <div className={`${styles.imageFrame} aspect-[4/3] w-full min-h-[220px]`}>
                <ImageWithSkeleton
                  src="/assets/images-webp/our-portfolio/food-delivery/1.png"
                  alt=""
                  fill
                  className={`object-cover object-center ${styles.imageHover}`}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  skeletonClassName="rounded-2xl"
                />
              </div>
            </AnimateOnView>
            <AnimateOnView variant="fadeUp" delayMs={100} className="order-1 mb-10 lg:order-2 lg:mb-0">
              <span className={THEME_PILL}>Before we meet</span>
              <h2 className="title text-balance text-neutral-900">
                Bring a few details so we can{" "}
                <span className="text-[#70AA26]">move faster</span>
              </h2>
              <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
                You don’t need a full spec—just enough context for a productive conversation.
              </p>
              <ul className="mt-6 space-y-3.5 text-[15px] leading-relaxed text-neutral-700 sm:text-[16px]">
                {PREP_ITEMS.map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckBullet />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={openModal}
                className="mt-8 inline-flex items-center justify-center rounded-full border-0 bg-[#70AA26] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold text-white transition-[filter] hover:brightness-105"
              >
                Open scheduling form
              </button>
            </AnimateOnView>
          </div>

          <AnimateOnView variant="fadeUp" className={`${AFTER_HEAD} mx-auto max-w-[720px]`}>
            <div className={styles.closingBand}>
              <p className="m-0 text-center text-[15px] leading-relaxed text-neutral-700 sm:text-[16px]">
                Rather email first?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#70AA26] underline-offset-4 hover:underline"
                >
                  Go to Contact
                </Link>
                —we respond within one business day.
              </p>
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-full border border-[#70AA26]/35 bg-white px-6 py-2.5 text-[14px] font-semibold text-[#5a8a22] shadow-sm transition-[background,box-shadow] hover:bg-[rgba(112,170,38,0.08)]"
                >
                  Or open the lead form
                </button>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  );
}
