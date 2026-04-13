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
  showcase1: "/assets/images-webp/our-portfolio/food-delivery/1.png",
  showcase2: "/assets/images-webp/our-portfolio/food-delivery/2.png",
  showcase3: "/assets/images-webp/our-portfolio/food-delivery/3.png",
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
    eyebrow: "Launch support",
    headline: {
      before: "We help you ",
      highlight: "ship",
      after: "—not just hand off code",
    },
    body:
      "Our team aligns on data models, integrations, and store listings so you are not stuck translating tech to operations alone.",
    bullets: [],
    cta: "Book onboarding call",
    image: IMG.setup,
    imageLeft: true,
    compact: true,
  },
];

export const FOOD_DELIVERY_V1_SHOWCASE = {
  eyebrow: "Our work",
  headline: {
    before: "Restaurant ",
    highlight: "experiences",
    after: " we’ve shipped",
  },
  subtitle: "Websites and apps your guests recognize—optimized for speed and conversion.",
  cards: [
    { title: "Multi-location ordering", image: IMG.showcase1 },
    { title: "Rider & kitchen sync", image: IMG.showcase2 },
    { title: "Branded guest checkout", image: IMG.showcase3 },
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
