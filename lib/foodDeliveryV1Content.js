/**
 * Section copy for /food-delivery/v1 — flow inspired by UpMenu’s ordering page,
 * written for Apex Labs as the product builder (not a competing SaaS).
 */

const IMG = {
  hero: "/assets/images-webp/banners/1.png",
  ops: "/assets/images-webp/industry/industry-7.png",
  platform: "/assets/images-webp/industry/industry-8.png",
  setup: "/assets/images-webp/industry/industry-9.png",
  fulfillment: "/assets/images-webp/technology/food-delivery.webp",
  marketing: "/assets/images-webp/industry/industry-8.png",
};

export const FOOD_DELIVERY_V1_HERO = {
  line1: "Online food ordering",
  line2: "for restaurants",
  lead:
    "From kitchen to customers in minutes. We design and build branded websites and mobile apps so you sell direct—without losing margin to marketplaces.",
  bullets: [
    "Transparent milestones & fixed-scope options",
    "iOS, Android, and web from one product team",
    "Integrations for payments, POS, and delivery partners",
  ],
};

export const FOOD_DELIVERY_V1_STATS = [
  { value: "135%", label: "Avg. uplift goal", detail: "when replacing PDF menus with live ordering" },
  { value: "90%", label: "Less third-party fees", detail: "when shifting volume to owned channels" },
  { value: "40+", label: "UI patterns", detail: "menus, modifiers, zones, and checkout flows" },
  { value: "24/7", label: "Handoff docs", detail: "so your team can operate after launch" },
];

export const FOOD_DELIVERY_V1_SECTIONS = [
  {
    id: "operations",
    eyebrow: "Online ordering",
    headline: {
      before: "Take restaurant ",
      highlight: "operations",
      after: " into one product surface",
    },
    body:
      "Apex Labs builds the full stack your staff actually uses: menus, orders, kitchen views, and delivery status—so nothing lives in scattered spreadsheets.",
    bullets: [
      "Save on aggregator commissions by owning checkout",
      "Sell direct to guests with your brand front and center",
      "Manage menu, orders, and fulfillment from one admin",
    ],
    cta: "Plan my build",
    image: IMG.ops,
    imageLeft: true,
  },
  {
    id: "platform",
    eyebrow: "Website & mobile app",
    headline: {
      before: "Build your own ",
      highlight: "ordering platform",
      after: "—not a generic template",
    },
    body:
      "Own the experience end to end: responsive web, native-feeling apps, and admin tools tuned to your service model.",
    bullets: [
      "Composable UI blocks for menus, promos, and loyalty hooks",
      "Drag-and-drop friendly content areas for your marketing team",
      "Ordering, accounts, and notifications wired in from day one",
    ],
    cta: "See capabilities",
    image: IMG.platform,
    imageLeft: false,
  },
  {
    id: "setup",
    eyebrow: "Free Setup",
    headline: {
      before: "Let us do",
      highlight: "the heavy lifting",
    },
    body:
      "We get it—you just want to sell food. At UpMenu, we offer you a complete free system setup as a welcome gift. ",
    bullets: [],
    cta: "Book onboarding call",
    image: IMG.setup,
    imageLeft: true,
    compact: true,
  },
];

/** Center-mode Swiper on /food-delivery/v1 (after “Free setup”). */
export const FOOD_DELIVERY_V1_GALLERY_SLIDER = {
  eyebrow: "Product views",
  headline: {
    before: "Ordering ",
    highlight: "experiences",
    after: " guests recognize",
  },
  subtitle: "Swipe through interface patterns we ship—menus, carts, and fulfillment in one flow.",
  slides: [
    { src: "/assets/images-webp/food-business/01.png", alt: "Restaurant ordering app — hero menu" },
    { src: "/assets/images-webp/food-business/2.png", alt: "Restaurant ordering app — categories" },
    { src: "/assets/images-webp/food-business/3.png", alt: "Restaurant ordering app — product detail" },
    { src: "/assets/images-webp/food-business/4.png", alt: "Restaurant ordering app — listings" },
    { src: "/assets/images-webp/food-business/5.png", alt: "Restaurant ordering app — menu" },
    { src: "/assets/images-webp/food-business/6.png", alt: "Restaurant ordering app — browse" },
    { src: "/assets/images-webp/food-business/7.png", alt: "Restaurant ordering app — dish view" },
    { src: "/assets/images-webp/food-business/8.png", alt: "Restaurant ordering app — checkout" },
  ],
};

