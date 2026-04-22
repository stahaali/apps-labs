import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { NUTRITION_APP_DEVELOPMENT_FULFILLMENT } from "@/lib/nutritionAppDevelopmentFulfillment";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./NutritionAppDevelopmentFulfillmentSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 =
  "title text-balance break-words text-neutral-900 [&_span.block]:leading-[1.12]";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function CheckBullet() {
  return (
    <span className={pageStyles.check} aria-hidden>
      ✓
    </span>
  );
}

function Headline({ id, lines }) {
  return (
    <h2 id={id} className={`${THEME_H2} ${styles.heading}`}>
      {lines.map((line) => (
        <span
          key={line.key}
          className={`block ${line.green ? "text-[#70AA26]" : ""}`}
        >
          {line.text}
        </span>
      ))}
    </h2>
  );
}

export default function NutritionAppDevelopmentFulfillmentSection() {
  const { eyebrow, headlineLines, body, bullets, cta, image, imageAlt } =
    NUTRITION_APP_DEVELOPMENT_FULFILLMENT;

  const headingId = "nutrition-fulfillment-heading";

  const textBlock = (
    <div>
      <span className={THEME_PILL}>{eyebrow}</span>
      <Headline id={headingId} lines={headlineLines} />
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

  const visualBlock = (
    <div className={styles.visualCluster}>
      <div className={styles.photoWrap}>
        <div className="relative w-full min-h-[240px] bg-transparent">
          <ImageWithSkeleton
            src={image}
            alt={imageAlt}
            width={1248}
            height={1456}
            className="h-auto w-full object-contain object-center"
            sizes="(max-width: 1023px) min(92vw, 500px), min(50vw, 520px)"
            skeletonClassName="rounded-[1.35rem]"
            wrapClassName="block min-h-[240px] w-full"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      className={`${styles.section} nutritionFulfillmentSection`}
      aria-labelledby={headingId}
    >
      <div className={`${pageStyles.inner} nutritionFulfillmentInnerFlush`}>
        <div className={pageStyles.split}>
          <AnimateOnView variant="fadeUp">{textBlock}</AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={80}>
            {visualBlock}
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
