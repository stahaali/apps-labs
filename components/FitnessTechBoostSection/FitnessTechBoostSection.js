import Image from "next/image";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./FitnessTechBoostSection.module.css";

const SHADOW_IMG = "/assets/images-webp/technology/shadow-3.webp";
const BASE = "/assets/images-webp/technology";

const PHONES = `${BASE}/fitness-technology.webp`;

const CARDS = [
  {
    title: "AI & Machine Learning",
    icon: `${BASE}/ai-machine-learning.webp`,
    description:
      "Our team of fitness app developers uses AI and machine learning to create advanced wellness solutions.",
  },
  {
    title: "Blockchain",
    icon: `${BASE}/blockchain.webp`,
    description:
      "Build secure and transparent fitness apps using blockchain technology to protect user data and ensure privacy.",
  },
  {
    title: "AR/VR",
    icon: `${BASE}/ar-vr.webp`,
    description:
      "Improve your fitness app with AR/VR technology for interactive workout experiences and expert guidance, leading to better results and user engagement.",
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
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#70AA26] hover:brightness-105 sm:right-5 sm:top-5"
        aria-label={`Learn more about ${title}`}
      >
        <ArrowIcon />
      </Link>
    </article>
  );
}

export default function FitnessTechBoostSection() {
  return (
    <section
      className={`relative w-full overflow-x-clip ${styles.paddingtopbottom}`}
      aria-labelledby="fitness-tech-boost-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Technology
          </span>
          <h2
            id="fitness-tech-boost-heading"
            className="title text-balance text-neutral-900"
          >
            Custom Fitness App Solutions with{" "}
            <span className="text-[#70AA26]">Essential Integrated Features</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Build training, community, and commerce into one experience—engineered
            for engagement and long-term member growth.
          </p>
        </header>

        <div className={`mt-12 sm:mt-14 lg:mt-16 ${styles.fitnessTechBoostCard}`}>
          <div className={styles.fitnessTechBoostShadowLayer} aria-hidden>
            <Image
              src={SHADOW_IMG}
              alt=""
              fill
              sizes="(max-width: 767px) 60vw, 520px"
              className={styles.fitnessTechBoostShadowImage}
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
                  alt="Fitness app screens showing workouts and member experience"
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
