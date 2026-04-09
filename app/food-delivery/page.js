import FoodDeliveryBanner from "@/components/FoodDeliveryBanner/FoodDeliveryBanner";
import FoodIndustrySection from "@/components/FoodIndustrySolutionSection/FoodIndustrySection";
import FoodDeliveryTechBoostSection from "@/components/FoodDeliveryTechBoostSection/FoodDeliveryTechBoostSection";
import FoodTechnologySuiteSection from "@/components/FoodTechnologySuiteSection/FoodTechnologySuiteSection";
import FoodDeliveryFeaturesSection from "@/components/FoodDeliveryFeaturesSection/FoodDeliveryFeaturesSection";
import {
  BlogSection,
  CTASection,
  OurPortfolioSection,
  PricingSection,
  TechStackSection,
} from "@/lib/lazySections";
import {
  HomeClientMarquee,
  HomeClientTestimonial,
} from "@/components/HomeClientSections";

export default function FoodDeliveryPage() {
  return (
    <>
      <FoodDeliveryBanner />
      <FoodIndustrySection />
      <FoodTechnologySuiteSection />
      <FoodDeliveryTechBoostSection />
      <FoodDeliveryFeaturesSection />
      <HomeClientMarquee />
      <CTASection />
      <OurPortfolioSection noTopPadding />
      <TechStackSection />
      <PricingSection noTopPadding />
      <HomeClientTestimonial />
      <BlogSection />
    </>
  );
}
