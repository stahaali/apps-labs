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
                className="flex min-h-[56px] w-full flex-nowrap items-stretch gap-2 rounded-full border border-[#353539] bg-[#0a0d12] py-1.5 pl-5 pr-2 shadow-[0_0_0_9px_rgba(253,247,236,0.03)]"
                role="group"
              >
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
                <button type="submit" className={styles.ctaButton}>
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
