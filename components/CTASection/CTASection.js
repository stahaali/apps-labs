import Image from "next/image";
import WhiteButton from "@/components/WhiteButton/WhiteButton";
import styles from "./CTASection.module.css";

const BASE = "/assets/images-webp/cta-section";

/** Vector check — same look on left + right cards (no raster blur from tiny webp). */
function CtaListCheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.25 7.25L5.75 9.75L10.75 4.25"
        stroke="#70aa26"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DEFAULT_LEFT_CHECKS = [
  "Food Delivery Solutions",
  "E-Commerce Platforms",
  "Appointment Booking",
];

const DEFAULT_RIGHT_CHECKS = ["iOS and Android", "React Native", "Flutter"];

const DEFAULT_TITLE = "Starting a New Project? Let's Talk.";

const DEFAULT_LEAD =
  "Ready to launch your app? Contact us today for a free consultation and project estimate. Ready to launch your app? Contact us today for a free consultation and project estimate.";

export default function CTASection({
  sectionPadding84 = false,
  sectionPadding80 = false,
  ctaLabel,
  /** Optional overrides (e.g. vertical pages like /classified-platform) */
  title,
  lead,
  leftBrandName,
  leftBrandTag,
  leftChecks,
  rightChecks,
  /** Match /food-delivery/v1 hero & green pill CTAs: 15px, font-weight 600 */
  matchFoodDeliveryV1Typography = false,
}) {
  const label = ctaLabel ?? "Book Free Consultation";
  const resolvedTitle = title ?? DEFAULT_TITLE;
  const resolvedLead = lead ?? DEFAULT_LEAD;
  const resolvedLeftBrand = leftBrandName ?? "AppPremier";
  const resolvedLeftTag = leftBrandTag ?? "Services";
  const resolvedLeftChecks = leftChecks ?? DEFAULT_LEFT_CHECKS;
  const resolvedRightChecks = rightChecks ?? DEFAULT_RIGHT_CHECKS;

  return (
    <section
      className={[
        styles.section,
        sectionPadding84 && styles.sectionPadding84,
        sectionPadding80 && styles.sectionPadding80,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="cta-heading"
    >
      <div className={styles.inner}>
        <div className={styles.blueCard}>
          <div className={styles.floatIconTop} aria-hidden>
            <Image
              src={`${BASE}/icon-01.webp`}
              alt=""
              width={56}
              height={56}
              className={styles.floatImg}
            />
          </div>
          <div className={styles.floatIconBottom} aria-hidden>
            <Image
              src={`${BASE}/icon-02.webp`}
              alt=""
              width={56}
              height={56}
              className={styles.floatImg}
            />
          </div>

          <div className={styles.centerBlock}>
            <h2 id="cta-heading" className={`title ${styles.title}`}>
              {resolvedTitle}
            </h2>
            <p className={styles.lead}>{resolvedLead}</p>
            <WhiteButton
              href="/contact"
              surface="onBlue"
              className={[
                styles.ctaBtn,
                matchFoodDeliveryV1Typography && styles.ctaBtnFoodDeliveryV1,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </WhiteButton>
          </div>

          <div className={`${styles.sideCard} ${styles.sideCardLeft}`}>
            <div className={styles.sideCardHead}>
              <div className={styles.sideCardIconWrap} aria-hidden>
                <Image
                  src={`${BASE}/icon-03.webp`}
                  alt=""
                  width={44}
                  height={44}
                  className={styles.sideCardIconImg}
                />
              </div>
              <div className={styles.sideCardHeadText}>
                <p className={styles.sideCardBrandName}>{resolvedLeftBrand}</p>
                <p className={styles.sideCardBrandTag}>{resolvedLeftTag}</p>
              </div>
            </div>
            <ul className={styles.checkList}>
              {resolvedLeftChecks.map((item) => (
                <li key={item} className={styles.checkItemLeft}>
                  <span className={styles.checkIconWrap} aria-hidden>
                    <CtaListCheckIcon className={styles.checkIconSvg} />
                  </span>
                  <span className={styles.checkItemText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.sideCard} ${styles.sideCardRight}`}>
            <p className={styles.sideCardTitle}>Technologies</p>
            <ul className={styles.checkList}>
              {resolvedRightChecks.map((item) => (
                <li key={item} className={styles.checkItemLeft}>
                  <span className={styles.checkIconWrap} aria-hidden>
                    <CtaListCheckIcon className={styles.checkIconSvg} />
                  </span>
                  <span className={styles.checkItemText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
