import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CTASection from "@/components/CTASection/CTASection";
import ClientLogosSection from "@/components/ClientLogosSection/ClientLogosSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection/IndustrySolutionsSection";
import OurPortfolioSection from "@/components/OurPortfolioSection/OurPortfolioSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import ReadyToTransformSection from "@/components/ReadyToTransformSection/ReadyToTransformSection";
import ScalableProcessSection from "@/components/ScalableProcessSection/ScalableProcessSection";
import BlogSection from "@/components/BlogSection/BlogSection";
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
