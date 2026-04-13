import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { LOGISTICS_TRANSPORTATION_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = LOGISTICS_TRANSPORTATION_CONTENT.metadata;

export default function LogisticsTransportationPage() {
  return <VerticalServicePage content={LOGISTICS_TRANSPORTATION_CONTENT} />;
}
