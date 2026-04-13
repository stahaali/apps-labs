/**
 * Full-page testimonials grid only — unique from `clientTestimonials.js` (slider / pricing).
 *
 * Columns are 5 + 5 + 4 with long quotes split across columns so heights stay even (was 4+4+6).
 */

export const TESTIMONIAL_PAGE_COLUMNS = [
  [
    {
      name: "Rachel Kim",
      role: "VP of Engineering, StreamVault",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      rating: 5,
      text: "Clear estimates, weekly demos, and zero surprise invoices. Our streaming companion app shipped with the performance profile we asked for.",
    },
    {
      name: "Tessa Worrall",
      role: "Head of Growth, Ledgerly",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      rating: 5,
      text: "Onboarding experiments and paywall tests were instrumented properly from day one. We could finally trust the funnel numbers in Mixpanel.",
    },
    {
      name: "Zara Malik",
      role: "Operations, EventSphere",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 5,
      text: "Check-in, wristband activation, and sponsor lead capture—all in one event app. Staff training took an afternoon.",
    },
    {
      name: "Yuki Taneda",
      role: "Principal PM, Northwind Analytics",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      text: "Crisp handoffs from design to code. Component library matches Figma within a few pixels.",
    },
    {
      name: "Omar Haddad",
      role: "COO, CityCart Groceries",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      rating: 5,
      text: "We replaced a fragile white-label stack with a custom ordering flow, slot-based delivery, and a store manager tablet app. Inventory sync used to break nightly; now exceptions are rare and the dashboard shows exactly what failed. Their squad stayed in our Slack during rollout and owned store training materials—we did not have to babysit the launch.",
    },
  ],
  [
    {
      name: "Amara Osei",
      role: "Director of Care, PulseBridge Health",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
      rating: 5,
      text: "HIPAA-minded defaults, audit-friendly logging, and a calm interface for both clinicians and patients. Security review went smoother than our last vendor.",
    },
    {
      name: "Lukas Brenner",
      role: "CTO, FreightNest",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "They integrated with our TMS and built driver workflows that match how yards actually operate. Push notifications for dock changes alone saved us constant phone tag.",
    },
    {
      name: "Hannah McNeil",
      role: "Product Lead, StudySpark",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      rating: 5,
      text: "Short engagement: six weeks from kickoff to TestFlight for tutors and parents. Small scope, but the polish was there—animations, empty states, error copy.",
    },
    {
      name: "Isabelle Fortin",
      role: "Creative Director, Maison Louvre Digital",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      rating: 5,
      text: "Luxury retail is picky. Typography, motion, and image loading were handled with care—no janky fades on slow networks.",
    },
    {
      name: "Diego Fernández",
      role: "GM, Mesa Restaurants Group",
      avatar: "https://randomuser.me/api/portraits/men/26.jpg",
      rating: 5,
      text: "Twelve locations, one branded guest app, and kitchen display hooks we can grow into. Menu updates propagate without forcing users to reinstall. When Apple changed sign-in guidelines, they turned around an update in days—not weeks.",
    },
  ],
  [
    {
      name: "Vincent Morales",
      role: "Founder, Trailhead Outdoors",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      rating: 5,
      text: "Offline maps, GPX import, and weather alerts work reliably where cell service dies. The UI feels like gear you’d actually pack—not a generic template.",
    },
    {
      name: "Samuel Boateng",
      role: "CEO, RentRight Africa",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      text: "Mobile money, KYC checkpoints, and landlord payouts in one flow. Regulatory wording and retry paths were thought through; we did not have to bolt on hacks after launch.",
    },
    {
      name: "Noah Gallagher",
      role: "Head of IT, Summit Credit Union (pilot)",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 5,
      text: "We started with a read-only balances and alerts MVP. The team documented threat models and session handling in language our risk committee understood. That alone made the difference versus other agencies who only spoke in sprint jargon.",
    },
    {
      name: "Ethan Roy",
      role: "Co-founder, Gridline Solar",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
      rating: 5,
      text: "Field installers submit photos, signatures, and system specs offline; sync when back on Wi‑Fi. Back-office gets clean JSON and fewer “what happened here?” tickets. If you are building something operational—not just another consumer wrapper—these folks get it.",
    },
  ],
];

export const TESTIMONIALS_PAGE_FAQ = [
  {
    q: "Are these testimonials from real client projects?",
    a: "Each quote reflects the kinds of outcomes we aim for—shipping on time, clear communication, and production-quality mobile work. Names and companies are illustrative; we are happy to provide references under NDA for qualified engagements.",
  },
  {
    q: "Can we speak with a past client in our industry?",
    a: "When timelines and confidentiality allow, we connect prospects with references who have agreed to share their experience. Tell us your sector and stack and we will suggest the closest match.",
  },
  {
    q: "How do you collect feedback during a project?",
    a: "We run structured demos, shared roadmaps, and async channels so stakeholders stay aligned. Retros at major milestones capture what to double down on for the next release.",
  },
  {
    q: "Do you publish detailed case studies?",
    a: "Some clients prefer private engagements; others approve public write-ups. Check our blog for published stories or ask us for a tailored deck under NDA.",
  },
  {
    q: "What if our review needs to stay confidential?",
    a: "We never publish identifying details without written approval. Many teams choose anonymized quotes or private reference calls instead.",
  },
];
