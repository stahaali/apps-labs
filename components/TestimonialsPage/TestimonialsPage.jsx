import Link from "next/link";
import HeroBannerNoiseOverlay from "@/components/HeroBanner/HeroBannerNoiseOverlay";
import ContactFaq from "@/components/ContactPage/ContactFaq";
import contactStyles from "@/components/ContactPage/ContactPage.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import {
  TESTIMONIAL_PAGE_COLUMNS,
  TESTIMONIALS_PAGE_FAQ,
} from "@/lib/testimonialsPageData";
import styles from "./TestimonialsPage.module.css";

const PRIMARY = "#70AA26";

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ item }) {
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

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className={`${contactStyles.contactHero} px-4 pb-14 pt-[calc(72px+2.5rem)] min-[480px]:px-6 sm:px-10 sm:pb-16 sm:pt-[calc(72px+3rem)] lg:pb-20 lg:pt-[calc(72px+4rem)]`}
        aria-labelledby="testimonials-page-title"
      >
        {/* <HeroBannerNoiseOverlay /> */}
        <div className={`${contactStyles.contactHeroInner} mx-auto max-w-[1200px] text-center`}>
          <span
            className="inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
            style={{ backgroundColor: PRIMARY }}
          >
            Client stories
          </span>
          <h1
            id="testimonials-page-title"
            className="title mx-auto mt-5 max-w-4xl text-balance text-white sm:mt-6"
          >
            Testimonials{" "}
            <span style={{ color: PRIMARY }}>from teams we&apos;ve shipped with</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
            Fourteen voices across product, ops, and engineering—balanced across three
            columns so longer stories sit beside shorter ones without one side running
            much longer.
          </p>
          <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-relaxed text-neutral-500">
            Ready for your own build?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#70AA26] underline decoration-[#70AA26]/40 underline-offset-4 transition-colors hover:text-[#8bc53a]"
            >
              Start a conversation
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        className={`${contactStyles.contactLight} px-4 py-12 min-[480px]:px-6 sm:px-10 sm:py-16 lg:py-20`}
        aria-label="Client testimonials"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className={`${styles.grid} mt-2 lg:mt-0`}>
            {TESTIMONIAL_PAGE_COLUMNS.map((column, colIdx) => (
              <div key={colIdx} className={styles.column}>
                {column.map((item) => (
                  <ReviewCard key={item.name} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.faqBlock} mx-auto max-w-[720px] px-4 min-[480px]:px-6 sm:px-10`}
          aria-labelledby="testimonials-faq-heading"
        >
          <h2
            id="testimonials-faq-heading"
            className="title text-center text-balance text-neutral-900 sm:mb-2"
          >
            Questions about{" "}
            <span className="text-[#70AA26]">our client work</span>
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-center text-[15px] leading-relaxed text-neutral-600">
            How we handle references, confidentiality, and case studies.
          </p>
          <ContactFaq items={TESTIMONIALS_PAGE_FAQ} />
        </div>
      </section>
    </main>
  );
}
