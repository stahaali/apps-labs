import dynamic from "next/dynamic";

const emptyLoading = () => null;

const dyn = (loader) => dynamic(loader, { loading: emptyLoading });

/** /auction-app — isolated from `lazyVerticalPageSections` so this route compiles a smaller graph. */
export const AuctionAppDevelopmentOperationsSection = dyn(() =>
  import("@/components/AuctionAppDevelopment/AuctionAppDevelopmentOperationsSection")
);
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
