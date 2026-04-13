import ContactFaq from "@/components/ContactPage/ContactFaq";
import PricingPageBanner from "@/components/PricingPageBanner/PricingPageBanner";
import PricingSection from "@/components/PricingSection/PricingSection";
import { PRICING_FAQ_ITEMS } from "@/lib/pricingFaq";

const PRIMARY = "#70AA26";

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDF7EC]">
      <PricingPageBanner />
      <PricingSection
        noTopPadding
        hideSectionEyebrow
        quoteHref="/contact"
        titleAs="h2"
      />

      <section
        className="border-t border-slate-300/40 bg-[#FDF7EC] px-4 pb-16 pt-[clamp(2.5rem,5vw,4rem)] min-[480px]:px-6 lg:px-8"
        aria-labelledby="pricing-faq-heading"
      >
        <div className="mx-auto max-w-[720px]">
          <h2
            id="pricing-faq-heading"
            className="title text-center text-balance text-neutral-900 sm:mb-2"
          >
            Frequently Asked{" "}
            <span style={{ color: PRIMARY }}>Questions</span>
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-center text-[15px] leading-relaxed text-neutral-600">
            Common questions about our plans, quotes, and how billing works.
          </p>
          <ContactFaq items={PRICING_FAQ_ITEMS} />
        </div>
      </section>
    </main>
  );
}
