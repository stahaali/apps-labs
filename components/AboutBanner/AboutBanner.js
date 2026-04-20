import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./AboutBanner.module.css";

const HERO = "/assets/images-webp/hero-banner/hero-img2.webp";
const SHADOW = "/assets/images-webp/hero-banner/shadow-3.webp";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.webp";

/** Same DOM + Tailwind as `HeroBannerVisual` (home hero). */
function AboutBannerVisual() {
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

export default function AboutBanner() {
  return (
    <section
      className={`${styles.aboutBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="about-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h1 id="about-hero-heading" className={`${styles.headline} text-white`}>
              <span className="text-[#70AA26]">About</span>
              <br />
              Apex Labs
            </h1>
            <p className="mt-3 max-w-[540px] text-left text-[17px] leading-[1.6] text-neutral-400 sm:mt-4">
              We&apos;re a product-minded mobile studio—designers, engineers, and
              strategists helping founders and enterprises ship apps people keep
              opening.
            </p>

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
                    className={`h-4 w-4 shrink-0 self-center object-contain ${styles.formPenIcon}`}
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
          </AnimateOnView>

          <AnimateOnView
            variant="fadeLeft"
            className={styles.visualCol}
            delayMs={120}
          >
            <AboutBannerVisual />
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
