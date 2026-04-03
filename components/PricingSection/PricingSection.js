import Image from "next/image";
import Link from "next/link";
import styles from "./PricingSection.module.css";

const PRIMARY = "#4D5DFB";

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

const TEAM = [
  {
    name: "Michael Carter",
    role: "LEAD MOBILE ENGINEER",
    avatar: "/assets/images/testimonial/testi-image1.png",
  },
  {
    name: "Emily Johnson",
    role: "SENIOR UI/UX DESIGNER",
    avatar: "/assets/images/testimonial/testi-image2.png",
  },
  {
    name: "David Thompson",
    role: "PRODUCT MANAGER",
    avatar: "/assets/images/testimonial/testi-image3.png",
  },
];

function TeamPill({ member, className = "" }) {
  return (
    <div
      className={`relative flex w-fit max-w-full items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 sm:max-w-[min(100%,280px)] sm:gap-3 sm:px-4 sm:py-2 ${className}`}
    >
      <Image
        src={member.avatar}
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
      />
      <div className="w-fit min-w-0 text-left sm:w-auto">
        <p className="whitespace-nowrap text-xs font-bold leading-tight tracking-tight text-neutral-900 sm:text-sm">
          {member.name}
        </p>
        <p className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[10px]">
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
      <span className="text-[13px] font-medium leading-snug text-slate-600 sm:text-sm">
        {children}
      </span>
    </li>
  );
}

function PricingCard({ plan }) {
  const isFeatured = plan.featured;
  const btnClass = isFeatured
    ? "text-white hover:opacity-[0.96]"
    : "bg-neutral-900 text-white hover:bg-neutral-800";

  const cardInner = (
    <div className="relative flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-7 pt-8 text-left sm:p-8">
      <div>
        <h3 className="site-title text-neutral-900">
          {plan.title}
        </h3>
        <p className="mt-1.5 text-[13px] font-medium leading-snug text-slate-500 sm:text-sm">
          {plan.subtitle}
        </p>
        <p className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-[2rem]">
          {plan.price}
        </p>
        <p className="mt-1 text-[12px] font-medium text-slate-500 sm:text-[13px]">
          {plan.priceNote}
        </p>
      </div>
      <Link
        href="#cta-heading"
        className={`mt-6 block w-full rounded-full py-3.5 text-center text-sm font-bold transition ${btnClass}`}
        style={isFeatured ? { backgroundColor: PRIMARY } : undefined}
      >
        Get a Quote
      </Link>
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

export default function PricingSection() {
  return (
    <section
      className="relative bg-[#FDF7EC] py-[var(--home-section-py)]"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#E8ECFF] px-4 py-[var(--home-section-py)] sm:rounded-[2.5rem] sm:px-8 md:rounded-[3rem] md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <span
              className="inline-flex rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
              style={{ backgroundColor: PRIMARY }}
            >
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="site-title mt-6 text-balance text-neutral-900"
            >
              Choose Your <span style={{ color: PRIMARY }}>Plan</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-slate-600 sm:text-base">
              Get a tailored quote based on your project scope
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 lg:mt-14 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8">
            {PLANS.map((plan) => (
              <div key={plan.id} className="flex min-w-0 flex-1 flex-col">
                <PricingCard plan={plan} />
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
