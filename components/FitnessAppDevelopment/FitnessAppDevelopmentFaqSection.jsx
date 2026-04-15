import ContactFaq from "@/components/ContactPage/ContactFaq";
import { FITNESS_APP_DEVELOPMENT_FAQ } from "@/lib/fitnessAppDevelopmentFaq";

/**
 * FAQ band — same layout + ContactFaq styling as EcommerceAppDevelopmentFaqSection.
 */
export default function FitnessAppDevelopmentFaqSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-gradient-to-b from-[#f4f6ff] to-[#fdf7ec] py-[80px]"
      aria-labelledby="fitness-app-faq-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 min-[480px]:px-6 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            FAQ
          </span>
          <h2
            id="fitness-app-faq-heading"
            className="title text-balance text-neutral-900"
          >
            Fitness App{" "}
            <span className="text-[#70AA26]">Development — Answered</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            Clear answers on launching, scaling, and what belongs in a modern fitness platform.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[720px] max-[576px]:mx-[15px] sm:mt-14 lg:mt-16">
          <ContactFaq items={FITNESS_APP_DEVELOPMENT_FAQ} />
        </div>
      </div>
    </section>
  );
}
