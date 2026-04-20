/**
 * Ecommerce /ecommerce-app-development split blocks — shared copy + image paths.
 */

export const ECOMMERCE_WEBSITE_MOBILE_PLATFORM = {
  eyebrow: "Website & mobile app",
  headlineBefore: "Build Your Own ",
  headlineHighlight: "E-Commerce",
  headlineAfter: " Platform— Not A Generic Template",
  body:
    "Own the full customer journey with responsive web, mobile apps, and admin tools built around your business.",
  bullets: [
    "Composable UI blocks for products, offers, and customer journeys",
    "Easy-to-manage content and promotions for your marketing team",
    "Orders, payments, and customer accounts built in from day one",
  ],
  cta: "Start Your E-commerce App",
  image: "/assets/images-webp/marketing/2.webp",
  imageAlt:
    "Verno e-commerce app on two phones with shop, checkout, and revenue insights",
};

/** Same layout as `ECOMMERCE_WEBSITE_MOBILE_PLATFORM` — edit copy/image for the second split row. */
export const ECOMMERCE_SPLIT_HERO_SECOND = {
  eyebrow: "Scale & integrations",
  headlineBefore: "Grow Faster With ",
  headlineHighlight: "Unified Commerce",
  headlineAfter: " Across Every Channel",
  body:
    "Connect storefronts, marketplaces, and fulfillment so your team ships features—not spreadsheets.",
  bullets: [
    "Headless-ready architecture when you outgrow vanilla templates",
    "Payments, tax, and shipping hooks built for real-world edge cases",
    "Analytics and cohort views your leadership team actually uses",
  ],
  cta: "Plan Your Build",
  image: "/assets/images-webp/marketing/1.webp",
  imageAlt:
    "Merchant on laptop with floating new-order cards, reviews, and delivery feature chips",
  /** Renders a wider image column in `EcommerceAppDevelopmentSplitHero` */
  imageScale: "large",
  /** Shown stacked on the image (desktop); optional UI in split hero */
  floatingBadges: [
    { label: "Fast Delivery", icon: "bolt" },
    { label: "Order Tracking", icon: "pin" },
    { label: "Pickup & Shipping", icon: "truck" },
  ],
};

export const ECOMMERCE_STORE_SETUP_BLOCK = {
  eyebrow: "Free Setup",
  headlineLine1: "Let Us Handle ",
  headlineLine2: "Your Store Setup",
  body:
    "From setup to launch, we take care of everything so you can focus on growing your store and driving sales.",
  cta: "Get Your Store Built",
  image: "/assets/images-webp/marketing/3.webp",
};

/** Bottom green `CTASection` — /ecommerce-app-development */
export const ECOMMERCE_APP_DEVELOPMENT_CTA_BAND = {
  title: "Starting A New Project? Let's Talk",
  lead:
    "Ready to launch your e-commerce app? Contact us today for a free consultation and project estimate. We'll help you build a solution designed around your business goals.",
  ctaLabel: "Start Your E-commerce App",
  leftBrandName: "App Premier",
  leftBrandTag: "Services",
  leftChecks: ["E-commerce Solutions", "Custom Store Apps", "Order Management"],
  rightChecks: ["iOS and Android", "React Native", "Flutter"],
};

/** @deprecated use ECOMMERCE_WEBSITE_MOBILE_PLATFORM + ECOMMERCE_STORE_SETUP_BLOCK */
export const ECOMMERCE_APP_DEVELOPMENT_COMBINED_SPLITS = {
  rowPlatform: ECOMMERCE_WEBSITE_MOBILE_PLATFORM,
  rowSetup: ECOMMERCE_STORE_SETUP_BLOCK,
};