export const FOOD_DELIVERY_V1_FULFILLMENT = {
  eyebrow: "Fulfillment",
  headline: {
    before: "Cater to how guests want to ",
    highlight: "order from you",
    after: "",
  },
  body:
    "Pickup, curbside, dine-in pre-order, and delivery zones—with pricing rules that match how you run service.",
  bullets: [
    "Offer pickup, curbside, dine-in, and delivery in one flow",
    "Reduce surprise fees with direct delivery and clear ETAs",
    "Coordinate your fleet, third parties, or a hybrid model",
  ],
  cta: "Discuss logistics",
  image: IMG.fulfillment,
  imageLeft: false,
};

export const FOOD_DELIVERY_V1_MARKETING = {
  eyebrow: "Growth",
  headline: {
    before: "Drive repeat orders with ",
    highlight: "smart upsell & loyalty",
    after: " hooks",
  },
  body:
    "We implement the funnels you need: targeted add-ons, streak rewards, and event-based pushes—without bolting on five tools.",
  bullets: [
    "Suggest add-ons from order history and cart context",
    "Loyalty milestones that feel fair to guests and ops",
    "Campaign triggers for slow nights, new menus, and holidays",
  ],
  cta: "Talk marketing features",
  image: IMG.marketing,
  imageLeft: true,
};

export const FOOD_DELIVERY_V1_INTEGRATIONS = {
  headline: {
    before: "Connect ",
    highlight: "POS, payments, delivery,",
    after: " and analytics",
  },
  subtitle:
    "We integrate the services you already rely on—Stripe, Apple Pay, Google Pay, maps, webhooks, and popular POS APIs.",
};

export const FOOD_DELIVERY_V1_OUTCOMES_HEADLINE = {
  before: "What teams target with ",
  highlight: "direct ordering",
  after: "",
};

/** Six checkmark cards + phone carousel (same copy as main food delivery Features block). */
export const FOOD_DELIVERY_V1_EXCITING_FEATURES = {
  eyebrow: "Features",
  headline: {
    before: "That's Not All! Check Out Our Several ",
    highlight: "Exciting Features!",
    after: "",
  },
  lead:
    "Explore additional incredible features that will elevate your experience to the next level as we develop a delivery app beyond your expectations. You won't believe what we have in store for you!",
  phoneFrame: "/assets/images-webp/food-business/mobile-image.png",
  phoneScreens: [
    "/assets/images-webp/food-business/5.png",
    "/assets/images-webp/food-business/6.png",
    "/assets/images-webp/food-business/7.png",
    "/assets/images-webp/food-business/8.png",
  ],
  items: [
    {
      title: "Own Your Source Code",
      description:
        "Complete source code for your application—full ownership and freedom to extend, customize, or migrate on your terms.",
    },
    {
      title: "Endless Integrations",
      description:
        "We deliver limitless integrations so your platform connects smoothly with payments, logistics, CRM, and the tools you already rely on.",
    },
    {
      title: "Exceptional UI/UX",
      description:
        "Exceptional UI/UX that keeps customers engaged, reduces friction, and reinforces trust in your food delivery brand.",
    },
    {
      title: "Dedicated Support",
      description:
        "Dedicated expert support with clear guidance through launch, updates, and scaling whenever your traffic grows.",
    },
    {
      title: "100% Customized Solution",
      description:
        "100% customized solutions aligned with your menu logic, branding, regions, and day-to-day operational workflows.",
    },
    {
      title: "Highly Robust & Scalable Solution",
      description:
        "Highly robust, scalable solutions engineered for reliability during peak orders and sustained long-term growth.",
    },
  ],
};

