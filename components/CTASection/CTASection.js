import Image from "next/image";
import Link from "next/link";
import styles from "./CTASection.module.css";

const BASE = "/assets/images-webp/cta-section";
const CHECK_ICON = `${BASE}/check-icon2.svg`;

const LEFT_CHECKS = [
  "Food Delivery Solutions",
  "E-Commerce Platforms",
  "Appointment Booking",
];

const RIGHT_CHECKS = ["iOS and Android", "React Native", "Flutter"];

export default function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.inner}>
        <div className={styles.blueCard}>
          <div className={styles.floatIconTop} aria-hidden>
            <Image
              src={`${BASE}/icon-01.png`}
              alt=""
              width={56}
              height={56}
              className={styles.floatImg}
            />
          </div>
          <div className={styles.floatIconBottom} aria-hidden>
            <Image
              src={`${BASE}/icon-02.png`}
              alt=""
              width={56}
              height={56}
              className={styles.floatImg}
            />
          </div>

          <div className={styles.centerBlock}>
            <h2 id="cta-heading" className={styles.title}>
              Starting a New Project? Let&apos;s Talk.
            </h2>
            <p className={styles.lead}>
              Ready to launch your app? Contact us today for a free consultation
              and project estimate. Ready to launch your app? Contact us today for
              a free consultation and project estimate.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Book Free Consultation
            </Link>
          </div>

          <div className={`${styles.sideCard} ${styles.sideCardLeft}`}>
            <div className={styles.sideCardHead}>
              <div className={styles.sideCardIconWrap} aria-hidden>
                <Image
                  src={`${BASE}/icon-03.png`}
                  alt=""
                  width={44}
                  height={44}
                  className={styles.sideCardIconImg}
                />
              </div>
              <div className={styles.sideCardHeadText}>
                <p className={styles.sideCardBrandName}>AppPremier</p>
                <p className={styles.sideCardBrandTag}>Services</p>
              </div>
            </div>
            <ul className={styles.checkList}>
              {LEFT_CHECKS.map((item) => (
                <li key={item} className={styles.checkItemLeft}>
                  <span className={styles.checkIconWrap} aria-hidden>
                    <Image
                      src={CHECK_ICON}
                      alt=""
                      width={10}
                      height={10}
                      sizes="10px"
                      className={styles.checkIconImg}
                    />
                  </span>
                  <span className={styles.checkItemText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.sideCard} ${styles.sideCardRight}`}>
            <p className={styles.sideCardTitle}>Technologies</p>
            <ul className={styles.checkList}>
              {RIGHT_CHECKS.map((item) => (
                <li key={item} className={styles.checkItemLeft}>
                  <span className={styles.checkIconWrap} aria-hidden>
                    <Image
                      src={CHECK_ICON}
                      alt=""
                      width={10}
                      height={10}
                      sizes="10px"
                      className={styles.checkIconImg}
                    />
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
