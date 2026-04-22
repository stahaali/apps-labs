import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { AUCTION_APP_DEVELOPMENT_SETUP } from "@/lib/auctionAppDevelopmentSetup";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import localStyles from "./AuctionAppDevelopmentSetupSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

export default function AuctionAppDevelopmentSetupSection() {
  const {
    eyebrow,
    headlineLine1,
    headlineGreen,
    headlineAfterGreen,
    body,
    cta,
    image,
    imageAlt,
  } = AUCTION_APP_DEVELOPMENT_SETUP;

  const headingId = "auction-free-setup-heading";

  const visualBlock = (
    <div className={localStyles.visualCluster}>
      <div className={localStyles.photoWrap}>
        <div className="relative w-full min-h-[200px] bg-neutral-100/40">
          <ImageWithSkeleton
            src={image}
            alt={imageAlt}
            width={2000}
            height={1250}
            className="h-auto w-full object-cover object-center"
            sizes="(max-width: 639px) min(92vw, 580px), (max-width: 1023px) min(80vw, 580px), min(600px, 48vw)"
            quality={85}
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
    <section
      className={`${localStyles.sectionShell} auctionFreeSetupSection`}
      aria-labelledby={headingId}
    >
      <div
        className={`${pageStyles.inner} auctionFreeSetupInnerFlush`}
      >
        <div className={localStyles.rowsWrap}>
          <div className={`${pageStyles.split} ${localStyles.splitTopAlign}`}>
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
