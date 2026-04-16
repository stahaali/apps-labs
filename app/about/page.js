import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutMissionSection from "@/components/AboutMissionSection/AboutMissionSection";
import {
  BlogSection,
  CTASection,
  MarqueeSliderSection,
  OurPortfolioSection,
  PricingSection,
  TechStackSection,
  TestimonialSection,
} from "@/lib/lazySections";

const HOME_PORTFOLIO_SLIDES = [
  "/assets/images-webp/our-portfolio/home/1.png",
  "/assets/images-webp/our-portfolio/home/2.png",
  "/assets/images-webp/our-portfolio/home/3.png",
  "/assets/images-webp/our-portfolio/home/4.png",
  "/assets/images-webp/our-portfolio/home/5.png",
];

export const metadata = {
  title: "About Us | Apex Labs",
  description:
    "Meet Apex Labs—mobile product design and engineering for founders and enterprises. Strategy, craft, and launch support in one partner.",
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutMissionSection />
      <CTASection />
      <OurPortfolioSection
        noTopPadding
        portfolioImageSrcs={HOME_PORTFOLIO_SLIDES}
      />
      <TechStackSection />
      <PricingSection noTopPadding />
      <TestimonialSection aboutPageTabletPadding80 />
      <BlogSection />
    </>
  );
}
