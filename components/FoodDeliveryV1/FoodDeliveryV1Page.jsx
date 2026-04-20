import dynamic from "next/dynamic";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import ContactFaq from "@/components/ContactPage/ContactFaq";
import BlogSection from "@/components/BlogSection/BlogSection";
import CTASection from "@/components/CTASection/CTASection";

const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection/TestimonialSection"),
  { loading: () => null }
);
// import FoodDeliveryV1CenterSlider from "@/components/FoodDeliveryV1/FoodDeliveryV1CenterSlider";
import FoodDeliveryV1ExcitingFeaturesSection from "@/components/FoodDeliveryV1/FoodDeliveryV1ExcitingFeaturesSection";
// import FoodDeliveryV1HappyClients from "@/components/FoodDeliveryV1/FoodDeliveryV1HappyClients";
import FoodDeliveryV1Hero from "@/components/FoodDeliveryV1/FoodDeliveryV1Hero";
import FoodDeliveryV1IntegrationsMarquee from "@/components/FoodDeliveryV1/FoodDeliveryV1IntegrationsMarquee";
import FoodDeliveryV1TechSuiteSection from "@/components/FoodDeliveryV1/FoodDeliveryV1TechSuiteSection";
import {
  FOOD_DELIVERY_V1_FAQ_HEADLINE,
  FOOD_DELIVERY_V1_FULFILLMENT,
  FOOD_DELIVERY_V1_EXCITING_FEATURES,
  // FOOD_DELIVERY_V1_GALLERY_SLIDER,
  // FOOD_DELIVERY_V1_HAPPY_CLIENTS,
  FOOD_DELIVERY_V1_MARKETING,
  FOOD_DELIVERY_V1_OUTCOMES_HEADLINE,
  FOOD_DELIVERY_V1_SECTIONS,
  FOOD_DELIVERY_V1_STATS,
  FOOD_DELIVERY_V1_TECH_SUITE,
} from "@/lib/foodDeliveryV1Content";
import { FOOD_DELIVERY_V1_FAQ } from "@/lib/foodDeliveryV1Faq";
import styles from "./FoodDeliveryV1.module.css";

/** Match inner pages (e.g. FitnessIndustrySection, FitnessTechBoostSection). */
const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD_CENTER =
  "mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";
const THEME_LEAD_SPLIT =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";
const THEME_AFTER_HEAD = "mt-12 sm:mt-14 lg:mt-16";
const SECTION_HEAD = "mx-auto max-w-[900px] text-center";

const HEADING_ACCENT = "text-[#70AA26]";

function SectionHeading({ id, headline }) {
  if (!headline?.highlight) return null;
  return (
    <h2 id={id} className={THEME_H2}>
      {headline.before}
      <span className={HEADING_ACCENT}>{headline.highlight}</span>
      {headline.after}
    </h2>
  );
}

function CheckBullet() {
  return (
    <span className={styles.check} aria-hidden>
      ✓
    </span>
  );
}

