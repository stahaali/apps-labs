import NutritionBanner from "@/components/NutritionBanner/NutritionBanner";
import {
  NutritionAppDevelopmentFaqSection,
  NutritionAppDevelopmentFulfillmentSection,
  NutritionAppDevelopmentIntegrationsSection,
  NutritionAppDevelopmentMarketingSection,
  NutritionAppDevelopmentOperationsSection,
  NutritionAppDevelopmentOutcomesSection,
  NutritionAppDevelopmentPlatformSection,
  NutritionAppDevelopmentSetupSection,
  NutritionFeaturesSection,
  NutritionTechnologySuiteSection,
} from "@/lib/lazyNutritionPageSections";
import { NUTRITION_APP_DEVELOPMENT_CTA_BAND } from "@/lib/nutritionAppDevelopmentSetup";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";

import styles from "./page.module.css";

export const metadata = {
  title: "Nutrition Platform Development | Apex Labs",
  description:
    "Meal planning, macro tracking, coaching, and habit apps—custom nutrition software aligned to your brand and clinical guardrails.",
};

export default function NutritionPlatformPage() {
  return (
    <>
      <NutritionBanner />
      <div className={styles.pageSectionStack}>
        <NutritionAppDevelopmentOperationsSection />
        <NutritionAppDevelopmentPlatformSection />
        <NutritionAppDevelopmentSetupSection />
        <NutritionFeaturesSection />
        <NutritionTechnologySuiteSection />
        <NutritionAppDevelopmentFulfillmentSection />
        <NutritionAppDevelopmentMarketingSection />
        <NutritionAppDevelopmentIntegrationsSection />
        <NutritionAppDevelopmentOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          nutritionPageMobileFlushTop
        />
        <NutritionAppDevelopmentFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 {...NUTRITION_APP_DEVELOPMENT_CTA_BAND} />
      </div>
    </>
  );
}
