import FitnessBanner from "@/components/FitnessBanner/FitnessBanner";
import FitnessFeaturesSection from "@/components/FitnessFeaturesSection/FitnessFeaturesSection";
import FitnessIndustrySection from "@/components/FitnessIndustrySection/FitnessIndustrySection";
import FitnessTechBoostSection from "@/components/FitnessTechBoostSection/FitnessTechBoostSection";
import FitnessTechnologySuiteSection from "@/components/FitnessTechnologySuiteSection/FitnessTechnologySuiteSection";
import {
  BlogSection,
  CTASection,
  FitnessTechStackSection,
  MarqueeSliderSection,
  OurPortfolioSection,
  PricingSection,
  TestimonialSection,
} from "@/lib/lazySections";

const FITNESS_PORTFOLIO_SLIDES = [
  "/assets/images-webp/our-portfolio/fitness/1.png",
  "/assets/images-webp/our-portfolio/fitness/2.png",
  "/assets/images-webp/our-portfolio/fitness/3.png",
  "/assets/images-webp/our-portfolio/fitness/4.png",
  "/assets/images-webp/our-portfolio/fitness/5.png",
];

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
      <OurPortfolioSection
        noTopPadding
        portfolioImageSrcs={FITNESS_PORTFOLIO_SLIDES}
      />
      <FitnessTechStackSection />
      <PricingSection sectionPadding84 />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
