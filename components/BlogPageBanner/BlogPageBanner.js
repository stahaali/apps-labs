import contactStyles from "@/components/ContactPage/ContactPage.module.css";

const PRIMARY = "#70AA26";

export default function BlogPageBanner() {
  return (
    <section
      className={`${contactStyles.contactHero400} ${contactStyles.contactHero400Blog} px-4 min-[480px]:px-6 sm:px-10`}
      aria-labelledby="blogs-page-heading"
    >
      <div
        className={`${contactStyles.contactHero400Inner} mx-auto max-w-[1200px] max-[576px]:max-w-[350px] text-center`}
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
