import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import SuitePhoneCarousel from "../SuitePhoneCarousel/SuitePhoneCarousel";
import styles from "./FoodDeliveryFeatures.module.css";

// Carousel slides — same folder as frame; first asset is 01.webp (not 1.webp)
const FEATURE_SCREENS = [
  "/assets/images-webp/food-business/5.webp",
  "/assets/images-webp/food-business/6.webp",
  "/assets/images-webp/food-business/7.webp",
  "/assets/images-webp/food-business/8.webp",
];

const PHONE_FRAME = "/assets/images-webp/food-business/mobile-image.webp";


const FEATURE_ITEMS = [
  {
    title: "Own Your Source Code",
    description:
      "Complete source code for your application—full ownership and freedom to extend, customize, or migrate on your terms.",
  },
  {
    title: "Endless Integrations",
    description:
      "We deliver limitless integrations so your platform connects smoothly with payments, logistics, CRM, and the tools you already rely on.",
  },
  {
    title: "Exceptional UI/UX",
    description:
      "Exceptional UI/UX that keeps customers engaged, reduces friction, and reinforces trust in your food delivery brand.",
  },
  {
    title: "Dedicated Support",
    description:
      "Dedicated expert support with clear guidance through launch, updates, and scaling whenever your traffic grows.",
  },
  {
    title: "100% Customized Solution",
    description:
      "100% customized solutions aligned with your menu logic, branding, regions, and day-to-day operational workflows.",
  },
  {
    title: "Highly Robust & Scalable Solution",
    description:
      "Highly robust, scalable solutions engineered for reliability during peak orders and sustained long-term growth.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 4.5L4 7.5L10 1.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default function FoodDeliveryFeaturesSection() {
  return (
    <section
      className={`relative w-full overflow-x-clip py-12 sm:py-14 lg:py-16 bg-[#E8ECFF] ${styles.paddingtopbottom1}`}
      aria-labelledby="food-delivery-features-heading"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className={`sections-surface rounded-[28px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.paddingtopbottom}`}>
          <AnimateOnView as="header" variant="fadeUp" className="mx-auto max-w-[900px] text-center">
            <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
              Features
            </span>
            <h2
              id="food-delivery-features-heading"
              className="title text-balance text-neutral-900"
            >
              That&apos;s Not All! Check Out Our Several{" "}
              <span className="text-[#70AA26]">Exciting Features!</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
              Explore additional incredible features that will elevate your
              experience to the next level as we develop a delivery app beyond
              your expectations. You won&apos;t believe what we have in store for
              you!
            </p>
          </AnimateOnView>

          <div className="mx-auto mt-12 w-full sm:mt-14 lg:mt-16">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-12">
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                {FEATURE_ITEMS.map((item, index) => (
                  <AnimateOnView
                    key={item.title}
                    variant="fadeUp"
                    delayMs={index * 60}
                    className="min-w-0"
                  >
                    <FeatureCard
                      title={item.title}
                      description={item.description}
                    />
                  </AnimateOnView>
                ))}
              </div>

              <AnimateOnView
                variant="fadeLeft"
                delayMs={120}
                className="flex w-full shrink-0 justify-center lg:w-[280px] lg:max-w-[280px] lg:justify-end lg:pt-2 xl:w-[300px] xl:max-w-[300px]"
              >
                <div className="w-full max-w-[300px]">
                  <div
                    className={`${styles.phoneCarouselShell} ring-1 ring-white/10 ${animateStyles.imageEase}`}
                  >
                    <SuitePhoneCarousel
                      frameSrc={PHONE_FRAME}
                      screenSrcs={FEATURE_SCREENS}
                      intervalMs={3000}
                    />
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
