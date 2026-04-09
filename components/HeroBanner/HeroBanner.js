import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import HeroBannerStats from "./HeroBannerStats";
import styles from "./HeroBanner.module.css";

const HERO = "/assets/images-webp/hero-banner/hero-img2.png";
const SHADOW = "/assets/images-webp/hero-banner/shadow-3.png";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

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
            alt="Apex Labs mobile applications on phone mockups"
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
  );
}

export default function HeroBanner() {
  return (
    <section
      className={`${styles.homebanner} relative z-0 w-full overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h1
              id="hero-heading"
              className={`${styles.heroHeading} text-white`}
            >
              We Build Apps That{" "}
              <span className="text-[#70AA26]">Dominate Markets</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-neutral-400">
              From zero to launch — we design, develop, and scale world-class
              mobile apps that users love and investors fund.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
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

            <form className="mt-8 w-full max-w-[520px] bannerform" action="#" method="post" aria-label="Email signup">
              <div
                className="flex min-h-[56px] w-full flex-nowrap items-center gap-2 rounded-full border stroke-[#F5F5F5] stroke-opacity-50 stroke-2 border-[#353539] bg-[#0a0d12] py-1.5 pl-5 pr-2 shadow-[0_0_0_9px_var(--tw-shadow-color,rgba(253,247,236,0.03))]"
                role="group"
              >
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
                  placeholder="Enter Your E-mail"
                  required
                  className="min-w-0 flex-1 cursor-text self-center bg-transparent text-[14px] leading-normal text-white caret-white placeholder:text-neutral-500 focus:bg-transparent focus:outline-none focus:ring-0"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#70AA26] to-[#70AA26] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[12px] font-semibold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-[filter,box-shadow] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 active:brightness-95 submit"
                >
                  Get Started
                </button>
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
