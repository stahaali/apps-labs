import ClassifiedPlatformBanner from "@/components/ClassifiedPlatformPage/ClassifiedPlatformBanner";
import ClassifiedPlatformOperationsSection from "@/components/ClassifiedPlatformPage/ClassifiedPlatformOperationsSection";
import {
  ClassifiedPlatformFaqSection,
  ClassifiedPlatformFeaturesSection,
  ClassifiedPlatformFulfillmentSection,
  ClassifiedPlatformIntegrationsSection,
  ClassifiedPlatformMarketingSection,
  ClassifiedPlatformOutcomesSection,
  ClassifiedPlatformPlatformSection,
  ClassifiedPlatformSetupSection,
  ClassifiedPlatformTechnologySuiteSection,
} from "@/lib/lazyVerticalPageSections";
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
        <CTASection sectionPadding80 {...CLASSIFIED_PLATFORM_CONTENT.ctaBand} />
      </div>
    </>
  );
}
