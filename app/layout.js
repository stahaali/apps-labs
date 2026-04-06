import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import ContactFooterSection from "@/components/ContactFooterSection/ContactFooterSection";
import "./globals.css";
import "@/styles/style.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Apex Labs",
  description: "Apex Labs — We build apps that dominate markets",
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
