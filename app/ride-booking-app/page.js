import VerticalServicePage from "@/components/VerticalServicePage/VerticalServicePage";
import { RIDE_BOOKING_APP_CONTENT } from "@/lib/verticalServicePageContent";

export const metadata = RIDE_BOOKING_APP_CONTENT.metadata;

export default function RideBookingAppPage() {
  return <VerticalServicePage content={RIDE_BOOKING_APP_CONTENT} />;
}
