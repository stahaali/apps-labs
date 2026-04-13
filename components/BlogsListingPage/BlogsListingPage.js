import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import BlogPageBanner from "@/components/BlogPageBanner/BlogPageBanner";
import ContactFaq from "@/components/ContactPage/ContactFaq";
import blogStyles from "@/components/BlogSection/BlogSection.module.css";
import { BLOG_FAQ_ITEMS } from "@/lib/blogFaq";
import { BLOG_POSTS } from "@/lib/blogData";

const ACCENT = "#70AA26";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.png";
const SHADOW_WIDTH = 700;

export default function BlogsListingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BlogPageBanner />

      <section
        className={`${blogStyles.section} ${blogStyles.sectionWithTopBanner}`}
        aria-label="Blog articles and FAQ"
      >
        <div className={blogStyles.shadowLayer} aria-hidden>
          <Image
            src={SHADOW_IMAGE}
            alt=""
            width={SHADOW_WIDTH}
            height={SHADOW_WIDTH}
            className={blogStyles.shadowImg}
            sizes="(max-width: 768px) 90vw, 640px"
          />
        </div>
        <div className={blogStyles.inner}>
          <div className={blogStyles.grid}>
            {BLOG_POSTS.map((post, index) => (
              <AnimateOnView
                key={post.slug}
                variant="fadeUp"
                delayMs={index * 70}
                className="min-w-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={blogStyles.cardLink}
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className={blogStyles.imageWrap}>
                    <div className={blogStyles.imageInner}>
                      <ImageWithSkeleton
                        src={post.image}
                        alt=""
                        fill
                        className={blogStyles.image}
                        sizes="(max-width: 639px) 100vw, (max-width: 991px) 50vw, 33vw"
                        skeletonClassName="rounded-[0.625rem]"
                      />
                    </div>
                  </div>
                  <div className={blogStyles.cardBody}>
                    <p className={blogStyles.meta}>
                      {post.date}
                      <span aria-hidden> | </span>
                      {post.category}
                    </p>
                    <h3 className={blogStyles.cardTitle}>{post.title}</h3>
                    <span
                      className={blogStyles.readMore}
                      style={{ color: ACCENT }}
                    >
                      Read more
                      <span aria-hidden> →</span>
                    </span>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>

          <div
            className="mx-auto mt-[clamp(2.5rem,5vw,4rem)] max-w-[720px] border-t border-slate-300/50 pt-[clamp(2.5rem,5vw,4rem)]"
            aria-labelledby="blog-faq-heading"
          >
            <h2
              id="blog-faq-heading"
              className="title text-center text-balance text-slate-900 sm:mb-2"
            >
              Frequently Asked{" "}
              <span style={{ color: ACCENT }}>Questions</span>
            </h2>
            <p className="mx-auto mb-10 max-w-[520px] text-center text-[15px] leading-relaxed text-slate-600">
              Quick answers about our articles and how to work with Apex Labs.
            </p>
            <ContactFaq items={BLOG_FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </main>
  );
}
