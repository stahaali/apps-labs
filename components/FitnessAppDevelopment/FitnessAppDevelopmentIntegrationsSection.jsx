"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import FitnessAppDevelopmentIntegrationIcon from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentIntegrationIcons";
import {
  FITNESS_APP_DEVELOPMENT_INTEGRATIONS,
  FITNESS_INTEGRATION_ROW1,
  FITNESS_INTEGRATION_ROW2,
} from "@/lib/fitnessAppDevelopmentIntegrations";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import marqueeStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1IntegrationsMarquee.module.css";
import bandStyles from "./FitnessAppDevelopmentIntegrationsSection.module.css";

const MARQUEE_GAP_PX = 12;

function repeatSlides(items, times = 12) {
  const out = [];
  for (let t = 0; t < times; t += 1) {
    items.forEach((item, i) => {
      out.push({ ...item, _k: `${item.id}-${t}-${i}` });
    });
  }
  return out;
}

function IntegrationMarqueeRow({ items, reverse }) {
  const slides = useMemo(() => repeatSlides(items), [items]);

  return (
    <div className={`relative w-full overflow-hidden py-0 ${marqueeStyles.rowMask}`}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={MARQUEE_GAP_PX}
        loop
        loopAdditionalSlides={items.length * 2}
        speed={11000}
        allowTouchMove={false}
        className={marqueeStyles.marqueeSwiper}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: reverse,
        }}
      >
        {slides.map((item) => (
          <SwiperSlide key={item._k} className="!w-auto">
            <div className="flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white px-4 py-2.5 shadow-sm sm:gap-3 sm:px-4 sm:py-3">
              <FitnessAppDevelopmentIntegrationIcon id={item.id} className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="whitespace-nowrap text-[15px] font-semibold text-neutral-800 sm:text-[16px]">
                {item.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function FitnessAppDevelopmentIntegrationsSection() {
  const { subtitle, headline } = FITNESS_APP_DEVELOPMENT_INTEGRATIONS;

  return (
    <section
      className={`${bandStyles.section} fitnessIntegrationsSectionMobileFlushTop`}
      aria-labelledby="fitness-integrations-heading"
    >
      <div className={`${pageStyles.inner} fitnessIntegrationsInnerFlush`}>
        <header className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Integrations
          </span>
          <h2
            id="fitness-integrations-heading"
            className="title text-balance break-words text-neutral-900"
          >
            {headline.before}
            <span className="text-[#70AA26]">{headline.highlight}</span>
            {headline.after}
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            {subtitle}
          </p>
        </header>
      </div>

      <div className={pageStyles.integrationsMarqueeBleed}>
        <div className="mt-12 flex flex-col sm:mt-14 lg:mt-16" style={{ gap: MARQUEE_GAP_PX }}>
          <IntegrationMarqueeRow items={FITNESS_INTEGRATION_ROW1} reverse={false} />
          <IntegrationMarqueeRow items={FITNESS_INTEGRATION_ROW2} reverse />
        </div>
      </div>
    </section>
  );
}
