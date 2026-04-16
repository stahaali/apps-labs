import LogisticsTransportationFulfillmentSection from "@/components/LogisticsTransportation/LogisticsTransportationFulfillmentSection";
import LogisticsTransportationIntegrationsSection from "@/components/LogisticsTransportation/LogisticsTransportationIntegrationsSection";
import LogisticsTransportationMarketingSection from "@/components/LogisticsTransportation/LogisticsTransportationMarketingSection";
import LogisticsTransportationOperationsSection from "@/components/LogisticsTransportation/LogisticsTransportationOperationsSection";
import LogisticsTransportationOutcomesSection from "@/components/LogisticsTransportation/LogisticsTransportationOutcomesSection";
import LogisticsTransportationPlatformSection from "@/components/LogisticsTransportation/LogisticsTransportationPlatformSection";
import LogisticsTransportationSetupSection from "@/components/LogisticsTransportation/LogisticsTransportationSetupSection";
import LogisticsTransportationFaqSection from "@/components/LogisticsTransportation/LogisticsTransportationFaqSection";
import LogisticsTransportationBanner from "@/components/LogisticsTransportationBanner/LogisticsTransportationBanner";
import LogisticsTransportationTechnologySuiteSection from "@/components/LogisticsTransportationTechnologySuiteSection/LogisticsTransportationTechnologySuiteSection";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import LogisticsTransportationFeaturesSection from "@/components/LogisticsTransportationFeaturesSection/LogisticsTransportationFeaturesSection";

import styles from "./page.module.css";

export const metadata = {
  title: "Logistics & Transportation App Development | Apex Labs",
  description:
    "Custom logistics and transportation software—dispatch, fleet visibility, route optimization, and shipper experiences built to scale.",
};

export default function LogisticsTransportationPage() {
  return (
    <>
      <LogisticsTransportationBanner />
      <div className={styles.pageSectionStack}>
        <LogisticsTransportationOperationsSection />
        <LogisticsTransportationPlatformSection />
        <LogisticsTransportationSetupSection />
        <LogisticsTransportationFeaturesSection />
        <LogisticsTransportationTechnologySuiteSection />
        <LogisticsTransportationFulfillmentSection />
        <LogisticsTransportationMarketingSection />
        <LogisticsTransportationIntegrationsSection />
        <LogisticsTransportationOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          logisticsPageMobileFlushTop
        />
        <LogisticsTransportationFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 />
      </div>
    </>
  );
}
