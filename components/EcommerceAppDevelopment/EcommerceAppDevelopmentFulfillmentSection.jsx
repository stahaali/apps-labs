import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { ECOMMERCE_APP_DEVELOPMENT_FULFILLMENT } from "@/lib/ecommerceAppDevelopmentFulfillment";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./EcommerceAppDevelopmentFulfillmentSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function CheckBullet() {
  return (
    <span className={pageStyles.check} aria-hidden>
      ✓
    </span>
  );
}

export default function EcommerceAppDevelopmentFulfillmentSection() {
  const {
    eyebrow,
    headlineLine1,
    headlineLine2,
    headlineLine3,
    body,
    bullets,
    cta,
    image,
  } = ECOMMERCE_APP_DEVELOPMENT_FULFILLMENT;

  const headingId = "ecommerce-fulfillment-heading";

  const textBlock = (
    <div>
      <span className={THEME_PILL}>{eyebrow}</span>
      <h2 id={headingId} className={THEME_H2}>
        <span className="block">{headlineLine1}</span>
        <span className="block">{headlineLine2}</span>
        <span className="block text-[#70AA26]">{headlineLine3}</span>
      </h2>
      <p className={THEME_LEAD}>{body}</p>
      <ul className={pageStyles.bullets}>
        {bullets.map((b) => (
          <li key={b} className={pageStyles.bullet}>
            <CheckBullet />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <GreenButton href="/contact" focusOn="light" className="mt-6 max-[576px]:w-fit">
        {cta}
      </GreenButton>
    </div>
  );

  const imageBlock = (
    <div className={`${pageStyles.imageCard} ${styles.fulfillmentImage768}`}>
      <div className="relative w-full min-h-[200px] bg-transparent">
        <ImageWithSkeleton
          src={image}
          alt="Delivery and logistics with partner integrations"
          width={1600}
          height={1000}
          className="h-auto w-full object-contain object-center"
          sizes="(max-width: 1023px) min(92vw, 560px), 50vw"
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full"
        />
      </div>
    </div>
  );

  return (
    <section
      className={pageStyles.sectionLavender}
      aria-labelledby={headingId}
    >
      <div className={pageStyles.inner}>
        <div className={pageStyles.split}>
          <AnimateOnView variant="fadeUp">{textBlock}</AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={80}>
            {imageBlock}
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
