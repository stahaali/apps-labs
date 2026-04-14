import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import styles from "./AboutMissionSection.module.css";

const TECH = "/assets/images-webp/technology";

const CARDS = [
  {
    title: "Discovery & strategy",
    image: `${TECH}/ai-machine-learning.png`,
    description:
      "We align on users, markets, and milestones before a single screen is drawn—so scope, stack, and ROI stay grounded.",
  },
  {
    title: "Design & engineering",
    image: `${TECH}/trusted-buyer-journey.png`,
    description:
      "Product design, native and cross-platform builds, and integrations with the systems your business already runs on.",
  },
  {
    title: "Launch & growth",
    image: `${TECH}/fulfillment-scale.png`,
    description:
      "Store submissions, analytics, and iteration cycles that keep releases predictable as your user base grows.",
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutMissionSection() {
  return (
    <section
      className={`${styles.aboutMissionSection} relative z-20 w-full overflow-x-clip pb-16 pt-0 lg:pb-20`}
      aria-labelledby="about-mission-heading"
    >
      <div
        className={`mx-auto max-w-[1200px] px-4 py-12 min-[480px]:px-6 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.lavenderPanel}`}
      >
        <AnimateOnView variant="fadeUp" className="mx-auto max-w-[820px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Who we are
          </span>
          <h2
            id="about-mission-heading"
            className="title text-balance text-neutral-900"
          >
            Built for teams who need{" "}
            <span className="text-[#70AA26]">clarity and craft</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Apex Labs partners with startups and established brands across the
            U.S. and beyond. We combine product strategy with disciplined delivery
            so your app ships on time—and holds up after launch.
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
                className={`relative flex min-h-[380px] flex-col overflow-hidden sm:min-h-[420px] ${styles.card}`}
              >
                <div
                  className={`relative aspect-[16/10] w-full shrink-0 bg-white ${styles.cardMedia} ${animateStyles.imageEase}`}
                >
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div
                  className={`relative flex flex-1 flex-col ${styles.cardBody}`}
                >
                  <div className={styles.titleRow}>
                    <h3 className={`text-neutral-900 ${styles.cardTitle}`}>
                      {card.title}
                    </h3>
                    <Link
                      href="/contact"
                      className={styles.arrowBtn}
                      aria-label={`Contact us about ${card.title}`}
                    >
                      <ArrowIcon />
                    </Link>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 sm:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </article>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
