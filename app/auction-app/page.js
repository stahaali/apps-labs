import AuctionAppDevelopmentOperationsSection from "@/components/AuctionAppDevelopment/AuctionAppDevelopmentOperationsSection";
import AuctionBanner from "@/components/AuctionBanner/AuctionBanner";
import {
  AuctionAppDevelopmentFaqSection,
  AuctionAppDevelopmentFulfillmentSection,
  AuctionAppDevelopmentIntegrationsSection,
  AuctionAppDevelopmentMarketingSection,
  AuctionAppDevelopmentOutcomesSection,
  AuctionAppDevelopmentPlatformSection,
  AuctionAppDevelopmentSetupSection,
  AuctionFeaturesSection,
  AuctionTechnologySuiteSection,
} from "@/lib/lazyVerticalPageSections";
import { AUCTION_APP_DEVELOPMENT_CTA_BAND } from "@/lib/auctionAppDevelopmentSetup";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";
import { AUCTION_APP_CONTENT } from "@/lib/verticalServicePageContent";

import styles from "./page.module.css";

export const metadata = AUCTION_APP_CONTENT.metadata;

export default function AuctionAppPage() {
  return (
    <>
      <AuctionBanner />
      <div className={styles.pageSectionStack}>
        <AuctionAppDevelopmentOperationsSection />
        <AuctionAppDevelopmentPlatformSection />
        <AuctionAppDevelopmentSetupSection />
        <AuctionFeaturesSection />
        <AuctionTechnologySuiteSection />
        <AuctionAppDevelopmentFulfillmentSection />
        <AuctionAppDevelopmentMarketingSection />
        <AuctionAppDevelopmentIntegrationsSection />
        <AuctionAppDevelopmentOutcomesSection />
        <TestimonialSection
          sectionPadding80
          sectionPaddingTopZero
          auctionPageMobileFlushTop
        />
        <AuctionAppDevelopmentFaqSection />
        <BlogSection sectionPadding80 />
        <CTASection sectionPadding80 {...AUCTION_APP_DEVELOPMENT_CTA_BAND} />
      </div>
    </>
  );
}
