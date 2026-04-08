import CTASection from "@/components/CTASection/CTASection";
import EcommerceBanner from "@/components/EcommerceBanner/EcommerceBanner";
import EcommerceIndustrySection from "@/components/EcommerceIndustrySection/EcommerceIndustrySection";
import EcommerceFeaturesSection from "@/components/EcommerceFeaturesSection/EcommerceFeaturesSection";
import EcommerceTechBoostSection from "@/components/EcommerceTechBoostSection/EcommerceTechBoostSection";
import MarqueeSliderSection from "@/components/MarqueeSliderSection/MarqueeSliderSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import EcommerceTechStackSection from "@/components/EcommerceTechStackSection/EcommerceTechStackSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import EcommerceTechnologySuiteSection from "@/components/EcommerceTechnologySuiteSection/EcommerceTechnologySuiteSection";

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
