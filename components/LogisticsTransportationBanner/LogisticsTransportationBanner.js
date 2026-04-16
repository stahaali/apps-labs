import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./LogisticsTransportationBanner.module.css";

const HERO = "/assets/images-webp/banners/logistic-banner.webp";

const BULLETS = [
  "Custom iOS, Android, and web logistics apps",
  "Fleet management, dispatch, and real-time tracking",
  "Integrations for GPS, payments, and analytics",
];

function CheckBullet() {
  return (
    <span className={styles.checkBullet} aria-hidden>
      ✓
    </span>
  );
}

export default function LogisticsTransportationBanner() {
  return (
    <section
      className={`${styles.LogisticsTransportationBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="logistics-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol} delayMs={80}>
            <h1 id="logistics-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Logistics App Development</span>
              <span className={styles.headlineSub}>For Modern Brands</span>
            </h1>
            <p className={`${styles.lead} text-neutral-400`}>
              From dispatch to delivery tracking. We design and build branded logistics mobile apps and web platforms that
              help you manage fleets, optimize routes, and streamline operations.
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
                Start Your Logistics App
              </GreenButton>
              <Link href="#logistics-transportation-features" className={styles.secondaryCta}>
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
                    alt="Logistics hero: dispatch dashboard, route optimization, active drivers, and delivery status with fleet and courier imagery"
                    width={1200}
                    height={720}
                    sizes="(max-width: 767px) min(92vw, 520px), (max-width: 1023px) 54vw, min(780px, 46vw)"
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
