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

const FOOD_PORTFOLIO_SLIDES = [
  "/assets/images-webp/our-portfolio/food-delivery/1.png",
  "/assets/images-webp/our-portfolio/food-delivery/2.png",
  "/assets/images-webp/our-portfolio/food-delivery/3.png",
  "/assets/images-webp/our-portfolio/food-delivery/4.png",
  "/assets/images-webp/our-portfolio/food-delivery/5.png",
];

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
      <OurPortfolioSection noTopPadding portfolioImageSrcs={FOOD_PORTFOLIO_SLIDES} />
      <TechStackSection />
      <PricingSection sectionPadding84 />
      <HomeClientTestimonial />
      <BlogSection />
    </>
  );
}
