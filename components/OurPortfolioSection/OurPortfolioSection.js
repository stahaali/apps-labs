import Image from "next/image";
import Link from "next/link";
import styles from "./OurPortfolioSection.module.css";

const PORTFOLIO_IMG = "/assets/images-webp/our-portfolio/portfolio-1.png";
const SHADOW_IMG = "/assets/images-webp/our-portfolio/shadow-1.webp";

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurPortfolioSection() {
  return (
    <section
      className={styles.portfolioSection}
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className={styles.header}>
          <span className={styles.badge}>Our Portfolio</span>
          <h2
            id="portfolio-heading"
            className="text-balance text-[1.65rem] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.05rem] lg:text-[2.35rem]"
          >
            Apps We&apos;ve{" "}
            <span className="text-[#2563eb]">Brought to Life</span>
          </h2>
          <p className={styles.subtitle}>
            From concept to launch, we craft high-performance mobile experiences
            that captivate users and drive real business growth.
          </p>
        </div>

        <div className={styles.portfolioCard}>
          <div className={styles.shadowLayer} aria-hidden>
            <Image
              src={SHADOW_IMG}
              alt=""
              fill
              sizes="(max-width: 1024px) 60vw, 520px"
              className={styles.shadowImage}
            />
          </div>
          <div className={styles.cardGrain} aria-hidden />
          <div className={styles.cardInner}>
            <div className={styles.visualCol}>
              <div className={styles.visualFrame}>
                <Image
                  src={PORTFOLIO_IMG}
                  alt="LuxeCart e-commerce app on iPhone mockups"
                  width={640}
                  height={520}
                  className="h-auto w-full object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={styles.detailCol}>
              <p className={styles.category}>E-COMMERCE</p>
              <h3 className={styles.projectTitle}>LuxeCart</h3>
              <p className={styles.description}>
                A premium luxury marketplace with AI-powered product
                recommendations, AR try-on, and one-tap checkout.
              </p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>iOS</span>
                <span className={styles.tag}>Android</span>
                <span className={styles.tag}>AI/ML</span>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statBlock}>
                  <span className={styles.statValue}>2.1M</span>
                  <span className={styles.statLabel}>Active Users</span>
                </div>
                <div className={styles.statDivider} aria-hidden />
                <div className={styles.statBlock}>
                  <span className={styles.statValue}>4.9 ★</span>
                  <span className={styles.statLabel}>App Rating</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.dots} aria-hidden>
                  <span className={`${styles.dot} ${styles.dotActive}`} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <Link href="/portfolio" className={styles.viewLink}>
                  <span>View</span>
                  <span className={styles.viewIconBtn}>
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
