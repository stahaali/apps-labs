import BlogSection from "@/components/BlogSection/BlogSection";
import CTASection from "@/components/CTASection/CTASection";
import FoodDeliveryBanner from "@/components/FoodDeliveryBanner/FoodDeliveryBanner";
import FoodIndustrySection from "@/components/FoodIndustrySolutionSection/FoodIndustrySection";
import FoodTechnologySuiteSection from "@/components/FoodTechnologySuiteSection/FoodTechnologySuiteSection";
import FoodDeliveryFeaturesSection from "@/components/FoodDeliveryFeaturesSection/FoodDeliveryFeaturesSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import MarqueeSliderSection from "@/components/MarqueeSliderSection/MarqueeSliderSection";

export default function FoodDeliveryPage() {
  return (
    <>
      <FoodDeliveryBanner />
      <FoodIndustrySection />
      <FoodTechnologySuiteSection />
      <FoodDeliveryFeaturesSection />
      <MarqueeSliderSection/>
      <CTASection/>
      <OurPortfolioSection/>
      <PricingSection/>
      <TestimonialSection/>
      <BlogSection/>
    </>
  );
}
