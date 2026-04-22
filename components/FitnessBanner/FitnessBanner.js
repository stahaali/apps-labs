import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./FitnessBanner.module.css";

const HERO = "/assets/images-webp/fitness-technology/ft-banner.webp";

const BULLETS = [
  "Custom iOS, Android, and web fitness apps",
  "Workout plans, subscriptions, and progress tracking",
  "Integrations for wearables, payments, and analytics",
];

function CheckBullet() {
  return (
    <span className={styles.checkBullet} aria-hidden>
      ✓
    </span>
  );
}

export default function FitnessBanner() {
  return (
    <section
      className={`${styles.fitnessBanner} relative z-[1] w-full overflow-hidden max-[576px]:overflow-visible`}
      aria-labelledby="fitness-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol} delayMs={80}>
            <h1 id="fitness-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Fitness App Development</span>
              <span className={styles.headlineSub}>For Growing Brands</span>
            </h1>
            <p className={`${styles.lead} text-neutral-400`}>
              From concept to user engagement. We design and build branded fitness mobile apps and web experiences that
              help you deliver better workouts, stronger retention, and seamless digital fitness journeys.
            </p>
            <ul className={styles.bulletList}>
              {BULLETS.map((item) => (
                <li key={item} className={`${styles.bulletItem} text-neutral-400`}>
                  <CheckBullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.ctaRow}>
              <GreenButton href="/contact" focusOn="dark" className="max-[479px]:w-full">
                Start Your Fitness App
              </GreenButton>
              <Link href="#fitness-features" className={styles.secondaryCta}>
                Explore Features
              </Link>
            </div>
          </AnimateOnView>

          <AnimateOnView variant="fadeLeft" className={styles.visualCol} delayMs={120}>
            <div className={styles.visualRoot}>
              <div className={styles.visualFrame}>
                <div
                  className={`${styles.visualFigure} ${animateStyles.imageEase}`}
                >
                  <ImageWithSkeleton
                    src={HERO}
                    alt="Fitness app on phone mockups with workouts and member experiences"
                    width={720}
                    height={640}
                    sizes="(max-width: 767px) min(92vw, 480px), (max-width: 1023px) 48vw, min(600px, 42vw)"
                    className="w-full max-w-full select-none object-contain object-center"
                    style={{ height: "auto" }}
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
