import FitnessBanner from "@/components/FitnessBanner/FitnessBanner";
import {
  FitnessAppDevelopmentFaqSection,
  FitnessAppDevelopmentFulfillmentSection,
  FitnessAppDevelopmentIntegrationsSection,
  FitnessAppDevelopmentMarketingSection,
  FitnessAppDevelopmentOperationsSection,
  FitnessAppDevelopmentOutcomesSection,
  FitnessAppDevelopmentPlatformSection,
  FitnessAppDevelopmentSetupSection,
  FitnessFeaturesSection,
  FitnessTechnologySuiteSection,
} from "@/lib/lazyVerticalPageSections";
import { FITNESS_APP_DEVELOPMENT_CTA_BAND } from "@/lib/fitnessAppDevelopmentSetup";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";

import styles from "./page.module.css";

export const metadata = {
  title: "Fitness App Development | Apex Labs",
  description:
    "Custom fitness and wellness app development—training, nutrition, wearables, and member engagement built to scale.",
};

export default function FitnessAppDevelopmentPage() {
  return (
    <>
      <FitnessBanner />
      <div className={styles.pageSectionStack}>
        <FitnessAppDevelopmentOperationsSection />
        <FitnessAppDevelopmentPlatformSection />
        <FitnessAppDevelopmentSetupSection />
        <FitnessFeaturesSection />
        <FitnessTechnologySuiteSection />
        <FitnessAppDevelopmentFulfillmentSection />
        <FitnessAppDevelopmentMarketingSection />
        <FitnessAppDevelopmentIntegrationsSection />
        <FitnessAppDevelopmentOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          fitnessPageMobileFlushTop
        />
        <FitnessAppDevelopmentFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 {...FITNESS_APP_DEVELOPMENT_CTA_BAND} />
      </div>
    </>
  );
}
