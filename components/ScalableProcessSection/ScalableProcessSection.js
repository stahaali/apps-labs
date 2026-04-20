import { Fragment } from "react";
import Image from "next/image";
import styles from "./ScalableProcessSection.module.css";

const IMG_BASE = "/assets/images-webp/scalable-process";
const SHADOW_IMAGE = `${IMG_BASE}/shadow-1.webp`;
const SHADOW_WIDTH = 700;

const STEPS = [
  {
    num: "01",
    image: `${IMG_BASE}/search-1.webp`,
    title: "Discover & Plan",
    kicker: "Free consultation",
    description:
      "We understand your idea, target audience, and business goals to craft a clear roadmap for your app success.",
  },
  {
    num: "02",
    image: `${IMG_BASE}/design-develop-1.webp`,
    title: "Design & Develop",
    kicker: "Agile development process",
    description:
      "Our team designs intuitive UI/UX and builds scalable, high-performance apps using modern technologies.",
  },
  {
    num: "03",
    image: `${IMG_BASE}/launch-1.webp`,
    title: "Launch & Scale",
    kicker: "Ongoing Support & Growth",
    description:
      "We deploy your app, optimize performance, and help you scale with continuous updates and improvements.",
  },
];

export default function ScalableProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
      <div className={`${styles.iconShadowWrap} hidden sm:block`} aria-hidden>
                <Image
                  src={SHADOW_IMAGE}
                  alt=""
                  width={SHADOW_WIDTH}
                  height={SHADOW_WIDTH}
                  className={styles.iconShadowImage}
                />
              </div>
        <div className={styles.card}>
          <header className={styles.header}>
            <span className={styles.badge}>Simple &amp; Scalable Process</span>
            <h2
              id="process-heading"
              className="title text-balance text-neutral-900"
            >
              How We Build Apps in{" "}
              <span className="text-[#70AA26]">3 Steps</span>
            </h2>
            <p className={styles.subtitle}>
              We follow a proven, efficient process to design, develop, and
              launch apps that deliver real business results.
            </p>
          </header>

          {/* Desktop / tablet: icons + timeline share one grid so each icon sits above its number */}
          <div className={styles.desktopFlow}>
            <div className={styles.processTrackGrid} aria-hidden>
              {STEPS.map((step, i) => (
                <div
                  key={`icon-${step.num}`}
                  className={styles.trackIconCell}
                  style={{ gridColumn: i * 2 + 1, gridRow: 1 }}
                >
                  <div className={styles.iconWrap}>
                    <Image
                      src={step.image}
                      alt=""
                      width={80}
                      height={80}
                      sizes="80px"
                      className={styles.iconImage}
                    />
                  </div>
                </div>
              ))}
              {STEPS.map((step, i) => (
                <Fragment key={`mark-${step.num}`}>
                  <span
                    className={styles.marker}
                    style={{ gridColumn: i * 2 + 1, gridRow: 2 }}
                  >
                    {step.num}
                  </span>
                  {i < STEPS.length - 1 ? (
                    <div
                      className={styles.trackSegmentCell}
                      style={{ gridColumn: i * 2 + 2, gridRow: 2 }}
                    >
                      <div className={styles.trackSegment} />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>

            <div className={styles.stepsGrid}>
              {STEPS.map((step) => (
                <div key={step.title}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepKicker}>{step.kicker}</p>
                  <p className={styles.stepBody}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: one column per step */}
          <div className={styles.mobileFlow}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.mobileStep}>
                <div className={styles.iconWrap}>
                  <Image
                    src={step.image}
                    alt=""
                    width={80}
                    height={80}
                    sizes="80px"
                    className={styles.iconImage}
                  />
                </div>
                <div className={styles.mobileMarkerWrap}>
                  <span className={styles.marker}>{step.num}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepKicker}>{step.kicker}</p>
                <p className={styles.stepBody}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
