import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import BlogPostCard from "@/components/BlogSection/BlogPostCard";
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
                <BlogPostCard post={post} priority={index < 3} />
              </AnimateOnView>
            ))}
          </div>

          <div
            className="mx-auto mt-[clamp(2.5rem,5vw,4rem)] max-w-[720px] max-[576px]:mx-[15px] border-t border-slate-300/50 pt-[clamp(2.5rem,5vw,4rem)]"
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
