import Image from "next/image";
import styles from "./HeroBanner.module.css";

const HERO = "/assets/images-webp/hero-banner/hero-img.webp";
const SHADOW = "/assets/images-webp/hero-banner/shadow-2.webp";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HeroBannerVisual() {
  return (
    <div className="relative isolate flex w-full items-center justify-center lg:justify-end">
      <div className="relative flex w-full max-w-[640px] items-center justify-center lg:max-w-none lg:pr-0 xl:max-w-[720px]">
        <div
          className={`${styles.shadowWrap} absolute right-0 top-1/2 z-0 w-[min(132%,820px)] max-w-none -translate-y-1/2`}
          aria-hidden
        >
          <Image
            src={SHADOW}
            alt=""
            width={900}
            height={900}
            sizes="(max-width: 1024px) 90vw, 820px"
            className={`h-auto w-full select-none object-contain ${styles.shadowGlow}`}
          />
        </div>

        <div className="relative z-10 w-full max-w-[580px] lg:max-w-[600px] xl:max-w-[640px]">
          <Image
            src={HERO}
            alt="Apex Labs mobile applications on phone mockups"
            width={680}
            height={740}
            sizes="(max-width: 1024px) 90vw, 640px"
            className="h-auto w-full select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section
      className={`${styles.homebanner} relative z-0 w-full overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-6 lg:gap-y-0 xl:gap-x-10">
          <div className="max-w-[600px] lg:max-w-none lg:pr-4 xl:pr-8">
            <h1
              id="hero-heading"
              className="text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              We Build Apps That{" "}
              <span className="text-[#424FFA]">Dominate Markets</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-neutral-400">
              From zero to launch — we design, develop, and scale world-class
              mobile apps that users love and investors fund.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-0.5 text-[#EAB308]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="h-[17px] w-[17px]" />
                ))}
              </div>
              <p className="text-[15px] text-neutral-300">
                Rated <span className="font-semibold text-white">4.9</span> by{" "}
                <span className="font-semibold text-white">500+</span> founders
              </p>
            </div>

            <form className="mt-8 w-full max-w-[520px]" action="#" method="post" aria-label="Email signup">
              <div
                className="flex min-h-[64px] w-full items-center gap-4 rounded-full border stroke-[#F5F5F5] stroke-opacity-50 stroke-2 border-[#353539] bg-[#0a0d12] py-2 pl-8 pr-2.5 shadow-[0_0_0_9px_var(--tw-shadow-color,rgba(253,247,236,0.03))] sm:min-h-[68px] sm:pl-9 sm:pr-3"
                role="group"
              >
                <Image
                  src={PEN_ICON}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0 object-contain"
                  aria-hidden
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  required
                  className="min-w-0 flex-1 cursor-text bg-transparent text-[17px] leading-normal text-white caret-white placeholder:text-neutral-500 focus:outline-none focus:ring-0"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gradient-to-b from-[#424FFA] to-[#424FFA] px-7 py-3.5 text-[15px] font-semibold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-[filter,box-shadow] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 active:brightness-95 sm:px-8 sm:py-[15px] sm:text-base"
                >
                  Get Started
                </button>
              </div>
            </form>

            <div className="mt-12 flex flex-wrap items-stretch gap-y-6 sm:mt-14 sm:gap-y-0">
              <div className="flex min-w-[118px] flex-col gap-1 border-white/10 pr-8 sm:border-r sm:pr-10 lg:pr-12">
                <span className="text-[26px] font-bold leading-none tracking-tight text-[#424FFA]">
                  500+
                </span>
                <span className="text-[14px] font-medium leading-tight text-neutral-400">
                  Apps Shipped
                </span>
              </div>
              <div className="flex min-w-[118px] flex-col gap-1 border-white/10 px-8 sm:border-r sm:px-10 lg:px-12">
                <span className="text-[26px] font-bold leading-none tracking-tight text-[#424FFA]">
                  98%
                </span>
                <span className="text-[14px] font-medium leading-tight text-neutral-400">
                  Client Retention
                </span>
              </div>
              <div className="flex min-w-[132px] flex-col gap-1 pl-8 sm:pl-10 lg:pl-12">
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[26px] font-bold leading-none tracking-tight text-[#424FFA]">
                    4.9
                  </span>
                  <StarIcon className="h-[1em] w-[1em] shrink-0 text-[26px] text-[#eab308]" />
                </span>
                <span className="text-[14px] font-medium leading-tight text-neutral-400">
                  Avg Rating
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[360px] justify-center lg:min-h-[560px] lg:justify-end">
            <HeroBannerVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
