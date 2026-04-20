import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import HeroBannerNoiseOverlay from "./HeroBannerNoiseOverlay";
import HeroBannerStats from "./HeroBannerStats";
import HeroBannerVariableProximityHeading from "./HeroBannerVariableProximityHeading";
import styles from "./HeroBanner.module.css";

const HERO = "/assets/images-webp/hero-banner/hero-img2.webp";
const SHADOW = "/assets/images-webp/hero-banner/shadow-3.webp";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.webp";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HeroBannerVisual() {
  return (
    <div className={styles.visualRoot}>
      <div className={styles.visualFrame}>
        <div
          className={`${styles.shadowWrap} absolute right-0 top-1/2 z-0 w-[min(145%,980px)] max-w-none -translate-y-1/2`}
          aria-hidden
        >
          <Image
            src={SHADOW}
            alt=""
            width={900}
            height={900}
            sizes="(max-width: 767px) 90vw, 980px"
            className={`select-none object-contain ${styles.shadowGlow}`}
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
            fetchPriority="low"
          />
        </div>

        <div
          className={`${styles.visualFigure} ${animateStyles.imageEase}`}
        >
          <ImageWithSkeleton
            src={HERO}
            alt="Apex Labs mobile applications on phone mockups"
            width={680}
            height={740}
            sizes="(max-width: 576px) 100vw, (max-width: 1024px) min(46vw, 440px), 840px"
            className="select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] w-full min-w-0 max-w-full lg:min-w-[700px] lg:max-w-[700px]"
            priority
            fetchPriority="high"
            darkBackground
            wrapClassName="block w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section
      className={`${styles.homebanner} relative z-0 w-full overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      {/* <HeroBannerNoiseOverlay /> */}
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <HeroBannerVariableProximityHeading />
            <p className="mt-3 max-w-[540px] text-left text-[17px] leading-[1.6] text-neutral-400 sm:mt-4">
              From zero to launch — we design, develop, and scale world-class
              mobile apps that users love and investors fund.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-start gap-2.5 sm:mt-5">
              <div className="flex items-center gap-0.5 text-[#EAB308]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="h-[17px] w-[17px]" />
                ))}
              </div>
              <p className="text-[15px] text-neutral-300">
                Rated <span className="font-semibold text-white">4.9</span> by{" "}
                <span className="font-semibold text-white">500+</span> founders
              </p>
            </div>

            <form className="mt-4 w-full max-w-[520px] bannerform sm:mt-5" action="#" method="post" aria-label="Email signup">
              <div
                className="bannerEmailShell flex w-full flex-col gap-2 rounded-2xl border stroke-[#F5F5F5] stroke-opacity-50 stroke-2 border-[#353539] bg-[#0a0d12] p-3 shadow-[0_0_0_9px_var(--tw-shadow-color,rgba(253,247,236,0.03))] min-[480px]:min-h-[56px] min-[480px]:flex-row min-[480px]:flex-nowrap min-[480px]:items-center min-[480px]:gap-2 min-[480px]:rounded-full min-[480px]:p-0 min-[480px]:py-1.5 min-[480px]:pl-5"
                role="group"
              >
                <div className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 min-[480px]:min-h-0">
                  <Image
                    src={PEN_ICON}
                    alt=""
                    width={20}
                    height={20}
                    className="h-4 w-4 shrink-0 self-center object-contain"
                    aria-hidden
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Business Name"
                    required
                    className="min-w-0 flex-1 cursor-text bg-transparent text-[14px] leading-normal text-white caret-white placeholder:text-neutral-500 focus:bg-transparent focus:outline-none focus:ring-0"
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

            <HeroBannerStats />
          </AnimateOnView>

          <AnimateOnView
            variant="fadeLeft"
            className={styles.visualCol}
            delayMs={120}
          >
            <HeroBannerVisual />
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
