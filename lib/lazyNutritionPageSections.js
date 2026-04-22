import dynamic from "next/dynamic";

const emptyLoading = () => null;

const dyn = (loader) => dynamic(loader, { loading: emptyLoading });

/** /nutrition-platform — same section graph as /auction-app, isolated lazy bundle. */
export const NutritionAppDevelopmentOperationsSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentOperationsSection")
);
export const NutritionAppDevelopmentPlatformSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentPlatformSection")
);
export const NutritionAppDevelopmentSetupSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentSetupSection")
);
export const NutritionFeaturesSection = dyn(() =>
  import("@/components/NutritionFeaturesSection/NutritionFeaturesSection")
);
export const NutritionTechnologySuiteSection = dyn(() =>
  import("@/components/NutritionTechnologySuiteSection/NutritionTechnologySuiteSection")
);
export const NutritionAppDevelopmentFulfillmentSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentFulfillmentSection")
);
export const NutritionAppDevelopmentMarketingSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentMarketingSection")
);
export const NutritionAppDevelopmentIntegrationsSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentIntegrationsSection")
);
export const NutritionAppDevelopmentOutcomesSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentOutcomesSection")
);
export const NutritionAppDevelopmentFaqSection = dyn(() =>
  import("@/components/NutritionAppDevelopment/NutritionAppDevelopmentFaqSection")
);
