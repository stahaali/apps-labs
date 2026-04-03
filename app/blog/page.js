import Link from "next/link";

export const metadata = {
  title: "Blog | Apex Labs",
  description: "Latest updates and insights from Apex Labs.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="site-title text-neutral-900">Blog</h1>
      <p className="mt-4 text-slate-600">
        Full articles are coming soon. Head back to the homepage for now.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-semibold text-[#4D5DFB] underline-offset-4 hover:underline"
      >
        ← Home
      </Link>
    </main>
  );
}
