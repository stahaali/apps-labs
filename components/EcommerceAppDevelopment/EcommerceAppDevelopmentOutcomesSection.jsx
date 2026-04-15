import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import { ECOMMERCE_APP_DEVELOPMENT_OUTCOMES } from "@/lib/ecommerceAppDevelopmentOutcomes";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./EcommerceAppDevelopmentOutcomesSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const SECTION_HEAD = "mx-auto max-w-[900px] text-center";
const AFTER_HEAD = "mt-12 sm:mt-14 lg:mt-16";

export default function EcommerceAppDevelopmentOutcomesSection() {
  const { eyebrow, headline, stats } = ECOMMERCE_APP_DEVELOPMENT_OUTCOMES;
  const headingId = "ecommerce-outcomes-heading";

  return (
    <section className={styles.outcomesSection} aria-labelledby={headingId}>
      <div className={pageStyles.inner}>
        <AnimateOnView variant="fadeUp" className={SECTION_HEAD}>
          <span className={THEME_PILL}>{eyebrow}</span>
          <h2 id={headingId} className={THEME_H2}>
            <span className="block">{headline.line1}</span>
            <span className="block text-neutral-900">
              {headline.line2Before}
              <span className="text-[#70AA26]">{headline.line2Accent}</span>
            </span>
          </h2>
        </AnimateOnView>
        <div className={`${pageStyles.statsGrid} ${AFTER_HEAD}`}>
          {stats.map((s, i) => (
            <AnimateOnView key={s.label} variant="fadeUp" delayMs={i * 60}>
              <div className={pageStyles.statCard}>
                <div className={pageStyles.statValue}>{s.value}</div>
                <div className={pageStyles.statLabel}>{s.label}</div>
                <p className={pageStyles.statDetail}>{s.detail}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
