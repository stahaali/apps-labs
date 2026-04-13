import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { BLOG_POSTS_HOME_PREVIEW } from "@/lib/blogData";
import styles from "./BlogSection.module.css";

const ACCENT = "#70AA26";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.png";
const SHADOW_WIDTH = 700;

export default function BlogSection({
  badge = "Latest updates",
  title,
  posts,
  gridClassName,
  headingId = "blog-section-heading",
}) {
  const list = posts ?? BLOG_POSTS_HOME_PREVIEW;
  return (
    <section
      className={styles.section}
      aria-labelledby={headingId}
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
        <AnimateOnView as="header" variant="fadeUp" className={styles.header}>
          <span className={styles.badge} style={{ backgroundColor: ACCENT }}>
            {badge}
          </span>
          <h2 id={headingId} className={`title ${styles.title}`}>
            {title ?? (
              <>
                Our Latest <span style={{ color: ACCENT }}>Blog Post</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-slate-600">
            <Link
              href="/blog"
              className="font-semibold text-[#70AA26] underline-offset-4 hover:underline"
            >
              View all posts
            </Link>
          </p>
        </AnimateOnView>

        <div className={[styles.grid, gridClassName].filter(Boolean).join(" ")}>
          {list.map((post, index) => (
            <AnimateOnView
              key={post.slug}
              variant="fadeUp"
              delayMs={index * 90}
              className="min-w-0"
            >
            <Link
              href={`/blog/${post.slug}`}
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
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
