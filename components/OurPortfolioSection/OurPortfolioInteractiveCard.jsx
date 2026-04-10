"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import styles from "./OurPortfolioSection.module.css";

const AUTO_ADVANCE_MS = 5000;

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurPortfolioInteractiveCard({ images, imageAlt }) {
  const slides = images.length > 0 ? images : ["/assets/images-webp/our-portfolio/portfolio-1.png"];
  const multi = slides.length > 1;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!multi) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return undefined;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [multi, slides.length]);

  const dotCount = multi ? slides.length : 3;
  const activeDot = multi ? active : 0;

  return (
    <div className={styles.portfolioCard}>
      <div className={styles.shadowLayer} aria-hidden>
        <Image
          src="/assets/images-webp/our-portfolio/shadow-2.png"
          alt=""
          fill
          sizes="(max-width: 767px) 60vw, 520px"
          className={styles.shadowImage}
        />
      </div>
      <div className={styles.cardGrain} aria-hidden />
      <div className={styles.cardInner}>
        <div className={styles.visualCol}>
          <div
            className={`${styles.visualFrame}${multi ? "" : ` ${animateStyles.imageEase}`}`}
          >
            {multi ? (
              <div className={styles.portfolioSliderViewport}>
                <div
                  className={styles.portfolioSliderTrack}
                  style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${(active * 100) / slides.length}%)`,
                  }}
                >
                  {slides.map((src, i) => (
                    <div
                      key={src}
                      className={styles.portfolioSliderCell}
                      style={{ flex: `0 0 ${100 / slides.length}%` }}
                    >
                      <ImageWithSkeleton
                        src={src}
                        alt={i === active ? imageAlt : ""}
                        width={640}
                        height={520}
                        className="object-contain object-left"
                        style={{ width: "100%", height: "auto" }}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        wrapClassName="block w-full"
                        darkBackground
                        priority={i === 0}
                        noOpacityTransition
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ImageWithSkeleton
                src={slides[0]}
                alt={imageAlt}
                width={640}
                height={520}
                className="object-contain object-left"
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 767px) 100vw, 50vw"
                wrapClassName="block w-full"
              />
            )}
          </div>
        </div>

        <div className={styles.detailCol}>
          <p className={styles.category}>E-COMMERCE</p>
          <h3 className={styles.projectTitle}>LuxeCart</h3>
          <p className={styles.description}>
            A premium luxury marketplace with AI-powered product recommendations, AR try-on, and one-tap checkout.
          </p>
          <div className={styles.tagRow}>
            <span className={styles.tag}>iOS</span>
            <span className={styles.tag}>Android</span>
            <span className={styles.tag}>AI/ML</span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>2.1M</span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.statDivider} aria-hidden />
            <div className={styles.statBlock}>
              <span className={styles.statValue}>4.9 ★</span>
              <span className={styles.statLabel}>App Rating</span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.dots} aria-hidden>
              {Array.from({ length: dotCount }, (_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === activeDot ? styles.dotActive : ""}`}
                />
              ))}
            </div>
            <Link href="/portfolio" className={styles.viewLink}>
              <span>View</span>
              <span className={styles.viewIconBtn}>
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
