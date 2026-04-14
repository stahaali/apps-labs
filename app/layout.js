import dynamic from "next/dynamic";
import { Manrope } from "next/font/google";
import BackToTop from "@/components/BackToTop/BackToTop";
import ConsultationEdgeTab from "@/components/ConsultationEdgeTab/ConsultationEdgeTab";
import Header from "@/components/Header";
import { LeadFormModalProvider } from "@/components/LeadFormModal/LeadFormModalProvider";
import "./globals.css";
import "@/styles/style.css";

const ContactFooterSection = dynamic(
  () => import("@/components/ContactFooterSection/ContactFooterSection"),
  { loading: () => <div className="min-h-[100px] bg-[#050505]" aria-hidden /> }
);

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Apex Labs",
  description: "Apex Labs — We build apps that dominate markets",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Apex Labs",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="font-sans">
        <LeadFormModalProvider>
          <Header />
          {children}
          <ContactFooterSection />
          <ConsultationEdgeTab />
          <BackToTop />
        </LeadFormModalProvider>
      </body>
    </html>
  );
}
