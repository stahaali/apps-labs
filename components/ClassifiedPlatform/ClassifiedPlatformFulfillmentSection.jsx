import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { CLASSIFIED_PLATFORM_FULFILLMENT } from "@/lib/classifiedPlatformFulfillment";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./ClassifiedPlatformFulfillmentSection.module.css";

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

function ChipIcon({ name }) {
  const svgProps = {
    className: styles.chipIcon,
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };
  if (name === "video") {
    return (
      <svg {...svgProps}>
        <rect x="2" y="5" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M17 9l5-3v12l-5-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "pulse") {
    return (
      <svg {...svgProps}>
        <path
          d="M4 12h3l2-6 3 12 2-8h6"
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
  if (name === "list") {
    return (
      <svg {...svgProps}>
        <path
          d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg {...svgProps}>
        <path
          d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return null;
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

export default function ClassifiedPlatformFulfillmentSection() {
  const {
    eyebrow,
    headlineLines,
    body,
    bullets,
    cta,
    image,
    imageAlt,
    chips,
  } = CLASSIFIED_PLATFORM_FULFILLMENT;

  const headingId = "classified-fulfillment-heading";

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
        <div className="relative w-full min-h-[220px] bg-neutral-100/50">
          <ImageWithSkeleton
            src={image}
            alt={imageAlt}
            width={1200}
            height={1400}
            className="h-auto w-full object-cover object-center"
            sizes="(max-width: 1023px) min(92vw, 640px), (max-width: 1400px) 46vw, 620px"
            skeletonClassName="rounded-[1.35rem]"
            wrapClassName="block min-h-[220px] w-full"
          />
        </div>
      </div>
      <div className={styles.chipsRail}>
        {chips.map((c) => (
          <div key={c.key} className={styles.chip}>
            <ChipIcon name={c.icon} />
            <span>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className={`${styles.section} classifiedFulfillmentSection`}
      aria-labelledby={headingId}
    >
      <div
        className={`${pageStyles.inner} ${pageStyles.innerWide} classifiedFulfillmentInnerFlush`}
      >
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
