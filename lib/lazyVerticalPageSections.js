import dynamic from "next/dynamic";

const emptyLoading = () => null;

const dyn = (loader) => dynamic(loader, { loading: emptyLoading });

/** /classified-platform — below hero + operations (smaller initial route graph). */
export const ClassifiedPlatformPlatformSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformPlatformSection")
);
export const ClassifiedPlatformSetupSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformSetupSection")
);
export const ClassifiedPlatformFeaturesSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformFeaturesSection")
);
export const ClassifiedPlatformTechnologySuiteSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformTechnologySuiteSection")
);
export const ClassifiedPlatformFulfillmentSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformFulfillmentSection")
);
export const ClassifiedPlatformMarketingSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformMarketingSection")
);
export const ClassifiedPlatformIntegrationsSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformIntegrationsSection")
);
export const ClassifiedPlatformOutcomesSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformOutcomesSection")
);
export const ClassifiedPlatformFaqSection = dyn(() =>
  import("@/components/ClassifiedPlatformPage/ClassifiedPlatformFaqSection")
);

/** /logistics-transportation */
export const LogisticsTransportationPlatformSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationPlatformSection")
);
export const LogisticsTransportationSetupSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationSetupSection")
);
export const LogisticsTransportationFeaturesSection = dyn(() =>
  import("@/components/LogisticsTransportationFeaturesSection/LogisticsTransportationFeaturesSection")
);
export const LogisticsTransportationTechnologySuiteSection = dyn(() =>
  import("@/components/LogisticsTransportationTechnologySuiteSection/LogisticsTransportationTechnologySuiteSection")
);
export const LogisticsTransportationFulfillmentSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationFulfillmentSection")
);
export const LogisticsTransportationMarketingSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationMarketingSection")
);
export const LogisticsTransportationIntegrationsSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationIntegrationsSection")
);
export const LogisticsTransportationOutcomesSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationOutcomesSection")
);
export const LogisticsTransportationFaqSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationFaqSection")
);

/** /fitness-app-development */
export const FitnessAppDevelopmentPlatformSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentPlatformSection")
);
export const FitnessAppDevelopmentSetupSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentSetupSection")
);
export const FitnessFeaturesSection = dyn(() =>
  import("@/components/FitnessFeaturesSection/FitnessFeaturesSection")
);
export const FitnessTechnologySuiteSection = dyn(() =>
  import("@/components/FitnessTechnologySuiteSection/FitnessTechnologySuiteSection")
);
export const FitnessAppDevelopmentFulfillmentSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentFulfillmentSection")
);
export const FitnessAppDevelopmentMarketingSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentMarketingSection")
);
export const FitnessAppDevelopmentIntegrationsSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentIntegrationsSection")
);
export const FitnessAppDevelopmentOutcomesSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentOutcomesSection")
);
export const FitnessAppDevelopmentFaqSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentFaqSection")
);

/** /auction-app */
export const AuctionAppDevelopmentPlatformSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentPlatformSection")
);
export const AuctionAppDevelopmentSetupSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentSetupSection")
);
export const AuctionFeaturesSection = dyn(() =>
  import("@/components/AuctionFeaturesSection/AuctionFeaturesSection")
);
export const AuctionTechnologySuiteSection = dyn(() =>
  import("@/components/AuctionTechnologySuiteSection/AuctionTechnologySuiteSection")
);
export const AuctionAppDevelopmentFulfillmentSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentFulfillmentSection")
);
export const AuctionAppDevelopmentMarketingSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentMarketingSection")
);
export const AuctionAppDevelopmentIntegrationsSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentIntegrationsSection")
);
export const AuctionAppDevelopmentOutcomesSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentOutcomesSection")
);
export const AuctionAppDevelopmentFaqSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentFaqSection")
);
