"use client";

import dynamic from "next/dynamic";
import MarqueeSliderSection from "@/components/MarqueeSliderSection/MarqueeSliderSection";

const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection/TestimonialSection"),
  { loading: () => null }
);

export function HomeClientMarquee() {
  return <MarqueeSliderSection />;
}

export function HomeClientTestimonial() {
  return <TestimonialSection />;
}
