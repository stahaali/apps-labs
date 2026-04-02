'use client';

import Image from "next/image";
import styles from "./TestimonialSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";

const BASE = "/assets/images-webp/testimonial";

const TESTIMONIALS = [
  {
    name: "William Joy",
    role: "Smartvision Tech",
    avatar: `${BASE}/testi-image1.png`,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum non pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, in rerum distinctio sunt.",
  },
  {
    name: "John Due",
    role: "Corporate Agency",
    avatar: `${BASE}/testi-image2.png`,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum non pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et nam distinctio sunt omnis quam!",
  },
  {
    name: "Maria",
    role: "Company Inc",
    avatar: `${BASE}/testi-image3.png`,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum non pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, in rerum distinctio sunt animi quam!",
  },
  {
    name: "Emily Johnson",
    role: "Studio North",
    avatar: `${BASE}/testi-image1.png`,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum non pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, in rerum distinctio sunt.",
  },
];

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
          <Image
            src={item.avatar}
            alt=""
            width={44}
            height={44}
            sizes="44px"
            className={styles.avatar}
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

export default function TestimonialSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonial-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.badge}>Reviews</span>
            <h2 id="testimonial-heading" className={styles.heading}>
              <span className={styles.headingAccent}>Positive Reviews</span>
              <br />
              of Our Clients
            </h2>

            <div className={styles.metaRow}>
              <Stars count={5} />
              <span className={styles.metaText}>
                <span className={styles.metaStrong}>4.5/5.0</span> Rated on{" "}
                <GoogleWordmark />
              </span>
            </div>

            <a className={styles.totalLink} href="#">
              <span className={styles.totalNum}>1399</span> Total user reviews{" "}
              <span className={styles.arrow} aria-hidden>
                →
              </span>
            </a>

            <div className={styles.smileWrap} aria-hidden>
              <Image
                src={`${BASE}/smile-icon.png`}
                alt=""
                width={74}
                height={74}
                className={styles.smile}
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.sliderFrame}>
              <Swiper
                modules={[Autoplay, Mousewheel]}
                loop
                spaceBetween={10}
                mousewheel={{ forceToAxis: true }}
                autoplay={{ delay: 2400, disableOnInteraction: false }}
                breakpoints={{
                  0: { direction: "horizontal", slidesPerView: 1.05 },
                  640: { direction: "horizontal", slidesPerView: 1.2 },
                  900: { direction: "vertical", slidesPerView: 3 },
                }}
                className={styles.swiper}
              >
                {TESTIMONIALS.map((item, idx) => (
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

