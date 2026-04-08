import Image from "next/image";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./EcommerceTechBoostSection.module.css";

const SHADOW_IMG = "/assets/images-webp/technology/shadow-3.png";
const BASE = "/assets/images-webp/technology";

const PHONES = `${BASE}/1.png`;

const CARDS = [
  {
    title: "Frictionless Shopping",
    icon: `${BASE}/2.png`,
    description:
      "Guide shoppers from discovery to purchase with clear catalog navigation, variants, promotions, and checkout flows that feel effortless on every device.",
  },
  {
    title: "Fulfillment & Scale",
    icon: `${BASE}/3.png`,
    description:
      "Sync inventory, orders, and carriers so your team can handle peaks, split shipments, and returns without losing visibility or control.",
  },
  {
    title: "Trusted Buyer Journey",
    icon: `${BASE}/4.png`,
    description:
      "Build confidence with order tracking, notifications, and operational dashboards that keep customers informed and support teams ahead of issues.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechBoostCard({ title, description, icon }) {
  return (
    <article className="relative z-[1] flex flex-row max-[576px]:flex-col max-[576px]:items-stretch gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.12)] sm:gap-5 sm:p-6 bg-[#FDF7EC]">
      <div className="relative h-[72px] w-[72px] shrink-0 max-[576px]:self-start sm:h-[88px] sm:w-[88px]">
        <ImageWithSkeleton
          src={icon}
          alt=""
          fill
          className="object-contain object-center"
          sizes="88px"
          skeletonClassName="rounded-lg"
        />
      </div>
      <div className="min-w-0 flex-1 pr-11 sm:pr-12 max-[576px]:flex max-[576px]:w-full max-[576px]:flex-col max-[576px]:flex-none max-[576px]:pr-12">
        <h3 className="text-[24px] font-bold leading-snug tracking-tight text-neutral-900">
          {title}
        </h3>
        <p className="mt-2 min-h-[5.25rem] text-pretty text-sm leading-relaxed text-slate-600 max-[576px]:min-h-0 sm:min-h-[6.125rem] sm:text-[15px]">
          {description}
        </p>
      </div>
      <Link
        href="#"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#70AA26] transition-transform hover:scale-105 sm:right-5 sm:top-5"
        aria-label={`Learn more about ${title}`}
      >
        <ArrowIcon />
      </Link>
    </article>
  );
}

export default function EcommerceTechBoostSection() {
  return (
    <section
      className="relative w-full overflow-x-clip py-12 sm:py-14 lg:py-16"
      aria-labelledby="ecommerce-tech-boost-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Technology
          </span>
          <h2
            id="ecommerce-tech-boost-heading"
            className="title text-balance text-neutral-900"
          >
            Unlock The Potential Of A Fully-Customized{" "}
            <span className="text-[#70AA26]">Ecommerce Store Packed With Robust Features.</span> 
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Elevate your store with modern ecommerce app development—fast
            storefronts, secure payments, and operations built to scale.
          </p>
        </header>

        <div className={`mt-12 sm:mt-14 lg:mt-16 ${styles.ecommerceTechBoostCard}`}>
          <div className={styles.ecommerceTechBoostShadowLayer} aria-hidden>
            <Image
              src={SHADOW_IMG}
              alt=""
              fill
              sizes="(max-width: 767px) 60vw, 520px"
              className={styles.ecommerceTechBoostShadowImage}
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,520px)] lg:gap-12 xl:gap-14">
            <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
              {CARDS.map((card) => (
                <TechBoostCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>

            <div className="flex w-full justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px]">
                <ImageWithSkeleton
                  src={PHONES}
                  alt="Ecommerce app screens showing catalog and shopping experience"
                  width={520}
                  height={640}
                  className="select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                  style={{ width: "100%", height: "auto" }}
                  sizes="(max-width: 1023px) min(92vw, 520px), 520px"
                  wrapClassName="block w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
