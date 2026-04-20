import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import styles from "./EcommerceIndustrySection.module.css";

const BASE = "/assets/images-webp/industry/ecommerce";

const CARDS = [
  {
    title: "Customer App & Website",
    image: `${BASE}/customer-app-website.webp`,
    description:
      "Browse through a wide range of products, enjoy hassle-free checkout, and track your orders with ease.",
  },
  {
    title: "E-commerce App",
    image: `${BASE}/e-commerce-app.webp`,
    description:
      "Enjoy quick and secure checkout, track your orders in real-time, and receive personalized recommendations based on your preferences.",
  },
  {
    title: "Admin Dashboard",
    image: `${BASE}/admin-dashboard.webp`,
    description:
      "From product inventory and order management to customer analytics and marketing campaigns, our dashboard empowers you with comprehensive control and valuable insights.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EcommerceIndustrySection() {
  return (
    <section
      className={`${styles.ecommerceIndustrySection} relative z-20 w-full overflow-x-clip pb-16 pt-0 lg:pb-20`}
      aria-labelledby="ecommerce-industry-heading"
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 ${styles.lavenderPanel}`}
      >
        <AnimateOnView variant="fadeUp" className="mx-auto max-w-[820px] text-center">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Industries We Serve
          </span>
          <h2
            id="ecommerce-industry-heading"
            className="title text-balance text-neutral-900"
          >
            What Sets Us Apart From
            <span className="text-[#70AA26]"> Our Competitors?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            We prioritize our clients' requirements and objectives, collaborating closely with them to craft a Vendor e-Commerce App Development that seamlessly combines functionality with captivating aesthetics.
          </p>
        </AnimateOnView>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {CARDS.map((card, index) => (
            <AnimateOnView
              key={card.title}
              variant="fadeUp"
              delayMs={index * 75}
              className="min-w-0"
            >
            <article
              className={`relative flex min-h-[420px] flex-col overflow-hidden ${styles.card}`}
            >
              <div
                className={`relative aspect-[16/10] w-full shrink-0 bg-white ${styles.cardMedia} ${animateStyles.imageEase}`}
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div
                className={`relative flex flex-1 flex-col ${styles.cardBody}`}
              >
                <div className={styles.titleRow}>
                  <h3 className={`text-neutral-900 ${styles.cardTitle}`}>
                    {card.title}
                  </h3>
                  <Link
                    href="#"
                    className={styles.arrowBtn}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <ArrowIcon />
                  </Link>
                </div>
                <p className="mt-3 text-[14px] leading-[1.65] text-neutral-600 sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </article>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
