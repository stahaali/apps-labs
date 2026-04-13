import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import SuitePhoneCarousel from "@/components/SuitePhoneCarousel/SuitePhoneCarousel";
import phoneFeatureStyles from "@/components/FoodDeliveryFeaturesSection/FoodDeliveryFeatures.module.css";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD_CENTER =
  "mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";
const SECTION_HEAD = "mx-auto max-w-[900px] text-center";
const HEADING_ACCENT = "text-[#70AA26]";

function CheckIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 4.5L4 7.5L10 1.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ title, description }) {
  return (
    <article className="relative z-[1] min-w-0 w-full rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.12)] sm:p-6">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-3">
          <span className="mt-[4px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#70AA26]">
            <CheckIcon />
          </span>
          <h3 className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tight text-neutral-900 sm:text-[17px]">
            {title}
          </h3>
        </div>
        <p className="mt-2 min-h-[5.25rem] pl-[calc(18px+0.75rem)] text-pretty text-sm leading-relaxed text-slate-600 sm:min-h-[6.125rem] sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function FoodDeliveryV1ExcitingFeaturesSection({ content }) {
  const { eyebrow, headline, lead, items, phoneFrame, phoneScreens } = content;
  const headingId = "fd-v1-exciting-features-heading";

  return (
    <section
      className={`relative ${pageStyles.sectionLavender}`}
      aria-labelledby={headingId}
    >
      <div className={pageStyles.inner}>
        <AnimateOnView variant="fadeUp" className={SECTION_HEAD}>
          <span className={THEME_PILL}>{eyebrow}</span>
          <h2 id={headingId} className={THEME_H2}>
            {headline.before}
            <span className={HEADING_ACCENT}>{headline.highlight}</span>
            {headline.after}
          </h2>
          <p className={THEME_LEAD_CENTER}>{lead}</p>
        </AnimateOnView>

        <div className="mx-auto mt-12 w-full sm:mt-14 lg:mt-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-12">
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              {items.map((item, index) => (
                <AnimateOnView
                  key={item.title}
                  variant="fadeUp"
                  delayMs={index * 60}
                  className="min-w-0"
                >
                  <FeatureCard title={item.title} description={item.description} />
                </AnimateOnView>
              ))}
            </div>

            <AnimateOnView
              variant="fadeLeft"
              delayMs={120}
              className="flex w-full shrink-0 justify-center lg:w-[280px] lg:max-w-[280px] lg:justify-end lg:pt-2 xl:w-[300px] xl:max-w-[300px]"
            >
              <div className="w-full max-w-[300px]">
                <div
                  className={`${phoneFeatureStyles.phoneCarouselShell} ring-1 ring-white/10 ${animateStyles.imageEase}`}
                >
                  <SuitePhoneCarousel
                    frameSrc={phoneFrame}
                    screenSrcs={phoneScreens}
                    intervalMs={3000}
                    alt="Food delivery app preview on a phone"
                  />
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
