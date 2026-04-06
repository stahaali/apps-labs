import BlogSection from "@/components/BlogSection/BlogSection";
import CTASection from "@/components/CTASection/CTASection";
import FoodDeliveryBanner from "@/components/FoodDeliveryBanner/FoodDeliveryBanner";
import FoodIndustrySection from "@/components/FoodIndustrySolutionSection/FoodIndustrySection";
import FoodDeliveryTechBoostSection from "@/components/FoodDeliveryTechBoostSection/FoodDeliveryTechBoostSection";
import FoodTechnologySuiteSection from "@/components/FoodTechnologySuiteSection/FoodTechnologySuiteSection";
import FoodDeliveryFeaturesSection from "@/components/FoodDeliveryFeaturesSection/FoodDeliveryFeaturesSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import MarqueeSliderSection from "@/components/MarqueeSliderSection/MarqueeSliderSection";
import TechStackSection from "@/components/TechStackSection/TechStackSection";

export default function FoodDeliveryPage() {
  return (
    <>
      <FoodDeliveryBanner />
      <FoodIndustrySection />
      <FoodTechnologySuiteSection />
      <FoodDeliveryTechBoostSection />
      <FoodDeliveryFeaturesSection />
      <MarqueeSliderSection/>
      <CTASection/>
      <OurPortfolioSection/>
      <TechStackSection />
      <PricingSection/>
      <TestimonialSection/>
      <BlogSection/>
    </>
  );
}
