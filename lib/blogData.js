const BLOG_IMG_BASE = "/assets/images-webp/blogs";

const IMAGES = [
  `${BLOG_IMG_BASE}/1.webp`,
  `${BLOG_IMG_BASE}/2.webp`,
  `${BLOG_IMG_BASE}/3.webp`,
];

/**
 * @typedef {{ slug: string; image: string; date: string; category: string; title: string; excerpt: string }} BlogPost
 */

/** @type {BlogPost[]} */
export const BLOG_POSTS = [
  {
    slug: "monetize-mobile-apps",
    image: IMAGES[0],
    date: "May 12, 2023",
    category: "Mobile app",
    title: "Effective ways to monetize mobile apps for better performance",
    excerpt:
      "Subscriptions, ads, and in-app purchases—how to pick models that fit your audience without hurting retention.",
  },
  {
    slug: "why-choose-our-app",
    image: IMAGES[1],
    date: "April 28, 2023",
    category: "Product",
    title: "Why you'll love our app: top 5 reasons to choose us",
    excerpt:
      "Speed, reliability, and polish users notice—what separates a product people keep from one they uninstall.",
  },
  {
    slug: "food-ordering-ux",
    image: IMAGES[2],
    date: "March 15, 2023",
    category: "Design",
    title: "Designing high-converting food ordering experiences",
    excerpt:
      "Menus, modifiers, and checkout flows that reduce drop-off and make repeat orders effortless.",
  },
  {
    slug: "cross-platform-vs-native",
    image: IMAGES[0],
    date: "February 22, 2023",
    category: "Engineering",
    title: "Cross-platform vs native: picking the right stack for your MVP",
    excerpt:
      "When React Native or Flutter wins, when to go native, and how to avoid costly rewrites later.",
  },
  {
    slug: "onboarding-retention",
    image: IMAGES[1],
    date: "January 18, 2023",
    category: "Product",
    title: "Onboarding flows that improve day-one retention",
    excerpt:
      "First sessions that teach value fast—permissions, empty states, and gentle nudges that stick.",
  },
  {
    slug: "app-store-optimization-basics",
    image: IMAGES[2],
    date: "December 6, 2022",
    category: "Growth",
    title: "App Store Optimization basics every founder should know",
    excerpt:
      "Keywords, screenshots, and ratings—practical ASO moves that improve discoverability before you spend on ads.",
  },
  {
    slug: "secure-payments-mobile",
    image: IMAGES[0],
    date: "November 14, 2022",
    category: "Mobile app",
    title: "Building trust with secure payments in mobile commerce",
    excerpt:
      "PCI-minded patterns, wallet support, and UX details that make checkout feel safe on a small screen.",
  },
  {
    slug: "design-systems-scale",
    image: IMAGES[1],
    date: "October 3, 2022",
    category: "Design",
    title: "How design systems help teams ship faster at scale",
    excerpt:
      "Tokens, components, and governance so designers and engineers stay aligned as the product grows.",
  },
  {
    slug: "analytics-that-matter",
    image: IMAGES[2],
    date: "September 9, 2022",
    category: "Product",
    title: "Analytics that matter: metrics beyond downloads",
    excerpt:
      "Activation, engagement, and revenue signals—what to instrument early so decisions aren’t guesswork.",
  },
];

export const BLOG_POSTS_HOME_PREVIEW = BLOG_POSTS.slice(0, 3);
