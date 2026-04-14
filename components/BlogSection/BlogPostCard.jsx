import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./BlogSection.module.css";

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** @param {{ post: { slug: string; image: string; date: string; category: string; title: string; excerpt: string }; imageSizes?: string; priority?: boolean }} props */
export default function BlogPostCard({ post, imageSizes, priority = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.cardLink}
      aria-label={`Read article: ${post.title}`}
    >
      <div className={styles.imageWrapCard}>
        <div className={styles.imageInner}>
          <ImageWithSkeleton
            src={post.image}
            alt=""
            fill
            className={styles.image}
            sizes={
              imageSizes ??
              "(max-width: 639px) 100vw, (max-width: 991px) 50vw, 33vw"
            }
            skeletonClassName="rounded-none"
            priority={priority}
          />
        </div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardMeta}>
          {post.date}
          <span aria-hidden> | </span>
          {post.category}
        </p>
        <div className={styles.titleRow}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <span className={styles.cardArrow} aria-hidden>
            <ArrowUpRightIcon className={styles.cardArrowIcon} />
          </span>
        </div>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
      </div>
    </Link>
  );
}
