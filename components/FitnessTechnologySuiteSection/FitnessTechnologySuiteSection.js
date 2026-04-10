import SuitePhoneCarousel from "@/components/SuitePhoneCarousel/SuitePhoneCarousel";
import styles from "./FitnessTechnologySuiteSection.module.css";

// Carousel slides — same folder as frame; first asset is 01.png (not 1.png)
const FEATURE_SCREENS = [
  "/assets/images-webp/fitness-technology/01.png",
  "/assets/images-webp/fitness-technology/2.png",
  "/assets/images-webp/fitness-technology/3.png",
  "/assets/images-webp/fitness-technology/4.png",
  "/assets/images-webp/fitness-technology/5.png",
  "/assets/images-webp/fitness-technology/6.png",
  "/assets/images-webp/fitness-technology/7.png",
  "/assets/images-webp/fitness-technology/8.png",
];

const PHONE_FRAME = "/assets/images-webp/fitness-technology/mobile-image.png";

const LEFT_FEATURES = [
  {
    title: "Expert Consultation",
    description:
      "Promote transparent and effective communication between users and fitness trainers by offering text, audio, and video communication options.",
  },
  {
    title: "Video & Tutorial",
    description:
      "Guide users towards the correct exercise techniques and postures with our extensive library of instructional videos and tutorials.",
  },
  {
    title: "Push Notifications",
    description:
      "Keep users on track with their exercise routine by sending them real-time alerts and reminders.",
  },
  {
    title: "Geolocation",
    description:
      "Empower users to create and track their walking, hiking, and cycling routes with our in-app navigation feature, making outdoor activities more enjoyable and convenient.",
  }
];

const RIGHT_FEATURES = [
  {
    title: "Workout/Diet Plans",
    description:
      "Give trainers the tools to curate workout and diet plans that are flexible and adaptable to the user's schedule and specific goals, promoting long-term adherence and overall well-being.",
  },
  {
    title: "Activity Tracking",
    description:
      "Track key metrics like distance, calories, and speed to stay on top of your fitness goals.",
  },
  {
    title: "Altimeter",
    description:
      "Get a smart feature with our app's integrated altitude tracking, precise location services, and real-time barometric pressure monitoring.",
  },
  {
    title: "Wearable Connection",
    description:
      "Track your progress with precision by connecting your trusted smart devices, including watches and armbands.",
  }
];

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

const USER_JOIN_LINE_WIDTH = 960;
const USER_JOIN_LINE_HEIGHT = 420;
const USER_JOIN_LINE_VIEWBOX = `0 0 ${USER_JOIN_LINE_WIDTH} ${USER_JOIN_LINE_HEIGHT}`;
const USER_JOIN_LINE_PATH = "M5 62C360 62 600 371 952 309";
const USER_JOIN_LINE_STROKE = "#76B539";
const USER_JOIN_LINE_STROKE_WIDTH = 12;

