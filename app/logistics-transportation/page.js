import LogisticsTransportationBanner from "@/components/LogisticsTransportationBanner/LogisticsTransportationBanner";
import {
  LogisticsTransportationFaqSection,
  LogisticsTransportationFeaturesSection,
  LogisticsTransportationFulfillmentSection,
  LogisticsTransportationIntegrationsSection,
  LogisticsTransportationMarketingSection,
  LogisticsTransportationOperationsSection,
  LogisticsTransportationOutcomesSection,
  LogisticsTransportationPlatformSection,
  LogisticsTransportationSetupSection,
  LogisticsTransportationTechnologySuiteSection,
} from "@/lib/lazyLogisticsPageSections";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import { LOGISTICS_TRANSPORTATION_CTA_BAND } from "@/lib/logisticsTransportationSetup";

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
        <CTASection sectionPadding80 {...LOGISTICS_TRANSPORTATION_CTA_BAND} />
      </div>
    </>
  );
}
