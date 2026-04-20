"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import sliderStyles from "./FoodDeliveryV1CenterSlider.module.css";

const HEADING_ACCENT = "text-[#70AA26]";
const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const THEME_LEAD_CENTER =
  "mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";
const SECTION_HEAD = "mx-auto max-w-[900px] text-center";

export default function FoodDeliveryV1CenterSlider({
  content,
  headingId = "fd-v1-gallery-slider-heading",
}) {
  const { eyebrow, headline, subtitle, slides } = content;

  return (
    <section
      className={pageStyles.sectionLavender}
      aria-labelledby={headingId}
    >
      <div className={pageStyles.inner}>
        <header className={SECTION_HEAD}>
          <span className={THEME_PILL}>{eyebrow}</span>
          <h2 id={headingId} className={THEME_H2}>
            {headline.before}
            <span className={HEADING_ACCENT}>{headline.highlight}</span>
            {headline.after}
          </h2>
          <p className={THEME_LEAD_CENTER}>{subtitle}</p>
        </header>
      </div>

      {/* Full viewport width under section (not limited by `.inner` max-width). */}
      <div className={sliderStyles.swiperOuter}>
        <Swiper
          className={`${sliderStyles.swiper} ${sliderStyles.swiperGallery}`}
          modules={[Autoplay]}
          centeredSlides={false}
          rewind
          watchOverflow
          speed={550}
          spaceBetween={16}
          slidesPerView={1}
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 18 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className={sliderStyles.slideFrame}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className={sliderStyles.slideImage}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
