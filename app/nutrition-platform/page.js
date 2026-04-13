import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { NUTRITION_PLATFORM_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = NUTRITION_PLATFORM_CONTENT.metadata;

export default function NutritionPlatformPage() {
  return <VerticalServicePage content={NUTRITION_PLATFORM_CONTENT} />;
}
