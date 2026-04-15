import contactStyles from "@/components/ContactPage/ContactPage.module.css";

const PRIMARY = "#70AA26";

export default function PricingPageBanner() {
  return (
    <section
      className={`${contactStyles.contactHero400} ${contactStyles.contactHero400Pricing} px-4 min-[480px]:px-6 sm:px-10`}
      aria-labelledby="pricing-page-heading"
    >
      <div
        className={`${contactStyles.contactHero400Inner} mx-auto max-w-[1200px] max-[576px]:max-w-[350px] text-center`}
      >
        <span
          className="inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
          style={{ backgroundColor: PRIMARY }}
        >
          Pricing
        </span>
        <h1
          id="pricing-page-heading"
          className="title mx-auto mt-5 max-w-4xl text-balance text-white sm:mt-6"
        >
          Plans & <span style={{ color: PRIMARY }}>Pricing</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
          Ballpark tiers for MVPs, scaling products, and enterprise builds—tell us
          your scope and we&apos;ll return a tailored quote and timeline.
        </p>
      </div>
    </section>
  );
}
