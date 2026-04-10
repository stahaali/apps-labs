import HeroBanner from "@/components/HeroBanner";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection/IndustrySolutionsSection";
import {
  BlogSection,
  ClientLogosSection,
  CTASection,
  OurPortfolioSection,
  PricingSection,
  ReadyToTransformSection,
  ScalableProcessSection,
} from "@/lib/lazySections";
import {
  HomeClientMarquee,
  HomeClientTestimonial,
} from "@/components/HomeClientSections";

const HOME_PORTFOLIO_SLIDES = [
  "/assets/images-webp/our-portfolio/home/1.png",
  "/assets/images-webp/our-portfolio/home/2.png",
  "/assets/images-webp/our-portfolio/home/3.png",
  "/assets/images-webp/our-portfolio/home/4.png",
  "/assets/images-webp/our-portfolio/home/5.png",
];

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IndustrySolutionsSection />
      <ReadyToTransformSection />
      <OurPortfolioSection portfolioImageSrcs={HOME_PORTFOLIO_SLIDES} />
      <ScalableProcessSection />
      <HomeClientMarquee />
      <CTASection />
      <ClientLogosSection />
      <PricingSection />
      <HomeClientTestimonial />
      <BlogSection />
    </>
  );
}