function UserJoinLineSvg({ mirror, verticalFlip }) {
  const pathEl = (
    <path
      d={USER_JOIN_LINE_PATH}
      stroke={USER_JOIN_LINE_STROKE}
      strokeWidth={USER_JOIN_LINE_STROKE_WIDTH}
      strokeLinecap="round"
      fill="none"
    />
  );
  let content = pathEl;
  if (verticalFlip) {
    content = (
      <g
        transform={`translate(0 ${USER_JOIN_LINE_HEIGHT}) scale(1 -1)`}
      >
        {content}
      </g>
    );
  }
  if (mirror) {
    content = (
      <g transform={`translate(${USER_JOIN_LINE_WIDTH} 0) scale(-1 1)`}>
        {content}
      </g>
    );
  }
  const preserveAspectRatio = mirror
    ? "xMaxYMid meet"
    : "xMinYMid meet";

  return (
    <svg
      viewBox={USER_JOIN_LINE_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[52px] w-full max-h-[56px] min-h-[48px]"
      preserveAspectRatio={preserveAspectRatio}
    >
      {content}
    </svg>
  );
}

const LEFT_CONNECTOR_PATHS = [
  "M0 20 L128 31",
  "M0 20 L128 9",
];

const RIGHT_CONNECTOR_PATHS = [
  "M0 22 L128 12",
  "M0 22 L128 32",
];

const connectorLeftClass =
  "hidden min-h-[56px] w-20 shrink-0 items-center self-center lg:-ml-1.5 lg:flex xl:w-28 2xl:w-32";
const connectorLeftThinClass =
  "hidden min-h-[44px] w-20 shrink-0 items-center self-center text-[#70AA26] lg:-ml-1.5 lg:flex xl:w-28 2xl:w-32";
const connectorRightClass =
  "hidden min-h-[56px] w-20 shrink-0 items-center self-center lg:-mr-1.5 lg:flex xl:w-28 2xl:w-32";
const connectorRightThinClass =
  "hidden min-h-[44px] w-20 shrink-0 items-center self-center text-[#70AA26] lg:-mr-1.5 lg:flex xl:w-28 2xl:w-32";

function ConnectorLeft({ index }) {
  if (index === 0) {
    return (
      <div className={connectorLeftClass} aria-hidden>
        <UserJoinLineSvg mirror={false} verticalFlip={false} />
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className={connectorLeftClass} aria-hidden>
        <UserJoinLineSvg mirror={false} verticalFlip />
      </div>
    );
  }
  const d =
    LEFT_CONNECTOR_PATHS[index - 1] ?? LEFT_CONNECTOR_PATHS[0];
  return (
    <div className={connectorLeftThinClass} aria-hidden>
      <svg
        className="h-11 w-full max-h-[48px]"
        viewBox="0 0 128 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <path
          d={d}
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function ConnectorRight({ index }) {
  if (index === 0) {
    return (
      <div className={connectorRightClass} aria-hidden>
        <UserJoinLineSvg mirror verticalFlip={false} />
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className={connectorRightClass} aria-hidden>
        <UserJoinLineSvg mirror verticalFlip />
      </div>
    );
  }
  const d =
    RIGHT_CONNECTOR_PATHS[index - 1] ?? RIGHT_CONNECTOR_PATHS[0];
  const pathProps = {
    stroke: "currentColor",
    strokeWidth: "1.85",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    fill: "none",
  };

  return (
    <div className={connectorRightThinClass} aria-hidden>
      <svg
        className="h-11 w-full max-h-[48px]"
        viewBox="0 0 128 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid meet"
      >
        <path d={d} {...pathProps} />
      </svg>
    </div>
  );
}

function FeatureCard({ title, description, side, index }) {
  const card = (
    <article className="min-w-0 w-full max-w-full flex-1 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.12)] sm:p-6 lg:max-w-[min(100%,22rem)] lg:flex-none xl:max-w-[min(100%,23rem)] relative z-[1]">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-3">
          <span className="mt-[4px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#70AA26]">
            <CheckIcon />
          </span>
          <h3 className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tight text-neutral-900 sm:text-[17px]">
            {title}
          </h3>
        </div>
        <p className="mt-2 min-h-[4.5rem] pl-[calc(18px+0.75rem)] text-pretty text-[13px] leading-relaxed text-slate-600 sm:min-h-[4.875rem]">
          {description}
        </p>
      </div>
    </article>
  );

  if (side === "left") {
    return (
      <div className="flex w-full flex-row items-center gap-0">
        {card}
        <ConnectorLeft index={index} />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-row items-center justify-end gap-0">
      <ConnectorRight index={index} />
      {card}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative z-10 flex w-full justify-center lg:col-start-2 lg:row-start-2 lg:justify-self-center">
      <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
        <SuitePhoneCarousel
          frameSrc={PHONE_FRAME}
          screenSrcs={FEATURE_SCREENS}
          alt="Fitness app preview on a phone"
        />
      </div>
    </div>
  );
}

export default function FitnessTechnologySuiteSection() {
  return (
    <section
      className={`relative w-full overflow-x-clip ${styles.fitnessTechnologySuite}`}
      aria-labelledby="fitness-technology-suite-heading"
    >

      <div className="mx-auto max-w-[980px] text-center"><span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">Technology</span><h2 id="fitness-technology-suite-heading" className="title text-balance text-neutral-900">Elevate Your Fitness Brand <span className="text-[#70AA26]">with Our Tech Tools</span></h2><p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">Drive the growth of your fitness community and enhance your brand's success by offering an exceptional fitness app developed by our expert fitness app development company. Our app boasts impressive functionalities, engaging features, and a user-friendly interface that will captivate your users, fostering a stronger and more connected fitness community. With our cutting-edge technology, you can revolutionize the way your brand thrives in the fitness industry.</p></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)_minmax(0,1fr)] lg:gap-x-2 lg:gap-y-6 xl:gap-x-3">

          <PhoneMockup />

          <div className="flex flex-col gap-4 sm:gap-5 md:grid md:grid-cols-2 md:gap-5 lg:contents">
            <div className="flex flex-col gap-3 sm:gap-4 lg:col-start-1 lg:row-start-2">
              {LEFT_FEATURES.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  index={index}
                  title={item.title}
                  description={item.description}
                  side="left"
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 lg:col-start-3 lg:row-start-2">
              {RIGHT_FEATURES.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  index={index}
                  title={item.title}
                  description={item.description}
                  side="right"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