/** Hub layout: phone center + 8 feature cards + connector lines (food delivery tech suite). */
export const FOOD_DELIVERY_V1_TECH_SUITE = {
  eyebrow: "Technology",
  headline: {
    before: "Advanced Technology Suite Boosts ",
    highlight: "Food Business Success",
    after: "",
  },
  lead:
    "We elevate your food business with a comprehensive tech suite—cutting-edge food delivery application development that fuels expansion and day-to-day operational success.",
  phoneFrame: "/assets/images-webp/food-business/mobile-image.png",
  phoneScreens: [
    "/assets/images-webp/food-business/01.png",
    "/assets/images-webp/food-business/2.png",
    "/assets/images-webp/food-business/3.png",
    "/assets/images-webp/food-business/4.png",
  ],
  left: [
    {
      title: "User-Friendly",
      description:
        "Enjoyable customer experiences with a clear interface and intuitive flows from browse to reorder.",
    },
    {
      title: "Order Booking",
      description:
        "A seamless order booking path—quick, reliable, and easy for guests on web and mobile.",
    },
    {
      title: "Search Filters",
      description:
        "Help diners find exactly what they want with powerful search, filters, and smart category browsing.",
    },
    {
      title: "Payment Options",
      description:
        "Support the payment methods your guests expect—cards, wallets, and more—without a clunky checkout.",
    },
  ],
  right: [
    {
      title: "Loyalty Programs",
      description:
        "Reward repeat visits with points, tiers, and campaigns that keep your brand top of mind.",
    },
    {
      title: "Driver Tracking",
      description:
        "Real-time driver tracking and status updates so deliveries stay predictable for guests and ops.",
    },
    {
      title: "Review & Rating",
      description:
        "Let guests share feedback and ratings to build trust and improve menus and service over time.",
    },
    {
      title: "Push Notifications",
      description:
        "Timely, relevant push notifications for promos, order updates, and re-engagement—without spam.",
    },
  ],
};

/** Full-width client cards (layout inspired by UpMenu “Our happy clients” — Apex Labs copy). */
export const FOOD_DELIVERY_V1_HAPPY_CLIENTS = {
  eyebrow: "Our happy clients",
  headline: {
    before: "Why restaurateurs choose ",
    highlight: "Apex Labs",
    after: "",
  },
  cards: [
    {
      image: "/assets/images-webp/ourrcustomers/Website-example-01.webp",
      stat: "$1.2M+ kept in-house by shifting volume to owned ordering",
      venue: "Harbor Street Food Hall",
    },
    {
      image: "/assets/images-webp/ourrcustomers/Website-example-02.webp",
      stat: "€95K+ first-year revenue from branded iOS & Android apps",
      venue: "Yami Kitchen Group",
    },
    {
      image: "/assets/images-webp/ourrcustomers/Website-example-05.webp",
      stat: "$780K+ through web & app—one stack, no extra tablets",
      venue: "Dedicate Healthy Kitchen",
    },
    {
      image: "/assets/images-webp/ourrcustomers/Website-example-07.webp",
      stat: "$28K+ in 3 weeks from 1,100+ direct online orders",
      venue: "Mulberry's Market",
    },
  ],
};

export const FOOD_DELIVERY_V1_FAQ_HEADLINE = {
  before: "Restaurant online ordering — ",
  highlight: "answered",
  after: "",
};

export const FOOD_DELIVERY_V1_QUOTES = [
  {
    quote:
      "Direct ordering cut our aggregator bill and gave us data we never had from marketplaces.",
    name: "Jordan Ellis",
    role: "COO, Urban Bowl Co.",
  },
  {
    quote:
      "Guests finally get one app for loyalty, reorder, and delivery—we own the relationship.",
    name: "Priya Nandakumar",
    role: "Founder, Spice Route Kitchen",
  },
  {
    quote:
      "Kitchen display + rider app shipped together. Launch weekend was boring—in the best way.",
    name: "Marcus Reid",
    role: "Ops Director, Northside Deli Group",
  },
  {
    quote:
      "They translated our paper menu into modifiers and combos without losing our brand voice.",
    name: "Elena Voss",
    role: "Owner, Voss Patisserie",
  },
];

export const FOOD_DELIVERY_V1_FEATURED = {
  quote:
    "Apex Labs replaced three disconnected tools with one ordering stack. Online revenue is up and our team spends less time on tablets.",
  name: "Samira Okonkwo",
  role: "Head of Digital, Harbor Street Food Hall",
};
