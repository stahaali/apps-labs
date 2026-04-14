import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./AboutBanner.module.css";

const HERO = "/assets/images-webp/hero-banner/hero-img2.png";
const SHADOW = "/assets/images-webp/hero-banner/shadow-3.png";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

export default function AboutBanner() {
  return (
    <section
      className={`${styles.aboutBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="about-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h1 id="about-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>About</span>
              <br />
              <span className={styles.headlinePlain}>Apex Labs</span>
            </h1>
            <p className={styles.lead}>
              We&apos;re a product-minded mobile studio—designers, engineers, and
              strategists helping founders and enterprises ship apps people keep
              opening.
            </p>

            <form
              className="mt-8 w-full max-w-[520px]"
              action="#"
              method="post"
              aria-label="Email signup"
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
                    aria-hidden
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
                  className="w-full shrink-0 text-[12px] min-[480px]:w-auto min-[480px]:text-[15px] submit"
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
            <div className={styles.visualRoot}>
              <div className={styles.visualFrame}>
                <div
                  className={`${styles.shadowWrap} absolute right-0 top-1/2 z-0 w-[min(132%,820px)] max-w-none -translate-y-1/2`}
                  aria-hidden
                >
                  <Image
                    src={SHADOW}
                    alt=""
                    width={900}
                    height={900}
                    sizes="(max-width: 767px) 90vw, 820px"
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
                    alt="Apex Labs team and mobile app work"
                    width={680}
                    height={740}
                    sizes="(max-width: 767px) 90vw, 640px"
                    className="select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    fetchPriority="high"
                    darkBackground
                    wrapClassName="block w-full"
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
