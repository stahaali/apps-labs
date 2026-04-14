import Image from "next/image";
import BlackButton from "@/components/BlackButton/BlackButton";
import GreenButton from "@/components/GreenButton/GreenButton";
import { PRICING_EXPERT_TEAM } from "@/lib/clientTestimonials";
import styles from "./PricingSection.module.css";

const PRIMARY = "#70AA26";

function CheckIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[14px] w-[14px] shrink-0"
      style={{ color: PRIMARY }}
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PLANS = [
  {
    id: "launchpad",
    title: "Launchpad",
    subtitle: "Best for startups & MVPs",
    price: "$8,000",
    priceNote: "One-time project cost",
    featured: false,
    features: [
      "UI/UX Design (up to 10 screens)",
      "Single Platform App (iOS or Android)",
      "Basic Backend Setup",
      "API Integrations",
      "App Store Deployment Support",
    ],
  },
  {
    id: "momentum",
    title: "Momentum",
    subtitle: "For growing businesses & scalable apps",
    price: "$15,000",
    priceNote: "One-time project cost",
    featured: true,
    badge: "Best Value Plan",
    features: [
      "Custom UI/UX Design (up to 20 screens)",
      "Cross-Platform App (iOS + Android)",
      "Scalable Backend Development",
      "Admin Dashboard Panel",
      "Third-party Integrations",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "For advanced & high-performance apps",
    price: "$35,000",
    priceNote: "Custom pricing based on requirements",
    featured: false,
    features: [
      "Advanced UI/UX + Animations",
      "Fully Custom App Development",
      "High-Performance Backend (Cloud/AWS)",
      "Real-time Features (Chat, APIs)",
      "Dedicated Project Support",
    ],
  },
];

const TEAM = PRICING_EXPERT_TEAM.map((m) => ({
  ...m,
  role: m.role.toUpperCase(),
}));

function TeamPill({ member, className = "" }) {
  return (
    <div
      className={`relative flex w-full max-w-full items-center gap-2 rounded-full border border-slate-200/80 bg-white py-1.5 pl-[8px] pr-3 min-[480px]:w-fit sm:max-w-[min(100%,280px)] sm:gap-3 sm:py-2 sm:pl-[8px] sm:pr-4 ${className}`}
    >
      <Image
        src={member.avatar}
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
      />
      <div className="min-w-0 flex-1 text-left sm:w-auto sm:flex-none">
        <p className="text-xs font-bold leading-tight tracking-tight text-neutral-900 sm:text-sm sm:whitespace-nowrap">
          {member.name}
        </p>
        <p className="text-[8px] font-semibold uppercase leading-tight tracking-wide text-slate-400 sm:text-[10px] sm:whitespace-nowrap">
          {member.role}
        </p>
      </div>
    </div>
  );
}

function CheckListItem({ children }) {
  return (
    <li className="flex gap-3 text-left">
      <span
        className="mt-0.5 inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#dbeafe]"
        aria-hidden
      >
        <CheckIcon />
      </span>
      <span className="text-[16px] font-medium leading-snug text-slate-600">
        {children}
      </span>
    </li>
  );
}

/** Same touch target + padding for featured (green) and standard (black) quote CTAs */
const PRICING_GET_QUOTE_LAYOUT =
  "mt-6 inline-flex min-h-[48px] w-full shrink-0 items-center justify-center px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-base font-bold leading-none min-[480px]:min-h-[48px]";

function PricingCard({ plan, quoteHref }) {
  const isFeatured = plan.featured;

  const cardInner = (
    <div className="relative flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-7 pt-8 text-left sm:p-8">
      <div>
        <h3 className="text-[24px] font-bold leading-tight tracking-tight text-neutral-900">
          {plan.title}
        </h3>
        <p className="mt-1.5 text-[13px] font-medium leading-snug text-slate-500 sm:text-sm">
          {plan.subtitle}
        </p>
        <p className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-[2rem]">
          {plan.price}
        </p>
        <p className="mt-1 text-[14px] font-medium text-slate-500">
          {plan.priceNote}
        </p>
      </div>
      {isFeatured ? (
        <GreenButton
          href={quoteHref}
          focusOn="light"
          size="none"
          className={`${PRICING_GET_QUOTE_LAYOUT} rounded-full shadow-[0_4px_14px_-4px_rgba(0,0,0,0.12)] hover:shadow-[0_14px_28px_-12px_rgba(0,0,0,0.18)] hover:opacity-[0.96]`}
        >
          Get a Quote
        </GreenButton>
      ) : (
        <BlackButton
          href={quoteHref}
          focusOn="light"
          size="none"
          className={`${PRICING_GET_QUOTE_LAYOUT} text-center shadow-[0_4px_14px_-4px_rgba(0,0,0,0.12)] hover:shadow-[0_14px_28px_-12px_rgba(0,0,0,0.18)] hover:opacity-[0.96]`}
        >
          Get a Quote
        </BlackButton>
      )}
      <ul className="mt-8 flex flex-1 flex-col gap-3.5 text-left">
        {plan.features.map((line) => (
          <CheckListItem key={line}>{line}</CheckListItem>
        ))}
      </ul>
    </div>
  );

  if (!isFeatured) {
    return <div className="flex h-full flex-col">{cardInner}</div>;
  }

  return (
    <div className="relative flex h-full flex-col">
      <div
        className={`absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-neutral-900 sm:text-[11px] ${styles.bestValueBadge}`}
        style={{ backgroundColor: "#FFC107" }}
      >
        <span
          className={`text-sm leading-none ${styles.bestValueBadgeStar}`}
          aria-hidden
        >
          ★
        </span>
        {plan.badge}
      </div>
      {cardInner}
    </div>
  );
}

export default function PricingSection({
  noTopPadding = false,
  sectionPadding84 = false,
  quoteHref = "#cta-heading",
  titleAs: TitleTag = "h2",
  /** Hide green “Pricing” pill when a page-level banner already shows it */
  hideSectionEyebrow = false,
}) {
  const sectionVerticalClass = sectionPadding84
    ? styles.sectionPadding84
    : `py-[var(--home-section-py)]${noTopPadding ? ` ${styles.paddingNoTopPad}` : ""}`;

  return (
    <section
      className={`relative bg-[#FDF7EC] ${sectionVerticalClass}`}
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#EBFAD7] to-[#ECF0FF] px-4 sm:rounded-[2.5rem] sm:px-8 md:rounded-[3rem] md:px-10 lg:px-12 ${styles.paddingtopbottom}`}
        >
          <div className="mx-auto max-w-6xl text-center">
            {!hideSectionEyebrow ? (
              <span
                className="inline-flex rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
                style={{ backgroundColor: PRIMARY }}
              >
                Pricing
              </span>
            ) : null}
            <TitleTag
              id="pricing-heading"
              className={`title text-balance text-neutral-900 ${hideSectionEyebrow ? "mt-0" : "mt-6"}`}
            >
              Choose Your <span style={{ color: PRIMARY }}>Plan</span>
            </TitleTag>
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-slate-600 sm:text-base">
              Get a tailored quote based on your project scope
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 lg:mt-14 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8">
            {PLANS.map((plan) => (
              <div key={plan.id} className="flex min-w-0 flex-1 flex-col">
                <PricingCard plan={plan} quoteHref={quoteHref} />
              </div>
            ))}
          </div>

          {/* Expert team: 5 columns — copy | 3 pills | stat — equal gap */}
          <div className="mx-auto max-w-6xl pt-10 lg:pt-12">
            <div
              className={`grid grid-cols-1 items-start gap-6 rounded-2xl lg:grid-cols-5 lg:items-center lg:gap-4 xl:gap-6 ${styles.expertTeamGrid}`}
              aria-labelledby="expert-team-heading"
            >
              <div className="flex min-w-0 flex-col justify-center text-left">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-0.5 shrink-0 select-none text-lg font-bold leading-none sm:text-xl"
                    style={{ color: PRIMARY }}
                    aria-hidden
                  >
                    *
                  </span>
                  <div className="min-w-0">
                    <h3
                      id="expert-team-heading"
                      className="text-[1.1rem] font-bold leading-snug"
                      style={{ color: PRIMARY }}
                    >
                      Meet Our Expert Team
                    </h3>
                    <p className="mt-2 text-[13px] font-medium leading-relaxed text-slate-500 sm:text-sm">
                      Built by experienced professionals trusted by startups
                      across the USA.
                    </p>
                  </div>
                </div>
              </div>

              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="flex min-w-0 items-center justify-start sm:justify-center md:justify-start"
                >
                  <TeamPill member={member} className={styles.teamPillIpad} />
                </div>
              ))}

              <div
                className={`flex min-w-0 items-center justify-start sm:justify-center md:justify-start ${styles.expertTeamStat}`}
              >
                <div
                  className={`flex w-fit max-w-full items-stretch overflow-hidden rounded-full bg-black px-3 text-white sm:max-w-[280px] sm:px-0 sm:w-full md:w-fit md:max-w-none ${styles.statPill}`}
                >
                  <div className="flex min-w-[4.75rem] shrink-0 items-center justify-center py-3 pr-2.5 sm:min-w-[5rem] sm:px-4 sm:pr-4">
                    <span className="text-[1.3rem] font-bold leading-none tracking-tight">
                      100+
                    </span>
                  </div>
                  <div className="flex shrink-0 flex-col justify-center border-l border-white/20 py-2.5 pl-2.5 sm:min-w-0 sm:flex-1 sm:px-3 md:flex-none">
                    <p
                      className={`text-[9px] font-semibold uppercase leading-tight tracking-wide text-white sm:text-[10px] ${styles.statPillLabel}`}
                    >
                      <span className="block">APPS DELIVERED</span>
                      <span className="block">ACROSS THE U.S.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
