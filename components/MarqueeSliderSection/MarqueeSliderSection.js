"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./MarqueeSliderSection.module.css";

const SEGMENTS = [
  "Multiple campaigns",
  "User friendly",
  "Advanced analytics",
];

export default function MarqueeSliderSection() {
  const slides = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    text: SEGMENTS[i % SEGMENTS.length],
  }));

  return (
    <div className={styles.outer}>
      <div className={styles.strip}>
        <Swiper
          modules={[Autoplay]}
          className={styles.swiper}
          slidesPerView="auto"
          spaceBetween={28}
          loop
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
        >
          {slides.map(({ id, text }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <span className={styles.segmentText}>{text}</span>
              <span className={styles.dot} aria-hidden>
                •
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
