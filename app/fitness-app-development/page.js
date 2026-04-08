import BlogSection from "@/components/BlogSection/BlogSection";
import CTASection from "@/components/CTASection/CTASection";
import FitnessBanner from "@/components/FitnessBanner/FitnessBanner";
import FitnessFeaturesSection from "@/components/FitnessFeaturesSection/FitnessFeaturesSection";
import FitnessIndustrySection from "@/components/FitnessIndustrySection/FitnessIndustrySection";
import FitnessTechBoostSection from "@/components/FitnessTechBoostSection/FitnessTechBoostSection";
import FitnessTechStackSection from "@/components/FitnessTechStackSection/FitnessTechStackSection";
import FitnessTechnologySuiteSection from "@/components/FitnessTechnologySuiteSection/FitnessTechnologySuiteSection";
import MarqueeSliderSection from "@/components/MarqueeSliderSection/MarqueeSliderSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";

export const metadata = {
  title: "Fitness App Development | Apex Labs",
  description:
    "Custom fitness and wellness app development—training, nutrition, wearables, and member engagement built to scale.",
};

export default function FitnessAppDevelopmentPage() {
  return (
    <>
      <FitnessBanner />
      <FitnessIndustrySection />
      <FitnessTechnologySuiteSection />
      <FitnessTechBoostSection />
      <FitnessFeaturesSection />
      <MarqueeSliderSection />
      <CTASection />
      <OurPortfolioSection />
      <FitnessTechStackSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
