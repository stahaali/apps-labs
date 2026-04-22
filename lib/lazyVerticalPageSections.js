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

/** /fitness-app-development */
export const FitnessAppDevelopmentOperationsSection = dyn(() =>
  import("@/components/FitnessAppDevelopment/FitnessAppDevelopmentOperationsSection")
);
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
