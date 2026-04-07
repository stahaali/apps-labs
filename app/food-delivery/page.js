import dynamic from "next/dynamic";
import BlogSection from "@/components/BlogSection/BlogSection";
import CTASection from "@/components/CTASection/CTASection";
import FoodDeliveryBanner from "@/components/FoodDeliveryBanner/FoodDeliveryBanner";
import FoodIndustrySection from "@/components/FoodIndustrySolutionSection/FoodIndustrySection";
import FoodDeliveryTechBoostSection from "@/components/FoodDeliveryTechBoostSection/FoodDeliveryTechBoostSection";
import FoodTechnologySuiteSection from "@/components/FoodTechnologySuiteSection/FoodTechnologySuiteSection";
import FoodDeliveryFeaturesSection from "@/components/FoodDeliveryFeaturesSection/FoodDeliveryFeaturesSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import {
  HomeClientMarquee,
  HomeClientTestimonial,
} from "@/components/HomeClientSections";

const TechStackSection = dynamic(
  () => import("@/components/TechStackSection/TechStackSection"),
  { loading: () => null }
);

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
      <OurPortfolioSection />
      <TechStackSection />
      <PricingSection />
      <HomeClientTestimonial />
      <BlogSection/>
    </>
  );
}
