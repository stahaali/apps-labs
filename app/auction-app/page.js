import AuctionBanner from "@/components/AuctionBanner/AuctionBanner";
import {
  AuctionAppDevelopmentFaqSection,
  AuctionAppDevelopmentFulfillmentSection,
  AuctionAppDevelopmentIntegrationsSection,
  AuctionAppDevelopmentMarketingSection,
  AuctionAppDevelopmentOperationsSection,
  AuctionAppDevelopmentOutcomesSection,
  AuctionAppDevelopmentPlatformSection,
  AuctionAppDevelopmentSetupSection,
  AuctionFeaturesSection,
  AuctionTechnologySuiteSection,
} from "@/lib/lazyVerticalPageSections";
import { AUCTION_APP_DEVELOPMENT_CTA_BAND } from "@/lib/auctionAppDevelopmentSetup";
import { BlogSection, CTASection, TestimonialSection } from "@/lib/lazySections";

import styles from "./page.module.css";

/** Inline so this route does not import the full `verticalServicePageContent` barrel (large compile graph). */
export const metadata = {
  title: "Auction App Development | Apex Labs",
  description:
    "Timed auctions, live bidding, seller tooling, and secure checkout—custom auction and marketplace apps tailored to your category.",
};

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
