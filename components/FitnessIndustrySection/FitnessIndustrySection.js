import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import styles from "./FitnessIndustrySection.module.css";

const BASE = "/assets/images-webp/industry";

const CARDS = [
  {
    title: "Customer App & Website",
    image: `${BASE}/industry-1.png`,
    description:
      "Connect users with health experts, trainers, and gym instructors through your own fitness app.",
  },
  {
    title: "Fitness Trainer App",
    image: `${BASE}/industry-2.png`,
    description:
      "Connect fitness trainers and clients through an app where trainers can share workout instructions, diet plans, and advice.",
  },
  {
    title: "Admin Dashboard",
    image: `${BASE}/industry-3.png`,
    description:
      "Take control of your online fitness business with a comprehensive panel equipped with advanced analytics capabilities.",
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

export default function FitnessIndustrySection() {
  return (
    <section
      className={`${styles.fitnessIndustrySection} relative z-20 w-full overflow-x-clip pb-16 pt-0 lg:pb-20`}
      aria-labelledby="fitness-industry-heading"
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.lavenderPanel}`}
      >
        <AnimateOnView variant="fadeUp" className="mx-auto max-w-[820px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Industries We Serve
          </span>
          <h2
            id="fitness-industry-heading"
            className="title text-balance text-neutral-900"
          >
            Empower Your Fitness App with
            <span className="text-[#70AA26]"> Our Competitors?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Our comprehensive full-stack solution seamlessly integrates front-end and back-end development for your fitness app, provided by our expert fitness app development services. We prioritize complete customization and integration to ensure a flawless user experience.
          </p>
        </AnimateOnView>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {CARDS.map((card, index) => (
            <AnimateOnView
              key={card.title}
              variant="fadeUp"
              delayMs={index * 75}
              className="min-w-0"
            >
            <article
              className={`relative flex min-h-[420px] flex-col overflow-hidden ${styles.card}`}
            >
              <div
                className={`relative aspect-[16/10] w-full shrink-0 bg-white ${styles.cardMedia} ${animateStyles.imageEase}`}
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div
                className={`relative flex flex-1 flex-col ${styles.cardBody}`}
              >
                <h3 className={`text-neutral-900 ${styles.cardTitle}`}>
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 sm:text-[15px]">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className={`absolute bottom-0 right-0 ${styles.arrowBtn}`}
                  aria-label={`Learn more about ${card.title}`}
                >
                  <ArrowIcon />
                </Link>
              </div>
            </article>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
