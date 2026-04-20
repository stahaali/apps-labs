import BookAppointmentBanner from "@/components/BookAppointmentPage/BookAppointmentBanner";
import BookAppointmentOperationsSection from "@/components/BookAppointmentPage/BookAppointmentOperationsSection";
import BookAppointmentPlatformSection from "@/components/BookAppointmentPage/BookAppointmentPlatformSection";
import BookAppointmentSetupSection from "@/components/BookAppointmentPage/BookAppointmentSetupSection";
import BookAppointmentFeaturesSection from "@/components/BookAppointmentPage/BookAppointmentFeaturesSection";
import BookAppointmentTechnologySuiteSection from "@/components/BookAppointmentPage/BookAppointmentTechnologySuiteSection";
import BookAppointmentFulfillmentSection from "@/components/BookAppointmentPage/BookAppointmentFulfillmentSection";
import BookAppointmentMarketingSection from "@/components/BookAppointmentPage/BookAppointmentMarketingSection";
import BookAppointmentIntegrationsSection from "@/components/BookAppointmentPage/BookAppointmentIntegrationsSection";
import BookAppointmentOutcomesSection from "@/components/BookAppointmentPage/BookAppointmentOutcomesSection";
import BookAppointmentDevelopmentFaqSection from "@/components/BookAppointmentPage/BookAppointmentDevelopmentFaqSection";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import stackStyles from "@/components/PageSectionStack/pageSectionStack.module.css";

export const metadata = {
  title: "Book an Appointment | Apex Labs",
  description:
    "Schedule a consultation with Apex Labs—walk through scope, platforms, integrations, features, and next steps.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <BookAppointmentBanner />
      <div className={stackStyles.pageSectionStack}>
        <BookAppointmentOperationsSection />
        <BookAppointmentPlatformSection />
        <BookAppointmentSetupSection />
        <BookAppointmentFeaturesSection />
        <BookAppointmentTechnologySuiteSection />
        <BookAppointmentFulfillmentSection />
        <BookAppointmentMarketingSection />
        <BookAppointmentIntegrationsSection />
        <BookAppointmentOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          fitnessPageMobileFlushTop
        />
        <BookAppointmentDevelopmentFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 />
      </div>
    </>
  );
}
