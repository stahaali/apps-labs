import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { FITNESS_APP_DEVELOPMENT_PLATFORM } from "@/lib/fitnessAppDevelopmentPlatform";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./FitnessAppDevelopmentPlatformSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function CheckBullet() {
  return (
    <span className={pageStyles.check} aria-hidden>
      ✓
    </span>
  );
}

export default function FitnessAppDevelopmentPlatformSection() {
  const { eyebrow, headlineParts, body, bullets, cta, image } =
    FITNESS_APP_DEVELOPMENT_PLATFORM;

  const headingId = "fitness-platform-heading";

  const textBlock = (
    <div>
      <span className={THEME_PILL}>{eyebrow}</span>
      <h2 id={headingId} className={THEME_H2}>
        <span className="block leading-[1.12]">
          {headlineParts.map((p, i) => (
            <span key={i} className={p.green ? "text-[#70AA26]" : undefined}>
              {p.text}
            </span>
          ))}
        </span>
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
    <div className={`${pageStyles.imageCard} ${styles.imageCol}`}>
      <div
        className={`relative w-full min-h-[200px] bg-transparent ${styles.mockupWrap}`}
      >
        <ImageWithSkeleton
          src={image}
          alt="Fitness app mockups showing daily challenges, profile, and yoga group workouts"
          width={1600}
          height={1000}
          className="h-auto w-full object-contain object-center drop-shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          sizes="(max-width: 1023px) min(90vw, 380px), 420px"
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full"
        />
      </div>
    </div>
  );

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={`${pageStyles.inner} fitnessPlatformInnerFlush`}>
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
