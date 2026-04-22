import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./NutritionBanner.module.css";

const HERO = "/assets/images-webp/our-portfolio/fitness/1.webp";

const BULLETS = [
  "Custom iOS, Android, and web nutrition platforms",
  "Meal plans, macro tracking, coach workflows, and habit journeys",
  "Integrations for wearables, labs, payments, and analytics",
];

function CheckBullet() {
  return (
    <span className={styles.checkBullet} aria-hidden>
      ✓
    </span>
  );
}

export default function NutritionBanner() {
  return (
    <section
      className={`${styles.nutritionBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="nutrition-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol} delayMs={80}>
            <h1 id="nutrition-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Nutrition Platform Development</span>
              <span className={styles.headlineSub}>For Growing Brands</span>
            </h1>
            <p className={`${styles.lead} text-neutral-400`}>
              Give clients clarity on what to eat, when, and why—backed by logging, coaching touchpoints, and content that feels
              personal on every device.
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
                Start Your Nutrition Platform
              </GreenButton>
              <Link href="#nutrition-platform-features" className={styles.secondaryCta}>
                Explore Features
              </Link>
            </div>
          </AnimateOnView>

          <AnimateOnView variant="fadeLeft" className={styles.visualCol} delayMs={120}>
            <div className={styles.visualRoot}>
              <div className={styles.visualFrame}>
                <div className={`${styles.visualFigure} ${animateStyles.imageEase}`}>
                  <ImageWithSkeleton
                    src={HERO}
                    alt="Nutrition and meal planning app mockups"
                    width={720}
                    height={640}
                    sizes="(max-width: 767px) min(92vw, 480px), (max-width: 1023px) 48vw, min(600px, 42vw)"
                    className="w-full max-w-full select-none object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
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
