import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import ContactFooterSection from "@/components/ContactFooterSection/ContactFooterSection";
import "./globals.css";
import "@/styles/style.css";

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
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="font-sans">
        <Header />
        {children}
        <ContactFooterSection />
      </body>
    </html>
  );
}
