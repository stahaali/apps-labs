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

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IndustrySolutionsSection />
      <ReadyToTransformSection />
      <OurPortfolioSection />
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
