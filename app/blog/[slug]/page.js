import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogStyles from "@/components/BlogSection/BlogSection.module.css";
import { BLOG_POSTS } from "@/lib/blogData";

const ACCENT = "#70AA26";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.webp";
const SHADOW_WIDTH = 700;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post | Apex Labs" };
  return {
    title: `${post.title} | Apex Labs Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <article
        className={blogStyles.section}
        aria-labelledby="blog-article-title"
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
          <nav className="mb-8 text-center">
            <Link
              href="/blog"
              className="text-[14px] font-semibold text-slate-600 underline-offset-4 hover:text-[#70AA26] hover:underline"
            >
              ← All posts
            </Link>
          </nav>

          <header className={blogStyles.header}>
            <p className={blogStyles.meta}>
              {post.date}
              <span aria-hidden> | </span>
              {post.category}
            </p>
            <h1
              id="blog-article-title"
              className={`title mt-4 ${blogStyles.title}`}
            >
              {post.title}
            </h1>
          </header>

          <div
            className={`${blogStyles.imageWrap} mx-auto mt-10 max-w-[800px]`}
          >
            <div className={blogStyles.imageInner}>
              <Image
                src={post.image}
                alt=""
                fill
                className={blogStyles.image}
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[720px] rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.12)] sm:p-10">
            <p className="m-0 text-[16px] leading-relaxed text-slate-600">
              Full article copy is coming soon. For project questions or
              collaboration, reach out via our{" "}
              <Link href="/contact" className="font-semibold" style={{ color: ACCENT }}>
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
