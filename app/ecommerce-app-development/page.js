import EcommerceAppDevelopmentSplitHero from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentSplitHero";
import {
  ECOMMERCE_SPLIT_HERO_SECOND,
  ECOMMERCE_WEBSITE_MOBILE_PLATFORM,
} from "@/lib/ecommerceAppDevelopmentFreeSetup";
import EcommerceBanner from "@/components/EcommerceBanner/EcommerceBanner";
import EcommerceIndustrySection from "@/components/EcommerceIndustrySection/EcommerceIndustrySection";
import EcommerceTechBoostSection from "@/components/EcommerceTechBoostSection/EcommerceTechBoostSection";
import EcommerceTechFeaturesShell from "@/components/EcommerceAppDevelopment/EcommerceTechFeaturesShell";
import EcommerceAppDevelopmentFaqSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentFaqSection";
import EcommerceAppDevelopmentIntegrationsSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentIntegrationsSection";
import EcommerceAppDevelopmentMarketingSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentMarketingSection";
import EcommerceAppDevelopmentOutcomesSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentOutcomesSection";
import EcommerceAppDevelopmentFulfillmentSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentFulfillmentSection";
import EcommerceAppDevelopmentFreeSetupSection from "@/components/EcommerceAppDevelopment/EcommerceAppDevelopmentFreeSetupSection";
import {
  BlogSection,
  CTASection,
  EcommerceTechStackSection,
  MarqueeSliderSection,
  OurPortfolioSection,
  PricingSection,
  TestimonialSection,
} from "@/lib/lazySections";

import styles from "./page.module.css";

export default function EcommerceAppDevelopmentPage() {
  return (
    <>
      <EcommerceBanner />
      <div className={styles.pageSectionStack}>
        <EcommerceAppDevelopmentSplitHero
          content={ECOMMERCE_SPLIT_HERO_SECOND}
          headingId="ecommerce-split-hero-secondary"
          headingLevel="h2"
          sectionVariant="alt"
          reverseColumns
        />
        <EcommerceAppDevelopmentSplitHero
          content={ECOMMERCE_WEBSITE_MOBILE_PLATFORM}
          headingId="ecommerce-split-hero-primary"
          headingLevel="h1"
          priorityImage
          imageAboveCopyAt768
        />
        <EcommerceAppDevelopmentFreeSetupSection />
        {/* <EcommerceIndustrySection /> */}
        <EcommerceTechFeaturesShell />
        {/* <EcommerceTechBoostSection /> */}
        <EcommerceAppDevelopmentFulfillmentSection />
        <EcommerceAppDevelopmentMarketingSection />
        <EcommerceAppDevelopmentIntegrationsSection />
        {/* <MarqueeSliderSection /> */}
        <EcommerceAppDevelopmentOutcomesSection />
        <TestimonialSection />
        <EcommerceAppDevelopmentFaqSection />
        <BlogSection />
        <CTASection />
        {/* <OurPortfolioSection /> */}
        {/* <EcommerceTechStackSection /> */}
        {/* <PricingSection /> */}
      </div>
    </>
  );
}
