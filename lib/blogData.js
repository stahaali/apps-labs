const BLOG_IMG_BASE = "/assets/images-webp/blogs";

const IMAGES = [
  `${BLOG_IMG_BASE}/1.png`,
  `${BLOG_IMG_BASE}/2.png`,
  `${BLOG_IMG_BASE}/3.png`,
];

/** @type {{ slug: string; image: string; date: string; category: string; title: string }[]} */
export const BLOG_POSTS = [
  {
    slug: "monetize-mobile-apps",
    image: IMAGES[0],
    date: "May 12, 2023",
    category: "Mobile app",
    title: "Effective ways to monetize mobile apps for better performance",
  },
  {
    slug: "why-choose-our-app",
    image: IMAGES[1],
    date: "April 28, 2023",
    category: "Product",
    title: "Why you'll love our app: top 5 reasons to choose us",
  },
  {
    slug: "food-ordering-ux",
    image: IMAGES[2],
    date: "March 15, 2023",
    category: "Design",
    title: "Designing high-converting food ordering experiences",
  },
  {
    slug: "cross-platform-vs-native",
    image: IMAGES[0],
    date: "February 22, 2023",
    category: "Engineering",
    title: "Cross-platform vs native: picking the right stack for your MVP",
  },
  {
    slug: "onboarding-retention",
    image: IMAGES[1],
    date: "January 18, 2023",
    category: "Product",
    title: "Onboarding flows that improve day-one retention",
  },
  {
    slug: "app-store-optimization-basics",
    image: IMAGES[2],
    date: "December 6, 2022",
    category: "Growth",
    title: "App Store Optimization basics every founder should know",
  },
  {
    slug: "secure-payments-mobile",
    image: IMAGES[0],
    date: "November 14, 2022",
    category: "Mobile app",
    title: "Building trust with secure payments in mobile commerce",
  },
  {
    slug: "design-systems-scale",
    image: IMAGES[1],
    date: "October 3, 2022",
    category: "Design",
    title: "How design systems help teams ship faster at scale",
  },
  {
    slug: "analytics-that-matter",
    image: IMAGES[2],
    date: "September 9, 2022",
    category: "Product",
    title: "Analytics that matter: metrics beyond downloads",
  },
];

export const BLOG_POSTS_HOME_PREVIEW = BLOG_POSTS.slice(0, 3);
