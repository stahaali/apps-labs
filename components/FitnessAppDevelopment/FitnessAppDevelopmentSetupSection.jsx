import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { FITNESS_APP_DEVELOPMENT_SETUP } from "@/lib/fitnessAppDevelopmentSetup";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import localStyles from "./FitnessAppDevelopmentSetupSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function ChipIcon({ name }) {
  const svgProps = {
    className: localStyles.chipIcon,
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };
  if (name === "dumbbell") {
    return (
      <svg {...svgProps}>
        <path
          d="M5 10h14M7 8v4M17 8v4M4 9.5h2v5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Zm14 0h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2v-5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "user") {
    return (
      <svg {...svgProps}>
        <path
          d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM6 20a6 6 0 0 1 12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "card") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

export default function FitnessAppDevelopmentSetupSection() {
  const {
    eyebrow,
    headlineLine1,
    headlineGreen,
    headlineAfterGreen,
    body,
    cta,
    image,
    imageAlt,
    chips,
  } = FITNESS_APP_DEVELOPMENT_SETUP;

  const headingId = "fitness-free-setup-heading";

  const visualBlock = (
    <div className={localStyles.visualCluster}>
      <div className={localStyles.chipsRail}>
        {chips.map((c) => (
          <div key={c.key} className={localStyles.chip}>
            <ChipIcon name={c.icon} />
            <span>{c.label}</span>
          </div>
        ))}
      </div>
      <div className={localStyles.photoWrap}>
        <div className="relative w-full min-h-[200px] bg-neutral-100/40">
          <ImageWithSkeleton
            src={image}
            alt={imageAlt}
            width={1600}
            height={1000}
            className="h-auto w-full object-cover object-center"
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, 500px"
            skeletonClassName="rounded-[1.25rem]"
            wrapClassName="block min-h-[200px] w-full"
          />
        </div>
      </div>
    </div>
  );

  const textBlock = (
    <div className="lg:max-w-xl">
      <span className={THEME_PILL}>{eyebrow}</span>
      <h2 id={headingId} className={`${THEME_H2} ${localStyles.heading}`}>
        <span className="block">{headlineLine1}</span>
        <span className="block">
          <span className="text-[#70AA26]">{headlineGreen}</span>
          <span className="text-neutral-900">{headlineAfterGreen}</span>
        </span>
      </h2>
      <p className={THEME_LEAD}>{body}</p>
      <GreenButton href="/contact" focusOn="light" className="mt-6 max-[576px]:w-fit">
        {cta}
      </GreenButton>
    </div>
  );

  return (
    <section className={localStyles.sectionShell} aria-labelledby={headingId}>
      <div className={pageStyles.inner}>
        <div className={localStyles.rowsWrap}>
          <div
            className={`${pageStyles.split} ${pageStyles.splitStackFlipSm} ${localStyles.splitTopAlign}`}
          >
            <div className={`${localStyles.splitCol} ${localStyles.imageCol}`}>
              <AnimateOnView variant="fadeUp">{visualBlock}</AnimateOnView>
            </div>
            <div className={localStyles.splitCol}>
              <AnimateOnView variant="fadeUp" delayMs={80}>
                {textBlock}
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
