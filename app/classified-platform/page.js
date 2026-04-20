import ClassifiedPlatformBanner from "@/components/ClassifiedPlatformPage/ClassifiedPlatformBanner";
import ClassifiedPlatformOperationsSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformOperationsSection";
import ClassifiedPlatformPlatformSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformPlatformSection";
import ClassifiedPlatformSetupSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformSetupSection";
import ClassifiedPlatformFeaturesSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformFeaturesSection";
import ClassifiedPlatformTechnologySuiteSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformTechnologySuiteSection";
import ClassifiedPlatformFulfillmentSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformFulfillmentSection";
import ClassifiedPlatformMarketingSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformMarketingSection";
import ClassifiedPlatformIntegrationsSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformIntegrationsSection";
import ClassifiedPlatformOutcomesSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformOutcomesSection";
import ClassifiedPlatformFaqSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformFaqSection";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import stackStyles from "@/components/PageSectionStack/pageSectionStack.module.css";
import { CLASSIFIED_PLATFORM_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = CLASSIFIED_PLATFORM_CONTENT.metadata;

export default function ClassifiedPlatformPage() {
  return (
    <>
      <ClassifiedPlatformBanner />
      <div className={stackStyles.pageSectionStack}>
        <ClassifiedPlatformOperationsSection />
        <ClassifiedPlatformPlatformSection />
        <ClassifiedPlatformSetupSection />
        <ClassifiedPlatformFeaturesSection />
        <ClassifiedPlatformTechnologySuiteSection />
        <ClassifiedPlatformFulfillmentSection />
        <ClassifiedPlatformMarketingSection />
        <ClassifiedPlatformIntegrationsSection />
        <ClassifiedPlatformOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          classifiedPageMobileFlushTop
        />
        <ClassifiedPlatformFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 />
      </div>
    </>
  );
}
