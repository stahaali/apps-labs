import HeroBannerNoiseOverlay from "@/components/HeroBanner/HeroBannerNoiseOverlay";
import contactStyles from "@/components/ContactPage/ContactPage.module.css";

const PRIMARY = "#70AA26";

export default function BlogPageBanner() {
  return (
    <section
      className={`${contactStyles.contactHero} px-4 pb-14 pt-[calc(72px+2.5rem)] min-[480px]:px-6 sm:px-10 sm:pb-16 sm:pt-[calc(72px+3rem)] lg:pb-16 lg:pt-[calc(72px+4rem)]`}
      aria-labelledby="blogs-page-heading"
    >
      <HeroBannerNoiseOverlay />
      <div
        className={`${contactStyles.contactHeroInner} mx-auto max-w-[1200px] text-center`}
      >
        <span
          className="inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
          style={{ backgroundColor: PRIMARY }}
        >
          Blog
        </span>
        <h1
          id="blogs-page-heading"
          className="title mx-auto mt-5 max-w-4xl text-balance text-white sm:mt-6"
        >
          Our Latest <span style={{ color: PRIMARY }}>Blog Posts</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
          Insights on mobile apps, product design, and growing digital
          businesses—ideas and playbooks from the Apex Labs team.
        </p>
      </div>
    </section>
  );
}
