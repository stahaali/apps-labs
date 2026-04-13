import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { CHAUFFEUR_SERVICE_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = CHAUFFEUR_SERVICE_CONTENT.metadata;

export default function ChauffeurServiceBookingPage() {
  return <VerticalServicePage content={CHAUFFEUR_SERVICE_CONTENT} />;
}
