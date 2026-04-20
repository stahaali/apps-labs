import ContactFaq from "@/components/ContactPage/ContactFaq";
import { CLASSIFIED_PLATFORM_FAQ } from "@/lib/classifiedPlatformFaq";

/**
 * FAQ band — same layout + ContactFaq styling as EcommerceAppDevelopmentFaqSection.
 */
export default function ClassifiedPlatformFaqSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-gradient-to-b from-[#f4f6ff] to-[#fdf7ec] py-[80px]"
      aria-labelledby="classified-app-faq-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 min-[480px]:px-6 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            FAQ
          </span>
          <h2
            id="classified-app-faq-heading"
            className="title text-balance text-neutral-900"
          >
            <span className="block">Classified marketplace</span>
            <span className="block text-[#70AA26]">development — answered</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Straight answers on trust, payments, search, and why custom beats templates for serious operators.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[720px] max-[576px]:mx-[15px] sm:mt-14 lg:mt-16">
          <ContactFaq items={CLASSIFIED_PLATFORM_FAQ} />
        </div>
      </div>
    </section>
  );
}
