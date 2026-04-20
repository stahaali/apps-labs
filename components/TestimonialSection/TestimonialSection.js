'use client';

import Image from "next/image";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./TestimonialSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";

import { TESTIMONIAL_SLIDER_ITEMS } from "@/lib/clientTestimonials";

const BASE = "/assets/images-webp/testimonial";
const SHADOW_IMAGE = `${BASE}/shadow-1.webp`;
const SHADOW_WIDTH = 700;

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function GoogleWordmark() {
  return (
    <span className={styles.google} aria-label="Google">
      <span className={styles.g1}>G</span>
      <span className={styles.g2}>o</span>
      <span className={styles.g3}>o</span>
      <span className={styles.g4}>g</span>
      <span className={styles.g5}>l</span>
      <span className={styles.g6}>e</span>
    </span>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.avatarWrap} aria-hidden>
          <ImageWithSkeleton
            src={item.avatar}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className={styles.avatar}
            skeletonClassName="rounded-full"
            wrapClassName="block h-full w-full"
          />
        </div>
        <div className={styles.person}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.role}>{item.role}</p>
        </div>
        <Stars count={item.rating} />
      </div>
      <p className={styles.text}>{item.text}</p>
    </article>
  );
}

export default function TestimonialSection({
  sectionPadding80 = false,
  /** Use with `sectionPadding80` — removes top gap (e.g. fitness page under outcomes). */
  sectionPaddingTopZero = false,
  /** Home (`/` via `HomeClientTestimonial`): ≤576px outer section padding-top 40px */
  homeMobileOuterTop40 = false,
  /** `/fitness-app-development`: ≤576px flush outer top via `page.module.css` hook. */
  fitnessPageMobileFlushTop = false,
  /** `/logistics-transportation`: same mobile flush hook as fitness vertical pages. */
  logisticsPageMobileFlushTop = false,
  /** `/about`: from 768px, equal 80px top/bottom outer section padding */
  aboutPageTabletPadding80 = false,
}) {
  return (
    <section
      className={[
        styles.section,
        sectionPadding80 && styles.sectionPadding80,
        sectionPadding80 && sectionPaddingTopZero && styles.sectionPaddingTopZero,
        homeMobileOuterTop40 && styles.homeTestimonialOuterMobileTop40,
        aboutPageTabletPadding80 && styles.aboutTestimonialTabletPadding80,
        fitnessPageMobileFlushTop && "fitnessTestimonialMobileFlushTop",
        logisticsPageMobileFlushTop && "logisticsTestimonialMobileFlushTop",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="testimonial-heading"
    >
      <div className={`${styles.iconShadowWrap} hidden sm:block`} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={SHADOW_WIDTH}
          height={SHADOW_WIDTH}
          className={styles.iconShadowImage}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.badge}>Reviews</span>
            <h2 id="testimonial-heading" className={`title ${styles.heading}`}>
              <span className={styles.headingAccent}>Positive Reviews</span>
              <br />
              of Our Clients
            </h2>

            <div className={styles.metaRow}>
              <Stars count={5} />
              <span className={styles.metaText}>
                <span className={styles.metaStrong}>4.9/5.0</span> Rated on{" "}
                <GoogleWordmark />
              </span>
            </div>

            <a className={styles.totalLink} href="#">
              <span className={styles.totalNum}>180+</span> Total user reviews{" "}
              <span className={styles.arrow} aria-hidden>
                →
              </span>
            </a>

            <div className={styles.smileWrap} aria-hidden>
              <ImageWithSkeleton
                src={`${BASE}/smile-icon2.webp`}
                alt=""
                width={74}
                height={74}
                className={styles.smile}
                wrapClassName="block h-full w-full"
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.sliderFrame}>
              <Swiper
                modules={[Autoplay, Mousewheel]}
                rewind
                watchOverflow
                spaceBetween={30}
                mousewheel={{ forceToAxis: true }}
                autoplay={{ delay: 2400, disableOnInteraction: false }}
                breakpoints={{
                  0: { direction: "horizontal", slidesPerView: 1.05 },
                  640: { direction: "horizontal", slidesPerView: 1.2 },
                  768: { direction: "vertical", slidesPerView: 3 },
                }}
                className={styles.swiper}
              >
                {TESTIMONIAL_SLIDER_ITEMS.map((item, idx) => (
                  <SwiperSlide key={`${item.name}-${idx}`} className={styles.slide}>
                    <TestimonialCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

