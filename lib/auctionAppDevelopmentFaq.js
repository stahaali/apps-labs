/** FAQ for /auction-app */

export const AUCTION_APP_DEVELOPMENT_FAQ = [
  {
    q: "How do auction apps handle sniping and fair closing?",
    a: "We implement server-authoritative bid ordering, soft-close extensions, and clear policies so last-second bids are legitimate and auditable.",
  },
  {
    q: "How do I launch my own auction marketplace?",
    a: "Start with your catalog model, fee structure, and trust requirements, then ship a focused v1 with bidding, payments, and seller tooling—iterate on real closing-night data.",
  },
  {
    q: "What should a modern auction app include?",
    a: "Lot browsing, max bids, watchlists, live and timed formats, identity and risk checks where needed, and settlement flows that finance can reconcile.",
  },
  {
    q: "Why build a custom auction app instead of generic marketplaces?",
    a: "Custom work keeps increments, buyer premiums, reserves, and category rules aligned with your house—without fighting template limits as you scale formats.",
  },
  {
    q: "What integrations are common in auction products?",
    a: "Payment capture and payouts, email and push, maps for pickup, analytics, CRM, and webhooks to your existing ops stack.",
  },
];
