import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./FitnessBanner.module.css";

const HERO = "/assets/images-webp/banners/fitness-banner.png";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

export default function FitnessBanner() {
  return (
    <section
      className={`${styles.fitnessBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="fitness-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h1 id="fitness-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Fitness</span>               
              <span className={styles.headlinePlain}> App Development</span>
            </h1>
            <p className={styles.lead}>
              Step into the future of fitness with our dynamic app, revolutionizing the way you train, track progress, and achieve your fitness goals with precision and efficiency.
            </p>

            <form
              className="mt-8 w-full max-w-[520px]"
              action="#"
              method="post"
              aria-label="Fitness app email signup"
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
                <button
                  type="submit"
                  className="flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#70AA26] to-[#70AA26] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-[filter,box-shadow] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 active:brightness-95 min-[480px]:min-h-0 min-[480px]:w-auto submit"
                >
                  Get Started
                </button>
              </div>
            </form>
          </AnimateOnView>

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
                    alt="Fitness and wellness app mockups on phones"
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
