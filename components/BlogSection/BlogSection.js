import Image from "next/image";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./BlogSection.module.css";

const ACCENT = "#70AA26";
const BLOG_IMG_BASE = "/assets/images-webp/blogs";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.png";
const SHADOW_WIDTH = 700;

const POSTS = [
  {
    slug: "monetize-mobile-apps",
    image: `${BLOG_IMG_BASE}/1.png`,
    date: "May 12, 2023",
    category: "Mobile app",
    title: "Effective ways to monetize mobile apps for better performance",
  },
  {
    slug: "why-choose-our-app",
    image: `${BLOG_IMG_BASE}/2.png`,
    date: "April 28, 2023",
    category: "Product",
    title: "Why you’ll love our app: top 5 reasons to choose us",
  },
  {
    slug: "food-ordering-ux",
    image: `${BLOG_IMG_BASE}/3.png`,
    date: "March 15, 2023",
    category: "Design",
    title: "Designing high-converting food ordering experiences",
  },
];

export default function BlogSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="blog-section-heading"
    >
      <div className={styles.shadowLayer} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={SHADOW_WIDTH}
          height={SHADOW_WIDTH}
          className={styles.shadowImg}
          sizes="(max-width: 768px) 90vw, 640px"
        />
      </div>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.badge} style={{ backgroundColor: ACCENT }}>
            Latest updates
          </span>
          <h2 id="blog-section-heading" className={`title ${styles.title}`}>
            Our Latest <span style={{ color: ACCENT }}>Blog Post</span>
          </h2>
        </header>                    

        <div className={styles.grid}>
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href="/blog"
              className={styles.cardLink}
              aria-label={`Read article: ${post.title}`}
            >
              <div className={styles.imageWrap}>
                <div className={styles.imageInner}>
                  <ImageWithSkeleton
                    src={post.image}
                    alt=""
                    fill
                    className={styles.image}
                    sizes="(max-width: 639px) 100vw, (max-width: 991px) 50vw, 33vw"
                    skeletonClassName="rounded-[0.625rem]"
                  />
                </div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.meta}>
                  {post.date}
                  <span aria-hidden> | </span>
                  {post.category}
                </p>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <span className={styles.readMore} style={{ color: ACCENT }}>
                  Read more
                  <span aria-hidden> →</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
