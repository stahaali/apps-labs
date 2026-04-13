import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { CLASSIFIED_PLATFORM_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = CLASSIFIED_PLATFORM_CONTENT.metadata;

export default function ClassifiedPlatformPage() {
  return <VerticalServicePage content={CLASSIFIED_PLATFORM_CONTENT} />;
}
