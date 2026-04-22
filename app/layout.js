import dynamic from "next/dynamic";
import { Manrope } from "next/font/google";
import GlobalSmoothScroll from "@/components/GlobalSmoothScroll/GlobalSmoothScroll";
import "./globals.css";
import "@/styles/style.css";

/** Large client nav — split from root layout JS so every route’s first chunk stays smaller. */
const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center"
      aria-busy="true"
      aria-label="Loading navigation"
    >
      <div className="pointer-events-auto flex h-[72px] w-full max-w-none items-center justify-between border-b border-white/10 bg-[#050505]/90 px-4 backdrop-blur-md min-[480px]:px-6 min-[992px]:px-8">
        <div className="h-6 w-28 max-w-[40%] rounded-md bg-white/10" aria-hidden />
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white/10 lg:hidden" aria-hidden />
          <div className="hidden h-9 w-24 rounded-full bg-white/10 lg:block" aria-hidden />
        </div>
      </div>
    </header>
  ),
});

const BackToTop = dynamic(() => import("@/components/BackToTop/BackToTop"), {
  loading: () => null,
});

const ContactFooterSection = dynamic(
  () => import("@/components/ContactFooterSection/ContactFooterSection"),
  { loading: () => <div className="min-h-[100px] bg-[#050505]" aria-hidden /> }
);

/** Large client surface (drawer + validation); split from main layout chunk. */
const LeadFormModalProvider = dynamic(
  () =>
    import("@/components/LeadFormModal/LeadFormModalProvider").then(
      (mod) => mod.LeadFormModalProvider
    ),
  { ssr: true }
);

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: true,
  /** Fewer weights → smaller font payload site-wide. */
  weight: ["400", "500", "600", "700", "800"],
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
          <GlobalSmoothScroll />
          <Header />
          {children}
          <ContactFooterSection />
          <BackToTop />
        </LeadFormModalProvider>
      </body>
    </html>
  );
}
