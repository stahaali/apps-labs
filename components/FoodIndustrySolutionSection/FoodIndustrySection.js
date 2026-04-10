import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./FoodIndustrySection.module.css";

const BASE = "/assets/images-webp/industry";

const CARDS = [
  {
    title: "Build Food Delivery App For Your Restaurant",
    image: `${BASE}/industry-7.png`,
    description:
      "Empower customers to easily order food through your expertly built restaurant app.",
  },
  {
    title: "Food Ordering & Delivery App For Restaurant Chains",
    image: `${BASE}/industry-8.png`,
    description:
      "Boost ROI for your multi-store food business with custom food delivery app development.",
  },
  {
    title: "On-Demand Food Delivery Built by Experts",
    image: `${BASE}/industry-9.png`,
    description:
      "Boost your revenue with an on-demand food delivery app, built by our expert development team.",
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

export default function FoodIndustrySection() {
  return (
    <section
      className={`${styles.industrySolutions} relative z-20 w-full overflow-x-clip pb-16 pt-0 lg:pb-20`}
      aria-labelledby="food-benefits-heading"
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.lavenderPanel}`}
      >
        <AnimateOnView variant="fadeUp" className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Benefits
          </span>
          <h2
            id="industry-heading"
            className="title text-balance text-neutral-900"
          >
            Benefits Of{" "}
            <span className="text-[#70AA26]">Food Restaurant App</span> and Start Your Food Marketplace!
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Tap into the convenience and efficiency of a food restaurant app to
            attract and serve more customers.
          </p>
        </AnimateOnView>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:justify-items-stretch lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {CARDS.map((card, index) => (
            <AnimateOnView
              key={card.title}
              variant="fadeUp"
              delayMs={index * 75}
              className="min-w-0"
            >
            <article
              className={`relative flex min-h-[380px] flex-col overflow-hidden ${styles.card}`}
            >
              <div className={`relative aspect-[16/12] w-full shrink-0 bg-white ${styles.cardMedia} ${animateStyles.imageEase}`}
              >
                <ImageWithSkeleton
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  skeletonClassName="rounded-lg"
                />
              </div>
              <div
                className={`relative flex flex-1 flex-col ${styles.cardBody}`}
              >
                <h3 className={`text-neutral-900 ${styles.cardTitle}`}>
                  {card.title}
                </h3>
                <p className={styles.cardDesc}>{card.description}</p>
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