function SplitFeature({
  section,
  cream,
  noPaddingTop,
  freeSetupMobileInnerTopZero,
  paddingTop80,
  paddingBottomZero,
}) {
  const {
    eyebrow,
    headline,
    body,
    bullets,
    cta,
    image,
    imageLeft,
    compact,
    knockoutWhiteBackground,
    narrowSplitImage,
  } = section;
  const panel = cream ? styles.sectionCream : styles.sectionLavender;
  const headingId = `fd-v1-${section.id}-heading`;
  const sectionClass = [
    panel,
    noPaddingTop && styles.sectionNoPaddingTop,
    paddingTop80 && styles.sectionPaddingTop80,
    paddingBottomZero && styles.sectionPaddingBottomZero,
    section.id === "operations" && styles.fdV1OperationsBand,
    section.id === "platform" && styles.fdV1PlatformBand,
  ]
    .filter(Boolean)
    .join(" ");

  const textBlock = (
    <div className={compact ? "lg:max-w-xl" : ""}>
      <span className={THEME_PILL}>{eyebrow}</span>
      <SectionHeading id={headingId} headline={headline} />
      <p className={THEME_LEAD_SPLIT}>{body}</p>
      {bullets?.length ? (
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b} className={styles.bullet}>
              <CheckBullet />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <GreenButton
        href="/contact"
        focusOn="light"
        className="mt-6 max-[576px]:w-fit"
      >
        {cta}
      </GreenButton>
    </div>
  );

  const imageBlock = (
    <div
      className={`${styles.imageCard} ${compact ? styles.imageCardCompact : ""}`}
    >
      <div
        className={`relative w-full min-h-[200px] bg-transparent${narrowSplitImage ? ` ${styles.splitImageNarrow}` : ""}`}
      >
        <ImageWithSkeleton
          src={image}
          alt=""
          width={1600}
          height={1000}
          className={`h-auto w-full object-contain object-center${knockoutWhiteBackground ? " mix-blend-multiply" : ""}`}
          sizes={
            narrowSplitImage
              ? "(max-width: 1023px) min(90vw, 380px), 380px"
              : "(max-width: 1023px) 100vw, 50vw"
          }
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full"
        />
      </div>
    </div>
  );

  const innerClass = [
    styles.inner,
    freeSetupMobileInnerTopZero && "innerMobileFlushTop",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <div className={innerClass}>
        <div
          className={[styles.split, imageLeft && styles.splitStackFlipSm]
            .filter(Boolean)
            .join(" ")}
        >
          {imageLeft ? (
            <>
              <AnimateOnView variant="fadeUp">{imageBlock}</AnimateOnView>
              <AnimateOnView variant="fadeUp" delayMs={80}>
                {textBlock}
              </AnimateOnView>
            </>
          ) : (
            <>
              <AnimateOnView variant="fadeUp">{textBlock}</AnimateOnView>
              <AnimateOnView variant="fadeUp" delayMs={80}>
                {imageBlock}
              </AnimateOnView>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function FoodDeliveryV1Page() {
  const [ops, platform, setup] = FOOD_DELIVERY_V1_SECTIONS;

  return (
    <div className={styles.v1PageShell}>
      <FoodDeliveryV1Hero />

      <SplitFeature section={ops} cream paddingTop80 />
      <SplitFeature section={platform} cream={false} />
      <SplitFeature
        section={setup}
        cream
        noPaddingTop
        freeSetupMobileInnerTopZero
        paddingBottomZero
      />

      {/* <FoodDeliveryV1CenterSlider content={FOOD_DELIVERY_V1_GALLERY_SLIDER} /> */}

      <FoodDeliveryV1ExcitingFeaturesSection content={FOOD_DELIVERY_V1_EXCITING_FEATURES} />

      <FoodDeliveryV1TechSuiteSection content={FOOD_DELIVERY_V1_TECH_SUITE} />

      <SplitFeature
        section={{
          id: "fulfillment",
          ...FOOD_DELIVERY_V1_FULFILLMENT,
        }}
        cream
        noPaddingTop
      />
      <SplitFeature
        section={{
          id: "marketing",
          ...FOOD_DELIVERY_V1_MARKETING,
        }}
        cream={false}
        noPaddingTop
      />

      <FoodDeliveryV1IntegrationsMarquee />

      {/* <FoodDeliveryV1HappyClients content={FOOD_DELIVERY_V1_HAPPY_CLIENTS} /> */}

      <section
        className={`${styles.sectionLavender} ${styles.sectionNoPaddingTop}`}
        aria-labelledby="fd-v1-stats-heading"
      >
        <div className={styles.inner}>
          <AnimateOnView variant="fadeUp" className={SECTION_HEAD}>
            <span className={THEME_PILL}>Outcomes</span>
            <SectionHeading id="fd-v1-stats-heading" headline={FOOD_DELIVERY_V1_OUTCOMES_HEADLINE} />
          </AnimateOnView>
          <div className={`${styles.statsGrid} ${THEME_AFTER_HEAD}`}>
            {FOOD_DELIVERY_V1_STATS.map((s, i) => (
              <AnimateOnView key={s.label} variant="fadeUp" delayMs={i * 60}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <p className={styles.statDetail}>{s.detail}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Same reviews block as homepage (`HomeClientTestimonial` → TestimonialSection) */}
      <TestimonialSection />

      <section
        className={`${styles.sectionLavender} ${styles.sectionNoPaddingTop} ${styles.fdV1FaqMobileFlushTop}`}
        aria-labelledby="fd-v1-faq-heading"
      >
        <div className={`${styles.inner} innerMobileFlushTop`}>
          <AnimateOnView
            variant="fadeUp"
            className={`${SECTION_HEAD} max-[576px]:mx-[15px]`}
          >
            <span className={THEME_PILL}>FAQ</span>
            <SectionHeading id="fd-v1-faq-heading" headline={FOOD_DELIVERY_V1_FAQ_HEADLINE} />
            <p className={THEME_LEAD_CENTER}>
              Straight answers on attracting guests, launching, and what belongs in a modern
              ordering stack.
            </p>
          </AnimateOnView>
          <div
            className={`${styles.faqBlock} ${THEME_AFTER_HEAD} max-[576px]:mx-[15px]`}
          >
            <ContactFaq items={FOOD_DELIVERY_V1_FAQ} />
          </div>
        </div>
      </section>

      <BlogSection headingId="fd-v1-blog-heading" />

      <CTASection sectionPadding84 matchFoodDeliveryV1Typography />
    </div>
  );
}
