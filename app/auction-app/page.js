import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { AUCTION_APP_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = AUCTION_APP_CONTENT.metadata;

export default function AuctionAppPage() {
  return <VerticalServicePage content={AUCTION_APP_CONTENT} />;
}
