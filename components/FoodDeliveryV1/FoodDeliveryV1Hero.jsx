"use client";

import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import GreenButton from "@/components/GreenButton/GreenButton";
import GreyButton from "@/components/GreyButton/GreyButton";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { FOOD_DELIVERY_V1_HERO } from "@/lib/foodDeliveryV1Content";
import bannerStyles from "@/components/FoodDeliveryBanner/FoodDeliveryBanner.module.css";

const HERO_IMG = "/assets/images-webp/v1/1.webp";

function CheckGlyph() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
      <path
        d="M1 4.2L4.2 7.4L10 1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FoodDeliveryV1Hero() {
  const { openModal } = useLeadFormModal();
  const { line1, line2, lead, bullets } = FOOD_DELIVERY_V1_HERO;

  return (
    <section
      className={`${bannerStyles.foodDeliveryBanner} ${bannerStyles.heroVisualFull} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="fd-v1-hero-heading"
    >
      <div className={bannerStyles.inner}>
        <div className={bannerStyles.grid}>
          <AnimateOnView variant="fadeUp" className={bannerStyles.contentCol}>
            <h1 id="fd-v1-hero-heading" className={bannerStyles.headline}>
              <span className={bannerStyles.headlineAccent}>{line1}</span>
              <br />
              <span className={bannerStyles.headlinePlain}>{line2}</span>
            </h1>
            <p className={`${bannerStyles.lead} text-neutral-400`}>{lead}</p>

            <div className={bannerStyles.features} role="list">
              {bullets.map((label) => (
                <div key={label} className={`${bannerStyles.featureItem} text-neutral-300`} role="listitem">
                  <span className={bannerStyles.checkBubble} aria-hidden>
                    <CheckGlyph />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="fd-v1-hero-ctas mt-8 flex w-full max-w-[520px] flex-col gap-3 min-[480px]:flex-row min-[480px]:items-stretch">
              <GreenButton
                type="button"
                size="compact"
                className="w-full min-[480px]:min-w-0 min-[480px]:flex-1 min-[480px]:basis-0 min-[480px]:w-full"
                onClick={openModal}
              >
                Start Selling Food online
              </GreenButton>
              <GreyButton
                href="#fd-v1-integrations"
                className="w-full min-[480px]:min-w-0 min-[480px]:flex-1 min-[480px]:basis-0"
              >
                Explore integrations
              </GreyButton>
            </div>
          </AnimateOnView>

          <AnimateOnView variant="fadeLeft" className={bannerStyles.visualCol} delayMs={120}>
            <div className={bannerStyles.visualRoot}>
              <div className={bannerStyles.visualFrame}>
                <div className={`${bannerStyles.visualFigure} ${animateStyles.imageEase}`}>
                  <ImageWithSkeleton
                    src={HERO_IMG}
                    alt="Branded food ordering app on mobile — menu browse and product detail"
                    width={1100}
                    height={481}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 52vw, min(56vw, 900px)"
                    className="w-full select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    fetchPriority="high"
                    darkBackground
                    wrapClassName="block w-full"
                  />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
