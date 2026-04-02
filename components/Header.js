import Link from "next/link";

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navLink =
  "flex items-center gap-1 text-[15px] font-medium leading-none text-white/90 transition-colors hover:text-white";

function MenuIcon({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-[100] w-full border-b border-solid border-b-white/10">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-[22px] font-bold tracking-tight">
          <span className="text-white">Apex </span>
          <span className="text-[#3b82f6]">Labs</span>
        </Link>

        <nav
          className="hidden items-center gap-[34px] lg:flex"
          aria-label="Main navigation"
        >
          <Link href="/" className={navLink}>
            Home
            <ChevronDown className="mt-px text-white/70" />
          </Link>
          <Link href="/about" className={navLink}>
            About
          </Link>
          <Link href="/pages" className={navLink}>
            Pages
            <ChevronDown className="mt-px text-white/70" />
          </Link>
          <Link href="/pricing" className={navLink}>
            Pricing
          </Link>
          <Link href="/reviews" className={navLink}>
            Reviews
          </Link>
          <Link href="/blog" className={navLink}>
            Blog
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <details className="relative lg:hidden">
            <summary className="list-none rounded-full border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-md transition hover:bg-white/15">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-[22px] w-[22px]" />
            </summary>
            <div className="absolute right-0 mt-3 w-[min(88vw,340px)] overflow-hidden rounded-2xl border border-white/12 bg-[#0b0c10]/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="grid">
                <Link href="/" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Home
                </Link>
                <Link href="/about" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  About
                </Link>
                <Link href="/pages" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Pages
                </Link>
                <Link href="/pricing" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Pricing
                </Link>
                <Link href="/reviews" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Reviews
                </Link>
                <Link href="/blog" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Blog
                </Link>
                <Link href="/contact" className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/90 hover:bg-white/10">
                  Contact
                </Link>
              </div>
            </div>
          </details>
          <Link
            href="/get-started"
            className="rounded-full bg-white px-[26px] py-[11px] text-[15px] font-semibold leading-none text-[#050505] transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
