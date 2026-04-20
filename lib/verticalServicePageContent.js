/**
 * Content for Services mega-menu verticals (classified, nutrition, ride, chauffeur, logistics, auction).
 * Heading pattern: one h1 (banner); each band uses h2 + optional h3 on cards.
 */

import { CLASSIFIED_PLATFORM_FAQ } from "./classifiedPlatformFaq";

const THEME = "#70AA26";

export const CLASSIFIED_PLATFORM_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "classified-blog-heading",
  /** Process (“How we ship”) band: flush under capabilities, no extra top padding */
  processSectionNoTopPadding: true,
  metadata: {
    title: "Classified Platform Development | Apex Labs",
    description:
      "Custom classifieds and marketplace apps—listings, search, messaging, payments, and admin tools built for your niche.",
  },
  banner: {
    headingId: "classified-hero-heading",
    accent: "Classified",
    plain: " platform",
    lead: "Launch a trustworthy listings experience: structured categories, seller tools, buyer safety, and revenue levers you can grow—without duct-taping plugins together.",
    features: ["Smart listings & filters", "Chat & offers", "Payments & escrow-ready flows"],
    image: "/assets/images-webp/our-portfolio/ecommerce/1.webp",
    imageAlt: "Classified marketplace app interfaces on phones",
  },
  overview: {
    sectionId: "classified-overview",
    headingId: "classified-overview-heading",
    eyebrow: "Built for operators",
    titleBefore: "Listings that stay ",
    titleAccent: "fast, fair, and on-brand",
    titleAfter: "",
    body: "Whether you are vertical-specific (autos, jobs, real estate) or horizontal C2C, we design information architecture and moderation workflows that scale with volume—not against your support team.",
    bullets: [
      "Search, alerts, and saved searches tuned to how people actually hunt in your category",
      "Seller dashboards: inventory, pricing, promotions, and dispute hooks",
      "Admin consoles for moderation, fraud signals, and policy enforcement",
    ],
    image: "/assets/images-webp/our-portfolio/ecommerce/3.webp",
    imageAlt: "Marketplace product screens and dashboards",
  },
  capabilities: {
    sectionId: "classified-capabilities",
    headingId: "classified-capabilities-heading",
    eyebrow: "Product surface",
    titleBefore: "Everything buyers and sellers ",
    titleAccent: "expect in v1",
    titleAfter: "",
    cards: [
      {
        title: "Discovery & trust",
        body: "Faceted search, maps where it matters, verified badges, reviews, and reporting flows that reduce bad actors early.",
      },
      {
        title: "Transactions",
        body: "Cart or offer-based checkout patterns, service fees, subscriptions for power sellers, and integrations with your PSP of choice.",
      },
      {
        title: "Ops & scale",
        body: "Content pipelines, image handling, notifications, and analytics so you can see funnel health and category performance.",
      },
    ],
  },
  process: {
    sectionId: "classified-process",
    headingId: "classified-process-heading",
    eyebrow: "How we ship",
    titleBefore: "From ",
    titleAccent: "prototype",
    titleAfter: " to production traffic",
    steps: [
      {
        title: "Shape the marketplace",
        body: "Roles, listing types, trust model, and monetization—we document flows before pixels so engineering stays aligned.",
      },
      {
        title: "Design & build",
        body: "Mobile-first apps plus web where you need them; APIs and admin panels that match how your team works.",
      },
      {
        title: "Launch & iterate",
        body: "Store readiness, observability, and a backlog grounded in real usage—not generic feature laundry lists.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/ecommerce/1.webp",
    "/assets/images-webp/our-portfolio/ecommerce/2.webp",
    "/assets/images-webp/our-portfolio/ecommerce/3.webp",
    "/assets/images-webp/our-portfolio/ecommerce/4.webp",
    "/assets/images-webp/our-portfolio/ecommerce/5.webp",
  ],
  faq: {
    headingId: "classified-faq-heading",
    titleBefore: "Classified marketplace ",
    titleAccent: "FAQ",
    titleAfter: "",
    description:
      "Straight answers on trust, payments, search, and why custom beats templates for serious operators.",
    items: CLASSIFIED_PLATFORM_FAQ,
  },
};

export const NUTRITION_PLATFORM_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "nutrition-blog-heading",
  metadata: {
    title: "Nutrition Platform Development | Apex Labs",
    description:
      "Meal planning, macro tracking, coaching, and habit apps—custom nutrition software aligned to your brand and clinical guardrails.",
  },
  banner: {
    headingId: "nutrition-hero-heading",
    accent: "Nutrition",
    plain: " platform",
    lead: "Give clients clarity on what to eat, when, and why—backed by logging, coaching touchpoints, and content that feels personal on every device.",
    features: ["Plans & macros", "Coach workflows", "Habits & adherence"],
    image: "/assets/images-webp/our-portfolio/fitness/1.webp",
    imageAlt: "Nutrition and meal planning app mockups",
  },
  overview: {
    sectionId: "nutrition-overview",
    headingId: "nutrition-overview-heading",
    eyebrow: "Clinical-grade UX",
    titleBefore: "Guidance that feels ",
    titleAccent: "human—not robotic",
    titleAfter: "",
    body: "We build nutrition products for clinics, coaches, and consumer brands: structured meal programs, grocery-aware suggestions, and progress views that respect complexity without overwhelming end users.",
    bullets: [
      "Recipe libraries, substitutions, and portion logic tied to your methodology",
      "Check-ins, messaging, and nudges that coaches can template and personalize",
      "Integrations-friendly architecture for wearables, labs, and EHR-adjacent workflows where applicable",
    ],
    image: "/assets/images-webp/our-portfolio/fitness/3.webp",
    imageAlt: "Nutrition coaching and meal planning UI",
  },
  capabilities: {
    sectionId: "nutrition-capabilities",
    headingId: "nutrition-capabilities-heading",
    eyebrow: "Platform modules",
    titleBefore: "What your ",
    titleAccent: "nutrition OS",
    titleAfter: " can include",
    cards: [
      {
        title: "Programs & content",
        body: "Meal plans, education modules, video or article tracks, and multilingual copy pipelines for global rollouts.",
      },
      {
        title: "Tracking & insights",
        body: "Food logging, barcode support, macro summaries, and dashboards that highlight adherence—not just numbers.",
      },
      {
        title: "Coach & admin",
        body: "Rosters, assignments, notes, and permissioned views so teams scale without losing the personal touch.",
      },
    ],
  },
  process: {
    sectionId: "nutrition-process",
    headingId: "nutrition-process-heading",
    eyebrow: "Engagement model",
    titleBefore: "Designed for ",
    titleAccent: "outcomes",
    titleAfter: ", not feature dumps",
    steps: [
      {
        title: "Nutrition philosophy first",
        body: "We translate your protocol into product rules: constraints, defaults, and edge cases before engineering starts.",
      },
      {
        title: "Experience & accessibility",
        body: "Readable typography, offline-friendly logging, and flows tested with real meal-planning scenarios.",
      },
      {
        title: "Ship & measure",
        body: "Instrumentation for completion rates, coach load, and retention—so you can prove value to partners and payers.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/fitness/1.webp",
    "/assets/images-webp/our-portfolio/fitness/2.webp",
    "/assets/images-webp/our-portfolio/fitness/3.webp",
    "/assets/images-webp/our-portfolio/fitness/4.webp",
    "/assets/images-webp/our-portfolio/fitness/5.webp",
  ],
};

export const RIDE_BOOKING_APP_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "ride-booking-blog-heading",
  metadata: {
    title: "Ride Booking App Development | Apex Labs",
    description:
      "Dispatch, live tracking, driver apps, and rider experiences for ride-hailing, shuttles, and on-demand mobility products.",
  },
  banner: {
    headingId: "ride-hero-heading",
    accent: "Ride booking",
    plain: " apps",
    lead: "Coordinate drivers, riders, and ops in real time: fair matching, transparent ETAs, and payments that work when networks are messy.",
    features: ["Live trip state", "Driver & fleet tools", "Fare & payouts"],
    image: "/assets/images-webp/banners/1.webp",
    imageAlt: "Ride booking and mobility app interfaces",
  },
  overview: {
    sectionId: "ride-overview",
    headingId: "ride-overview-heading",
    eyebrow: "Operations-first",
    titleBefore: "Mobility products that stay ",
    titleAccent: "reliable under load",
    titleAfter: "",
    body: "From urban ride-hail to campus shuttles and niche logistics, we build the rider app, driver app, and dispatcher views you need—with maps, status machines, and support tooling that match your market rules.",
    bullets: [
      "Trip lifecycle: request, assign, en-route, complete—with clear cancellation and no-show handling",
      "Driver onboarding, documents, shifts, and earnings summaries that reduce back-office churn",
      "Surge, zones, and promo levers designed so you can tune supply without redeploying code for every tweak",
    ],
    image: "/assets/images-webp/our-portfolio/food-delivery/2.webp",
    imageAlt: "On-demand ordering and logistics style mobile UI",
  },
  capabilities: {
    sectionId: "ride-capabilities",
    headingId: "ride-capabilities-heading",
    eyebrow: "System map",
    titleBefore: "Rider, driver, ",
    titleAccent: "and control room",
    titleAfter: " in sync",
    cards: [
      {
        title: "Realtime core",
        body: "Location updates, ETA refinement, push notifications, and in-app comms tuned for battery and accuracy tradeoffs.",
      },
      {
        title: "Payments & compliance",
        body: "Wallets, cards, and payout schedules with audit-friendly trip records for finance and regulators where needed.",
      },
      {
        title: "Growth & quality",
        body: "Referrals, loyalty touches, ratings, and incident workflows so you improve service without flying blind.",
      },
    ],
  },
  process: {
    sectionId: "ride-process",
    headingId: "ride-process-heading",
    eyebrow: "Launch path",
    titleBefore: "From ",
    titleAccent: "pilot routes",
    titleAfter: " to multi-city scale",
    steps: [
      {
        title: "Map the trip graph",
        body: "States, edge cases, and integrations (maps, SMS, identity)—documented so squads aren’t guessing in sprint 6.",
      },
      {
        title: "Build the triangle",
        body: "Rider UX, driver UX, and ops dashboards in parallel to avoid lopsided MVPs that stall go-live.",
      },
      {
        title: "Harden & expand",
        body: "Load patterns, fraud checks, and feature flags for gradual market expansion and pricing experiments.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/food-delivery/1.webp",
    "/assets/images-webp/our-portfolio/food-delivery/2.webp",
    "/assets/images-webp/our-portfolio/food-delivery/3.webp",
    "/assets/images-webp/our-portfolio/food-delivery/4.webp",
    "/assets/images-webp/our-portfolio/food-delivery/5.webp",
  ],
};

export const CHAUFFEUR_SERVICE_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "chauffeur-blog-heading",
  metadata: {
    title: "Chauffeur Service Booking App Development | Apex Labs",
    description:
      "Premium chauffeur and black-car booking apps—scheduled rides, fleet dispatch, corporate accounts, and polished passenger experiences.",
  },
  banner: {
    headingId: "chauffeur-hero-heading",
    accent: "Chauffeur",
    plain: " service booking",
    lead: "Deliver the calm, high-trust experience VIP and corporate clients expect: clear vehicle choice, live status, receipts, and dispatcher tools that keep your fleet on time.",
    features: ["Concierge-grade booking", "Fleet & driver ops", "Accounts & billing"],
    image: "/assets/images-webp/our-portfolio/ecommerce/2.webp",
    imageAlt: "Premium booking and service app mockups",
  },
  overview: {
    sectionId: "chauffeur-overview",
    headingId: "chauffeur-overview-heading",
    eyebrow: "Premium segment",
    titleBefore: "Booking flows that feel ",
    titleAccent: "effortless",
    titleAfter: ", not rushed",
    body: "We design for waitlisted airports, multi-stop itineraries, and repeat corporate travelers—without turning your product into a generic ride widget. Branding, tone, and escalation paths stay under your control.",
    bullets: [
      "Advance bookings, ASAP requests, and amendments with clear policy and fee surfacing",
      "Driver apps with job offers, navigation handoff, and proof-of-service where you need it",
      "Corporate portals: cost centers, approvals, and export-friendly ride history",
    ],
    image: "/assets/images-webp/our-portfolio/ecommerce/4.webp",
    imageAlt: "Executive travel and booking interface concepts",
  },
  capabilities: {
    sectionId: "chauffeur-capabilities",
    headingId: "chauffeur-capabilities-heading",
    eyebrow: "Product scope",
    titleBefore: "Passenger, chauffeur, ",
    titleAccent: "and back office",
    titleAfter: "",
    cards: [
      {
        title: "Guest experience",
        body: "Vehicle classes, driver profiles, ETAs, in-trip messaging, and post-trip tipping or ratings tuned to luxury expectations.",
      },
      {
        title: "Dispatch & fleet",
        body: "Assignment rules, shift planning, live map views, and exception handling when flights slip or roads close.",
      },
      {
        title: "Monetization",
        body: "Fixed routes, time-and-distance, surge where appropriate, invoices, and promo codes without breaking accounting.",
      },
    ],
  },
  process: {
    sectionId: "chauffeur-process",
    headingId: "chauffeur-process-heading",
    eyebrow: "How we partner",
    titleBefore: "From ",
    titleAccent: "white-glove prototype",
    titleAfter: " to live fleet",
    steps: [
      {
        title: "Journey mapping",
        body: "We workshop your tiers, SLAs, and edge cases—airport holds, meet-and-greet, multi-passenger—before UI lands in Figma.",
      },
      {
        title: "Build & integrate",
        body: "Mobile apps, web consoles, SMS/email, maps, and payments wired to your stack with observability from day one.",
      },
      {
        title: "Launch with confidence",
        body: "Pilot cohorts, training kits for chauffeurs, and dashboards so ops can see bottlenecks before clients do.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/ecommerce/1.webp",
    "/assets/images-webp/our-portfolio/ecommerce/2.webp",
    "/assets/images-webp/our-portfolio/ecommerce/3.webp",
    "/assets/images-webp/our-portfolio/ecommerce/4.webp",
    "/assets/images-webp/our-portfolio/ecommerce/5.webp",
  ],
};

export const LOGISTICS_TRANSPORTATION_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "logistics-blog-heading",
  metadata: {
    title: "Logistics & Transportation App Development | Apex Labs",
    description:
      "Shipment tracking, route optimization, field workforce apps, and fleet visibility—mobile and web built for real-world operations.",
  },
  banner: {
    headingId: "logistics-hero-heading",
    accent: "Logistics",
    plain: " & transportation",
    lead: "Give dispatchers, drivers, and customers a single source of truth: live statuses, proof of delivery, and exceptions that surface before they become fire drills.",
    features: ["Track & trace", "Route & POD", "Field + control tower"],
    image: "/assets/images-webp/banners/logistic-banner.webp",
    imageAlt: "Logistics hero: dispatch, tracking, proof of delivery, and fleet operations on mobile",
  },
  overview: {
    sectionId: "logistics-overview",
    headingId: "logistics-overview-heading",
    eyebrow: "Operations at scale",
    titleBefore: "Visibility that survives ",
    titleAccent: "real-world chaos",
    titleAfter: "",
    body: "Last mile, middle mile, or mixed fleet—we align data models to how your business actually moves goods: hubs, carriers, subcontractors, and customer promises that do not all look the same.",
    bullets: [
      "Scanning, signatures, photos, and geofenced events for defensible proof of delivery",
      "Dispatcher tools: drag-assign, re-sequencing, and exception queues with audit trails",
      "Customer comms: accurate ETAs, self-serve tracking links, and proactive delay messaging",
    ],
    image: "/assets/images-webp/our-portfolio/food-delivery/4.webp",
    imageAlt: "Route and shipment tracking dashboards",
  },
  capabilities: {
    sectionId: "logistics-capabilities",
    headingId: "logistics-capabilities-heading",
    eyebrow: "Platform pieces",
    titleBefore: "Built for ",
    titleAccent: "teams in motion",
    titleAfter: "",
    cards: [
      {
        title: "Orchestration",
        body: "Orders, legs, vehicles, and drivers modeled so partial failures do not corrupt the whole chain of custody.",
      },
      {
        title: "Offline-first field",
        body: "Drivers keep working without perfect signal; sync merges cleanly when connectivity returns.",
      },
      {
        title: "Analytics & APIs",
        body: "Exports, webhooks, and partner integrations so finance and TMS tools stay in sync with mobile truth.",
      },
    ],
  },
  process: {
    sectionId: "logistics-process",
    headingId: "logistics-process-heading",
    eyebrow: "Delivery model",
    titleBefore: "From ",
    titleAccent: "pilots",
    titleAfter: " to network rollouts",
    steps: [
      {
        title: "Operational discovery",
        body: "We map your nodes, carriers, and exception playbook—then translate them into product rules engineers can implement.",
      },
      {
        title: "Iterate in the field",
        body: "Hardware assumptions, barcode quirks, and driver habits get tested early so v1 survives Monday morning volume.",
      },
      {
        title: "Scale & harden",
        body: "Performance budgets, role-based access, and monitoring for the APIs and jobs that keep the network humming.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/food-delivery/1.webp",
    "/assets/images-webp/our-portfolio/food-delivery/2.webp",
    "/assets/images-webp/our-portfolio/food-delivery/3.webp",
    "/assets/images-webp/our-portfolio/food-delivery/4.webp",
    "/assets/images-webp/our-portfolio/food-delivery/5.webp",
  ],
};

export const AUCTION_APP_CONTENT = {
  themeColor: THEME,
  blogHeadingId: "auction-blog-heading",
  metadata: {
    title: "Auction App Development | Apex Labs",
    description:
      "Timed auctions, live bidding, seller tooling, and secure checkout—custom auction and marketplace apps tailored to your category.",
  },
  banner: {
    headingId: "auction-hero-heading",
    accent: "Auction",
    plain: " apps",
    lead: "Run credible bidding events—reserve prices, anti-sniping, buyer verification, and settlement flows that protect both sides of the transaction.",
    features: ["Timed & live lots", "Seller consoles", "Payments & fees"],
    image: "/assets/images-webp/our-portfolio/ecommerce/5.webp",
    imageAlt: "Auction and commerce app interfaces",
  },
  overview: {
    sectionId: "auction-overview",
    headingId: "auction-overview-heading",
    eyebrow: "Trust at the gavel",
    titleBefore: "Bidding UX that stays ",
    titleAccent: "fair and fast",
    titleAfter: "",
    body: "Collectibles, industrial assets, or specialty inventory—your rules differ. We encode increment tables, buyer premiums, and lot states so the app reflects your auction house, not a generic template.",
    bullets: [
      "Real-time or soft-close extensions with server-authoritative bid ordering",
      "Watchlists, max bids, and notifications tuned so serious bidders never miss a beat",
      "Seller onboarding: lot submission, media, reserves, and payout schedules with clear status",
    ],
    image: "/assets/images-webp/our-portfolio/ecommerce/1.webp",
    imageAlt: "Product catalog and bidding experience",
  },
  capabilities: {
    sectionId: "auction-capabilities",
    headingId: "auction-capabilities-heading",
    eyebrow: "Core modules",
    titleBefore: "Everything an ",
    titleAccent: "auction product",
    titleAfter: " needs",
    cards: [
      {
        title: "Event engine",
        body: "Lot scheduling, catalog browsing, bid placement, and anti-sniping policies with clear audit logs.",
      },
      {
        title: "Trust & risk",
        body: "KYC where required, device limits, velocity checks, and dispute workflows that protect your brand.",
      },
      {
        title: "Checkout & ops",
        body: "Winning bids flow into invoices, shipping or pickup options, and admin tools for manual overrides when reality intervenes.",
      },
    ],
  },
  process: {
    sectionId: "auction-process",
    headingId: "auction-process-heading",
    eyebrow: "Ship sequence",
    titleBefore: "From ",
    titleAccent: "catalog",
    titleAfter: " to hammer-down scale",
    steps: [
      {
        title: "Rules workshop",
        body: "We document increments, fees, buyer types, and edge cases (tie bids, cancellations) before writing core services.",
      },
      {
        title: "Realtime build",
        body: "Low-latency bid paths, resilient reconnects, and UX that degrades gracefully under load spikes on closing night.",
      },
      {
        title: "Settlement & growth",
        body: "Payment capture, payouts, analytics on sell-through, and feature flags for new auction formats.",
      },
    ],
  },
  portfolioSlides: [
    "/assets/images-webp/our-portfolio/ecommerce/1.webp",
    "/assets/images-webp/our-portfolio/ecommerce/2.webp",
    "/assets/images-webp/our-portfolio/ecommerce/3.webp",
    "/assets/images-webp/our-portfolio/ecommerce/4.webp",
    "/assets/images-webp/our-portfolio/ecommerce/5.webp",
  ],
};
