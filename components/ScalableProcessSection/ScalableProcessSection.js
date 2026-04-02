import { Fragment } from "react";
import Image from "next/image";
import styles from "./ScalableProcessSection.module.css";

const IMG_BASE = "/assets/images-webp/scalable-process";
const SHADOW_IMAGE = `${IMG_BASE}/shadow-1.png`;
const SHADOW_WIDTH = 700;

const STEPS = [
  {
    num: "01",
    image: `${IMG_BASE}/search-1.png`,
    title: "Discover & Plan",
    kicker: "Free consultation",
    description:
      "We understand your idea, target audience, and business goals to craft a clear roadmap for your app success.",
  },
  {
    num: "02",
    image: `${IMG_BASE}/design-develop-1.png`,
    title: "Design & Develop",
    kicker: "Agile development process",
    description:
      "Our team designs intuitive UI/UX and builds scalable, high-performance apps using modern technologies.",
  },
  {
    num: "03",
    image: `${IMG_BASE}/launch-1.png`,
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
      <div className={styles.iconShadowWrap} aria-hidden>
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
              className="text-balance text-[1.65rem] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.05rem] lg:text-[2.35rem]"
            >
              How We Build Apps in{" "}
              <span className="text-[#2563eb]">3 Steps</span>
            </h2>
            <p className={styles.subtitle}>
              We follow a proven, efficient process to design, develop, and
              launch apps that deliver real business results.
            </p>
          </header>

          {/* Desktop / tablet: icons → timeline → copy */}
          <div className={styles.desktopFlow}>
            <div className={styles.iconsBlock}>              
              <div className={styles.iconsRow}>
                {STEPS.map((step) => (
                  <div key={step.num} className={styles.iconWrap}>
                    <Image
                      src={step.image}
                      alt=""
                      width={80}
                      height={80}
                    sizes="80px"
                      className={styles.iconImage}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.trackRow} aria-hidden>
              {STEPS.map((step, index) => (
                <Fragment key={step.num}>
                  <span className={styles.marker}>{step.num}</span>
                  {index < STEPS.length - 1 ? (
                    <div className={styles.trackSegment} />
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
