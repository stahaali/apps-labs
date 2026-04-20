import HeroBanner from "@/components/HeroBanner";
import {
  BlogSection,
  ClientLogosSection,
  CTASection,
  IndustrySolutionsSection,
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
  "/assets/images-webp/our-portfolio/home/1.webp",
  "/assets/images-webp/our-portfolio/home/2.webp",
  "/assets/images-webp/our-portfolio/home/3.webp",
  "/assets/images-webp/our-portfolio/home/4.webp",
  "/assets/images-webp/our-portfolio/home/5.webp",
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
      <PricingSection homeMobileOuterTop40 />
      <HomeClientTestimonial />
      <BlogSection />
    </>
  );
}
