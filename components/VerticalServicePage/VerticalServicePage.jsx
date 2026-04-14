import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import {
  BlogSection,
  CTASection,
  MarqueeSliderSection,
  OurPortfolioSection,
  PricingSection,
  TechStackSection,
  TestimonialSection,
} from "@/lib/lazySections";
import VerticalServiceBanner from "./VerticalServiceBanner";
import styles from "./VerticalServicePage.module.css";

const PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const H2 = "title text-balance text-neutral-900";
const LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";
const HEAD_CENTER = "mx-auto max-w-[900px] text-center";
const ACCENT = "text-[#70AA26]";

function CheckBullet() {
  return (
    <span className={styles.check} aria-hidden>
      ✓
    </span>
  );
}

export default function VerticalServicePage({ content }) {
  const {
    banner,
    overview,
    capabilities,
    process,
    portfolioSlides,
    blogHeadingId,
    processSectionNoTopPadding,
  } = content;

  return (
    <>
      <VerticalServiceBanner
        headingId={banner.headingId}
        accent={banner.accent}
        plain={banner.plain}
        lead={banner.lead}
        features={banner.features}
        image={banner.image}
        imageAlt={banner.imageAlt}
      />

      <section
        id={overview.sectionId}
        className={styles.sectionCream}
        aria-labelledby={overview.headingId}
      >
        <div className={styles.inner}>
          <div className={styles.split}>
            <AnimateOnView variant="fadeUp">
              <span className={PILL}>{overview.eyebrow}</span>
              <h2 id={overview.headingId} className={H2}>
                {overview.titleBefore}
                <span className={ACCENT}>{overview.titleAccent}</span>
                {overview.titleAfter}
              </h2>
              <p className={LEAD}>{overview.body}</p>
              <ul className={styles.bullets}>
                {overview.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    <CheckBullet />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <GreenButton href="/contact" focusOn="light" className="mt-6">
                Discuss your build
              </GreenButton>
            </AnimateOnView>
            <AnimateOnView variant="fadeUp" delayMs={80}>
              <div className={styles.imageCard}>
                <div className="relative aspect-[4/3] w-full min-h-[220px]">
                  <ImageWithSkeleton
                    src={overview.image}
                    alt={overview.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    skeletonClassName="rounded-[1.25rem]"
                  />
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section
        id={capabilities.sectionId}
        className={styles.sectionLavender}
        aria-labelledby={capabilities.headingId}
      >
        <div className={styles.inner}>
          <AnimateOnView variant="fadeUp" className={HEAD_CENTER}>
            <span className={PILL}>{capabilities.eyebrow}</span>
            <h2 id={capabilities.headingId} className={H2}>
              {capabilities.titleBefore}
              <span className={ACCENT}>{capabilities.titleAccent}</span>
              {capabilities.titleAfter}
            </h2>
          </AnimateOnView>
          <div className={`${styles.cardGrid} ${styles.afterHead}`}>
            {capabilities.cards.map((card) => (
              <AnimateOnView key={card.title} variant="fadeUp">
                <article className={styles.capCard}>
                  <h3 className={styles.capTitle}>{card.title}</h3>
                  <p className={styles.capBody}>{card.body}</p>
                </article>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section
        id={process.sectionId}
        className={`${styles.sectionCream}${processSectionNoTopPadding ? ` ${styles.sectionCreamNoTop}` : ""}`}
        aria-labelledby={process.headingId}
      >
        <div className={styles.inner}>
          <AnimateOnView variant="fadeUp" className={HEAD_CENTER}>
            <span className={PILL}>{process.eyebrow}</span>
            <h2 id={process.headingId} className={H2}>
              {process.titleBefore}
              <span className={ACCENT}>{process.titleAccent}</span>
              {process.titleAfter}
            </h2>
          </AnimateOnView>
          <div className={`${styles.stepsGrid} ${styles.afterHead}`}>
            {process.steps.map((step, i) => (
              <AnimateOnView key={step.title} variant="fadeUp" delayMs={i * 70}>
                <article className={styles.stepCard}>
                  <p className={styles.stepNum}>{`0${i + 1}`}</p>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </article>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <MarqueeSliderSection />
      <CTASection />
      <OurPortfolioSection noTopPadding portfolioImageSrcs={portfolioSlides} />
      <TechStackSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection headingId={blogHeadingId} />
    </>
  );
}
