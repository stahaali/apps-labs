import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./FoodDeliveryBanner.module.css";

// Constants
const HERO = "/assets/images-webp/banners/1.png";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

const FEATURES = ["Ordering Tech", "Delivery Tech", "Management Tech"];

// 1. Check Icon Component (Alag se banaya taake error na aaye)
function CheckGlyph() {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 4.2L4.2 7.4L10 1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 2. Main Export Component
export default function FoodDeliveryBanner() {
  return (
    <section
      className={`${styles.foodDeliveryBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="food-delivery-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h1 id="food-delivery-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Food Delivery</span>
              <br />
              <span className={styles.headlinePlain}>App Development</span>
            </h1>
            <p className={styles.lead}>
              Optimize your food delivery app&apos;s success with the most
              advanced development services and continuous support from industry
              experts at every step.
            </p>

            <div className={styles.features} role="list">
              {FEATURES.map((label) => (
                <div key={label} className={styles.featureItem} role="listitem">
                  <span className={styles.checkBubble} aria-hidden="true">
                    <CheckGlyph />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <form
              className="mt-8 w-full max-w-[520px]"
              action="#"
              method="post"
              aria-label="Food delivery email signup"
            >
              <div
                className="bannerEmailShell flex w-full flex-col gap-2 rounded-2xl border border-[#353539] bg-[#0a0d12] p-3 shadow-[0_0_0_9px_rgba(253,247,236,0.03)] min-[480px]:min-h-[56px] min-[480px]:flex-row min-[480px]:flex-nowrap min-[480px]:items-stretch min-[480px]:gap-2 min-[480px]:rounded-full min-[480px]:p-0 min-[480px]:py-1.5 min-[480px]:pl-5"
                role="group"
              >
                <div className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 min-[480px]:min-h-0">
                  <Image
                    src={PEN_ICON}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0 self-center object-contain"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    required
                    className={styles.emailField}
                    autoComplete="email"
                  />
                </div>
                <GreenButton
                  type="submit"
                  className="w-full shrink-0 min-[480px]:w-auto submit"
                >
                  Get Started
                </GreenButton>
              </div>
            </form>
          </AnimateOnView>

          {/* Right Column: Visuals */}
          <AnimateOnView
            variant="fadeLeft"
            className={styles.visualCol}
            delayMs={120}
          >
            <div className={styles.visualRoot}>
              <div className={styles.visualFrame}>
                <div
                  className={`${styles.visualFigure} ${animateStyles.imageEase}`}
                >
                <ImageWithSkeleton
                  src={HERO}
                  alt="Food delivery app mockups on phones"
                  width={400}
                  height={435}
                  sizes="(max-width: 767px) min(90vw, 400px), 400px"
                  className="max-w-[400px] select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                  style={{ width: "100%", height: "auto" }}
                  priority
                  fetchPriority="high"
                  darkBackground
                  wrapClassName="block w-full max-w-[400px]"
                />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
