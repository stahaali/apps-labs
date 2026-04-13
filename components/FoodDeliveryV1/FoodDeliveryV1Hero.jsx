"use client";

import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { FOOD_DELIVERY_V1_HERO } from "@/lib/foodDeliveryV1Content";
import bannerStyles from "@/components/FoodDeliveryBanner/FoodDeliveryBanner.module.css";

const HERO_IMG = "/assets/images-webp/banners/1.png";

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
      className={`${bannerStyles.foodDeliveryBanner} relative z-[1] w-full overflow-hidden`}
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
            <p className={bannerStyles.lead}>{lead}</p>

            <div className={bannerStyles.features} role="list">
              {bullets.map((label) => (
                <div key={label} className={bannerStyles.featureItem} role="listitem">
                  <span className={bannerStyles.checkBubble} aria-hidden>
                    <CheckGlyph />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex w-full max-w-[520px] flex-col gap-3 min-[480px]:flex-row min-[480px]:items-center">
              <button
                type="button"
                className={`${bannerStyles.ctaButton} w-full min-[480px]:w-auto min-[480px]:shrink-0`}
                onClick={openModal}
              >
                Get started
              </button>
              <Link
                href="#fd-v1-integrations"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 min-[480px]:w-auto"
              >
                Explore integrations
              </Link>
            </div>
          </AnimateOnView>

          <AnimateOnView variant="fadeLeft" className={bannerStyles.visualCol} delayMs={120}>
            <div className={bannerStyles.visualRoot}>
              <div className={bannerStyles.visualFrame}>
                <div className={`${bannerStyles.visualFigure} ${animateStyles.imageEase}`}>
                  <ImageWithSkeleton
                    src={HERO_IMG}
                    alt="Restaurant ordering and delivery app interfaces"
                    width={400}
                    height={435}
                    sizes="(max-width: 767px) min(90vw, 400px), 400px"
                    className="max-w-[400px] select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    fetchPriority="high"
                    darkBackground
                    wrapClassName="block w-full max-w-[400px]"
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
