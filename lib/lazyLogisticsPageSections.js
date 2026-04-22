import dynamic from "next/dynamic";

const emptyLoading = () => null;

const dyn = (loader) => dynamic(loader, { loading: emptyLoading });

/** /logistics-transportation — isolated from `lazyVerticalPageSections` for a smaller dev compile graph. */
export const LogisticsTransportationOperationsSection = dyn(() =>
  import("@/components/LogisticsTransportation/LogisticsTransportationOperationsSection")
);
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
