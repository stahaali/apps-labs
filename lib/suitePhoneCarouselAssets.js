/** Shared tech-suite phone assets (food-business). Update paths if you add per-vertical folders. */
export const SUITE_PHONE_FRAME = "/assets/images-webp/food-business/mobile-image.webp";

/** First asset is `01.webp` on disk (not `1.webp`) — wrong path shows a blank slide. */
const FOOD_SUITE_SLIDE_NAMES = ["01", "2", "3", "4", "5", "6", "7", "8"];

export const SUITE_PHONE_SLIDES = FOOD_SUITE_SLIDE_NAMES.map(
  (name) => `/assets/images-webp/food-business/${name}.webp`
);
