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

const ECOMMERCE_PORTFOLIO_SLIDES = [
  "/assets/images-webp/our-portfolio/ecommerce/1.png",
  "/assets/images-webp/our-portfolio/ecommerce/2.png",
  "/assets/images-webp/our-portfolio/ecommerce/3.png",
  "/assets/images-webp/our-portfolio/ecommerce/4.png",
  "/assets/images-webp/our-portfolio/ecommerce/5.png",
];

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
      <OurPortfolioSection portfolioImageSrcs={ECOMMERCE_PORTFOLIO_SLIDES} />
      <EcommerceTechStackSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
