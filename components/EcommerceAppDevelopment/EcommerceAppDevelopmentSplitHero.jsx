"use client";

import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import { ECOMMERCE_WEBSITE_MOBILE_PLATFORM } from "@/lib/ecommerceAppDevelopmentFreeSetup";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import localStyles from "./EcommerceAppDevelopmentSplitHero.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_HEADING =
  "title text-balance break-words text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function CheckBullet() {
  return (
    <span className={pageStyles.check} aria-hidden>
      ✓
    </span>
  );
}

const BADGE_ICON_CLASS = "h-[14px] w-[14px] shrink-0 text-[#70AA26]";

function BadgeIcon({ name }) {
  switch (name) {
    case "bolt":
      return (
        <svg className={BADGE_ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
        </svg>
      );
    case "pin":
      return (
        <svg className={BADGE_ICON_CLASS} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" fill="currentColor" />
        </svg>
      );
    case "truck":
      return (
        <svg className={BADGE_ICON_CLASS} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M10 17h8V8H4v9h2m4 0h4m-6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 0 4 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8V5h5l3 3v10h-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Cream split block: default copy left, image right. Use `reverseColumns` for image left, copy right.
 * @param {typeof ECOMMERCE_WEBSITE_MOBILE_PLATFORM} [content] — copy + `image` + optional `imageAlt`
 * @param {"h1"|"h2"} [headingLevel] — first row uses h1 (SEO); repeats use h2
 * @param {boolean} [priorityImage] — LCP: true only for the first instance
 * @param {"default"|"alt"} [sectionVariant] — `alt` = slightly different background
 * @param {boolean} [reverseColumns] — image column first (left on desktop)
 * @param {boolean} [imageAboveCopyAt768] — stacked layout only: at 768px viewport, show image above copy (ignored when `reverseColumns`)
 */
export default function EcommerceAppDevelopmentSplitHero({
  content = ECOMMERCE_WEBSITE_MOBILE_PLATFORM,
  headingId = "ecommerce-split-hero-heading",
  headingLevel = "h1",
  priorityImage = false,
  sectionVariant = "default",
  reverseColumns = false,
  imageAboveCopyAt768 = false,
}) {
  const c = content;
  const { openModal } = useLeadFormModal();
  const HeadingTag = headingLevel === "h1" ? "h1" : "h2";
  const sectionClass =
    sectionVariant === "alt"
      ? `${localStyles.section} ${localStyles.sectionAlt}`
      : localStyles.section;
  const altText =
    c.imageAlt ??
    "E-commerce storefront and mobile experience";

  const copyBlock = (
    <div className="lg:max-w-xl">
      <span className={THEME_PILL}>{c.eyebrow}</span>
      <HeadingTag id={headingId} className={`${THEME_HEADING} ${localStyles.heroHeading}`}>
        {c.headlineBefore}
        <span className="text-[#70AA26]">{c.headlineHighlight}</span>
        {c.headlineAfter}
      </HeadingTag>
      <p className={THEME_LEAD}>{c.body}</p>
      <ul className={pageStyles.bullets}>
        {c.bullets.map((b, i) => (
          <li key={`${headingId}-bullet-${i}`} className={pageStyles.bullet}>
            <CheckBullet />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <GreenButton
        type="button"
        focusOn="light"
        className="mt-6 max-[576px]:w-fit"
        onClick={openModal}
      >
        {c.cta}
      </GreenButton>
    </div>
  );

  const badges = Array.isArray(c.floatingBadges) ? c.floatingBadges : null;
  const imageLarge = c.imageScale === "large";

  const imageBlock = (
    <div
      className={`${pageStyles.imageCard} ${localStyles.imageWrap} w-full min-w-0 ${imageLarge ? localStyles.imageWrapLarge : ""}`}
    >
      <div className={`relative w-full min-h-[200px] bg-transparent ${badges?.length ? localStyles.imageWithBadges : ""}`}>
        <ImageWithSkeleton
          src={c.image}
          alt={altText}
          width={1600}
          height={1000}
          className="h-auto w-full max-w-full object-contain object-center"
          sizes={
            imageLarge
              ? "(max-width: 639px) 92vw, (max-width: 1023px) 60vw, 600px"
              : "(max-width: 639px) 90vw, (max-width: 1023px) 55vw, 420px"
          }
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full max-w-full"
          priority={priorityImage}
          {...(priorityImage ? { fetchPriority: "high" } : {})}
        />      
      </div>
    </div>
  );

  const copyCol = (
    <div className={localStyles.splitCol}>
      <AnimateOnView variant="fadeUp" delayMs={reverseColumns ? 80 : 0}>
        {copyBlock}
      </AnimateOnView>
    </div>
  );

  const imageCol = (
    <div
      className={`${localStyles.splitCol} ${localStyles.imageCol} ${
        reverseColumns ? localStyles.imageColStart : ""
      }`}
    >
      <AnimateOnView variant="fadeUp" delayMs={reverseColumns ? 0 : 80}>
        {imageBlock}
      </AnimateOnView>
    </div>
  );

  const splitRowClass = [
    pageStyles.split,
    localStyles.splitTopAlign,
    imageAboveCopyAt768 && !reverseColumns && localStyles.splitFlip768,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <div className={pageStyles.inner}>
        <div className={splitRowClass}>
          {reverseColumns ? (
            <>
              {imageCol}
              {copyCol}
            </>
          ) : (
            <>
              {copyCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
