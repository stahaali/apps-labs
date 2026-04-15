import FitnessAppDevelopmentFulfillmentSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentFulfillmentSection";
import FitnessAppDevelopmentIntegrationsSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentIntegrationsSection";
import FitnessAppDevelopmentMarketingSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentMarketingSection";
import FitnessAppDevelopmentOperationsSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentOperationsSection";
import FitnessAppDevelopmentOutcomesSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentOutcomesSection";
import FitnessAppDevelopmentPlatformSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentPlatformSection";
import FitnessAppDevelopmentSetupSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentSetupSection";
import FitnessAppDevelopmentFaqSection from "@/components/FitnessAppDevelopment/FitnessAppDevelopmentFaqSection";
import FitnessBanner from "@/components/FitnessBanner/FitnessBanner";
import FitnessTechnologySuiteSection from "@/components/FitnessTechnologySuiteSection/FitnessTechnologySuiteSection";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import FitnessFeaturesSection from "@/components/FitnessFeaturesSection/FitnessFeaturesSection";

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
        <TestimonialSection sectionPadding80 />
        <FitnessAppDevelopmentFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 />
      </div>
    </>
  );
}
