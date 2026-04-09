import EcommerceBanner from "@/components/EcommerceBanner/EcommerceBanner";
import EcommerceIndustrySection from "@/components/EcommerceIndustrySection/EcommerceIndustrySection";
import EcommerceFeaturesSection from "@/components/EcommerceFeaturesSection/EcommerceFeaturesSection";
import EcommerceTechBoostSection from "@/components/EcommerceTechBoostSection/EcommerceTechBoostSection";
import EcommerceTechnologySuiteSection from "@/components/EcommerceTechnologySuiteSection/EcommerceTechnologySuiteSection";
import {
  BlogSection,
  CTASection,
  EcommerceTechStackSection,
  MarqueeSliderSection,
  OurPortfolioSection,
  PricingSection,
  TestimonialSection,
} from "@/lib/lazySections";

export default function EcommerceAppDevelopmentPage() {
  return (
    <>
      <EcommerceBanner />
      <EcommerceIndustrySection />
      <EcommerceTechnologySuiteSection />
      <EcommerceTechBoostSection />
      <EcommerceFeaturesSection />
      <MarqueeSliderSection />
      <CTASection />
      <OurPortfolioSection />
      <EcommerceTechStackSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
