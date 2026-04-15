import dynamic from "next/dynamic";

const emptyLoading = () => null;

/** Below-the-fold / heavy sections — split JS so first paint stays lean. */
export const BlogSection = dynamic(
  () => import("@/components/BlogSection/BlogSection"),
  { loading: emptyLoading }
);

export const PricingSection = dynamic(
  () => import("@/components/PricingSection/PricingSection"),
  { loading: emptyLoading }
);

export const OurPortfolioSection = dynamic(
  () => import("@/components/OurPortfolioSection/OurPortfolioSection"),
  { loading: emptyLoading }
);

export const CTASection = dynamic(
  () => import("@/components/CTASection/CTASection"),
  { loading: emptyLoading }
);

export const ClientLogosSection = dynamic(
  () => import("@/components/ClientLogosSection/ClientLogosSection"),
  { loading: emptyLoading }
);

export const ScalableProcessSection = dynamic(
  () => import("@/components/ScalableProcessSection/ScalableProcessSection"),
  { loading: emptyLoading }
);

export const ReadyToTransformSection = dynamic(
  () => import("@/components/ReadyToTransformSection/ReadyToTransformSection"),
  { loading: emptyLoading }
);

export const IndustrySolutionsSection = dynamic(
  () => import("@/components/IndustrySolutionsSection/IndustrySolutionsSection"),
  { loading: emptyLoading }
);

export const MarqueeSliderSection = dynamic(
  () => import("@/components/MarqueeSliderSection/MarqueeSliderSection"),
  { loading: emptyLoading }
);

export const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection/TestimonialSection"),
  { loading: emptyLoading }
);

export const TechStackSection = dynamic(
  () => import("@/components/TechStackSection/TechStackSection"),
  { loading: emptyLoading }
);

export const EcommerceTechStackSection = dynamic(
  () => import("@/components/EcommerceTechStackSection/EcommerceTechStackSection"),
  { loading: emptyLoading }
);

export const FitnessTechStackSection = dynamic(
  () => import("@/components/FitnessTechStackSection/FitnessTechStackSection"),
  { loading: emptyLoading }
);
