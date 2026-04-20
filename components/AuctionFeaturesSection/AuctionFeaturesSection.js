import styles from "./AuctionFeaturesSection.module.css";
import SuitePhoneCarousel from "../SuitePhoneCarousel/SuitePhoneCarousel";

const ECOMMERCE_PHONE_FRAME =
  "/assets/images-webp/ecommerce-technology/mobile-image.webp";

const ECOMMERCE_FEATURE_SCREENS = [5, 6, 7, 8].map(
  (n) => `/assets/images-webp/ecommerce-technology/${n}.webp`
);

const FEATURE_ITEMS = [
  {
    title: "Own Your Source Code",
    description:
      "Complete source code for your application—full ownership and freedom to extend, customize, or migrate on your terms.",
  },
  {
    title: "Endless Integrations",
    description:
      "Connect PSPs, CRM, email, identity, notifications, and partner APIs so listings, bids, and payouts run as one stack.",
  },
  {
    title: "Exceptional UI/UX",
    description:
      "Interfaces bidders and consignors actually finish—clear lot detail, fast filters, and trust cues where money changes hands.",
  },
  {
    title: "Dedicated Support",
    description:
      "Expert support through launch, marquee events, and new auction formats when moderation and settlements need steady hands.",
  },
  {
    title: "100% Customized Solution",
    description:
      "Tailored to your fee model, buyer types, reserves, and how you verify sellers, handle disputes, and grow categories over time.",
  },
  {
    title: "Highly Robust & Scalable Solution",
    description:
      "Built for closing-night spikes, media-heavy catalogs, and enterprise-grade traffic without sacrificing bid ordering or checkout reliability.",
  },
];

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureCard({ title, description }) {
  return (
    <article className="relative z-[1] min-w-0 w-full rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.12)] sm:p-6">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-3">
          <span className="mt-[4px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#70AA26]">
            <CheckIcon />
          </span>
          <h3 className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tight text-neutral-900 sm:text-[17px]">
            {title}
          </h3>
        </div>
        <p className="mt-2 min-h-[5.25rem] pl-[calc(18px+0.75rem)] text-pretty text-sm leading-relaxed text-slate-600 sm:min-h-[6.125rem] sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AuctionFeaturesSection() {
  return (
    <section
      id="auction-app-features"
      className={styles.auctionFeaturesSection}
      aria-labelledby="auction-features-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className={`sections-surface1 rounded-[28px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.innercontainer}`}>
          <header className="mx-auto max-w-[1000px] text-center">
            <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
              Features
            </span>
            <h2 id="auction-features-heading" className="title text-balance text-neutral-900">
              This Is Just The Start - Delve Into <span className="text-[#70AA26]">Our Wide Range Of Thrilling Features!</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              Explore capabilities that elevate your auction product—from discovery and trust to bidding, settlement, and admin
              beyond template limits.
            </p>
          </header>

          <div className="mx-auto mt-12 w-full sm:mt-14 lg:mt-16">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-12">
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                {FEATURE_ITEMS.map((item) => (
                  <FeatureCard key={item.title} title={item.title} description={item.description} />
                ))}
              </div>

              <div className="flex w-full shrink-0 justify-center lg:w-[280px] lg:max-w-[280px] lg:justify-end lg:pt-2 xl:w-[300px] xl:max-w-[300px]">
                <div className="w-full max-w-[300px]">
                  <SuitePhoneCarousel
                    frameSrc={ECOMMERCE_PHONE_FRAME}
                    screenSrcs={ECOMMERCE_FEATURE_SCREENS}
                    intervalMs={3000}
                    alt="Auction app preview on a phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
