"use client";

import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import styles from "@/components/FitnessBanner/FitnessBanner.module.css";

const HERO = "/assets/images-webp/fitness-technology/ft-banner.webp";

const BULLETS = [
  "Align on mobile, web, and integration scope in one session",
  "Product and engineering on the call—no hand-offs",
  "Clear next steps, phases, and how to move forward",
];

function CheckBullet() {
  return (
    <span className={styles.checkBullet} aria-hidden>
      ✓
    </span>
  );
}

export default function BookAppointmentBanner() {
  const { openModal } = useLeadFormModal();

  return (
    <section
      className={`${styles.fitnessBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="book-appointment-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol} delayMs={80}>
            <h1 id="book-appointment-hero-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Book an Appointment</span>
              <span className={styles.headlineSub}>Plan Your Build With Apex Labs</span>
            </h1>
            <p className={`${styles.lead} text-neutral-400`}>
              Reserve a focused discovery call to map your app goals, platforms, integrations, and timeline—before you
              commit to a full engagement.
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
              <GreenButton
                type="button"
                onClick={openModal}
                focusOn="dark"
                className="max-[479px]:w-full"
              >
                Schedule a Call
              </GreenButton>
              <Link href="#fitness-features" className={styles.secondaryCta}>
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
                    alt="Product consultation and fitness app mockups"
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
