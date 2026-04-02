'use client';

import dynamic from "next/dynamic";

const MarqueeSliderSection = dynamic(
  () => import("@/components/MarqueeSliderSection/MarqueeSliderSection"),
  { loading: () => null }
);

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

