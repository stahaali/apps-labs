import Image from "next/image";
import Link from "next/link";
import styles from "./IndustrySolutionsSection.module.css";

const BASE = "/assets/images-webp/industry";

const CARDS = [
  {
    title: "E-Commerce",
    image: `${BASE}/industry-1.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
  },
  {
    title: "Fitness & Health",
    image: `${BASE}/industry-2.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
  },
  {
    title: "Fintech & Banking",
    image: `${BASE}/industry-3.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
  },
  {
    title: "Education & eLearning",
    image: `${BASE}/industry-4.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
  },
  {
    title: "On-Demand Services",
    image: `${BASE}/industry-5.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
  },
  {
    title: "Social Media",
    image: `${BASE}/industry-6.png`,
    description:
      "AI-powered storefronts with seamless checkout, personalized recommendations, and real-time inventory management.",
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

export default function IndustrySolutionsSection() {
  return (
    <section
      className={`${styles.industrySolutions} relative z-20 w-full overflow-x-clip pb-16 pt-0 lg:pb-20`}
      aria-labelledby="industry-heading"
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.lavenderPanel}`}
      >
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Industries We Serve
          </span>
          <h2
            id="industry-heading"
            className="site-title text-balance text-neutral-900"
          >
            App Solutions for{" "}
            <span className="text-[#70AA26]">Every Industry</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Deep domain expertise across six major verticals. We build tailored
            mobile experiences that solve real problems and drive measurable
            growth.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={`relative flex min-h-[420px] flex-col overflow-hidden ${styles.card}`}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 bg-white">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative flex flex-1 flex-col p-6 pb-[4.25rem] sm:p-7 sm:pb-[4.5rem]">
                <h3 className="site-title text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 sm:text-[15px]">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className={`absolute bottom-5 right-5 sm:bottom-6 sm:right-7 ${styles.arrowBtn}`}
                  aria-label={`Learn more about ${card.title}`}
                >
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
