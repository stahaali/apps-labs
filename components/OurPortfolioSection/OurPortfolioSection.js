import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import styles from "./OurPortfolioSection.module.css";
import OurPortfolioInteractiveCard from "./OurPortfolioInteractiveCard";

const PORTFOLIO_IMG = "/assets/images-webp/our-portfolio/portfolio-1.webp";

const DEFAULT_IMAGE_ALT = "LuxeCart e-commerce app on iPhone mockups";

/**
 * @param {object} props
 * @param {boolean} [props.noTopPadding]
 * @param {string[]} [props.portfolioImageSrcs] — override hero mockup(s); multiple URLs rotate in the visual.
 * @param {string} [props.portfolioImageAlt]
 */
export default function OurPortfolioSection({
  noTopPadding = false,
  portfolioImageSrcs,
  portfolioImageAlt = DEFAULT_IMAGE_ALT,
}) {
  const images = portfolioImageSrcs?.length ? portfolioImageSrcs : [PORTFOLIO_IMG];
  const imageAlt =
    portfolioImageAlt ??
    (portfolioImageSrcs?.length ? "Mobile app portfolio mockups" : DEFAULT_IMAGE_ALT);

  return (
    <section
      className={`${styles.portfolioSection}${noTopPadding ? ` ${styles.portfolioSectionNoTopPad}` : ""}`}
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <AnimateOnView variant="fadeUp" className={styles.header}>
          <span className={styles.badge}>Our Portfolio</span>
          <h2
            id="portfolio-heading"
            className="title text-balance text-neutral-900"
          >
            Apps We&apos;ve{" "}
            <span className={styles.headingAccent}>Brought to Life</span>
          </h2>

          <p className={styles.subtitle}>
            From concept to launch, we craft high-performance mobile experiences
            that captivate users and drive real business growth.
          </p>
        </AnimateOnView>

        <AnimateOnView variant="fadeUp" delayMs={100}>
          <OurPortfolioInteractiveCard images={images} imageAlt={imageAlt} />
        </AnimateOnView>
      </div>
    </section>
  );
}
