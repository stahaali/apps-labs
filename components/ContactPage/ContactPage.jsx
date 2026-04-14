import Image from "next/image";
import Link from "next/link";
import HeroBannerNoiseOverlay from "@/components/HeroBanner/HeroBannerNoiseOverlay";
import ContactFaq from "./ContactFaq";
import styles from "./ContactPage.module.css";

const PRIMARY = "#70AA26";
const CONTACT_ICON_BASE = "/assets/images-webp/contact";

const CONTACT_ROWS = [
  { icon: `${CONTACT_ICON_BASE}/contact1.png`, label: "USA" },
  {
    icon: `${CONTACT_ICON_BASE}/contact2.png`,
    label: "info@apexlabs.co",
    href: "mailto:info@apexlabs.co",
  },
  {
    icon: `${CONTACT_ICON_BASE}/contact3.png`,
    label: "+1 (555) 010-2030",
    href: "tel:+15550102030",
  },
];

const FAQ_ITEMS = [
  {
    q: "How quickly will you respond to my inquiry?",
    a: "We typically reply within one business day. For urgent project discussions, mention it in your message and we’ll prioritize your request.",
  },
  {
    q: "What information should I include in the contact form?",
    a: "A short overview of your app idea, target audience, timeline, and budget range helps us prepare a relevant response. Don’t worry if details are rough—we’ll guide you from there.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We partner with early-stage founders building an MVP as well as larger teams scaling existing products. Scope and engagement models are tailored to each client.",
  },
  {
    q: "Can we sign an NDA before sharing details?",
    a: "Absolutely. We’re happy to execute a mutual NDA before you share confidential materials or product plans.",
  },
];

const inputLight =
  "w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-[13px] text-neutral-900 outline-none transition-[border-color,box-shadow] placeholder:text-neutral-500 focus:border-[#70AA26]/55 focus-visible:ring-2 focus-visible:ring-[#70AA26]/25";

const textareaLight =
  "min-h-[120px] w-full resize-y rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-[13px] text-neutral-900 outline-none transition-[border-color,box-shadow] placeholder:text-neutral-500 focus:border-[#70AA26]/55 focus-visible:ring-2 focus-visible:ring-[#70AA26]/25";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Dark hero — dashed grid + noise (same stack as home) */}
      <section
        className={`${styles.contactHero} px-4 pb-14 pt-[calc(72px+2.5rem)] min-[480px]:px-6 sm:px-10 sm:pb-16 sm:pt-[calc(72px+3rem)] lg:pb-20 lg:pt-[calc(72px+4rem)]`}
        aria-labelledby="contact-page-title"
      >
        {/* <HeroBannerNoiseOverlay /> */}
        <div className={`${styles.contactHeroInner} mx-auto max-w-[1200px] text-center`}>
          <span
            className="inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
            style={{ backgroundColor: PRIMARY }}
          >
            Contact Us
          </span>
          <h1
            id="contact-page-title"
            className="title mx-auto mt-5 max-w-4xl text-balance text-white sm:mt-6"
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: PRIMARY }}>Remarkable</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
            Tell us about your mobile app goals. We&apos;ll get back with next
            steps, timeline options, and how our team can support your launch.
          </p>
        </div>
      </section>

      {/* Light: form, map, FAQ — banner above is the only dark block on this page */}
      <section
        className={`${styles.contactLight} px-4 py-12 min-[480px]:px-6 sm:px-10 sm:py-16 lg:py-20`}
        aria-label="Contact form, location, and FAQ"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className={`${styles.contactLightCard} p-6 sm:p-8`}>
            <h2 className="m-0 text-2xl font-bold tracking-tight text-neutral-900 sm:text-[1.75rem]">
              Send a message
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
              Share a few details—we&apos;ll reply shortly.
            </p>

            <form className="mt-6 grid gap-3 sm:gap-3.5" action="#" method="post">
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-3">
                <label className="grid gap-1">
                  <span className="sr-only">First name</span>
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First name"
                    className={inputLight}
                    required
                  />
                </label>
                <label className="grid gap-1">
                  <span className="sr-only">Last name</span>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className={inputLight}
                    required
                  />
                </label>
              </div>
              <label className="grid gap-1">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className={inputLight}
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="sr-only">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone (optional)"
                  className={inputLight}
                />
              </label>
              <label className="grid gap-1">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  className={textareaLight}
                  required
                />
              </label>
              <button
                type="submit"
                className="site-btn-motion mt-1 w-full rounded-full border-0 bg-[#70AA26] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(112,170,38,0.5)] hover:brightness-105 hover:shadow-[0_14px_32px_-14px_rgba(112,170,38,0.45)] sm:w-auto sm:justify-self-start"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <div>
              <h2 className="m-0 text-2xl font-bold tracking-tight text-neutral-900 sm:text-[1.75rem]">
                Visit & reach us
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                Based in the USA · working with teams worldwide.
              </p>
            </div>

            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[0_10px_28px_-12px_rgba(15,23,42,0.12)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[320px]`}
            >
              <iframe
                title="Apex Labs location map"
                src="https://maps.google.com/maps?q=United+States&z=4&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="m-0 list-none space-y-3 p-0">
              {CONTACT_ROWS.map((row) => {
                const inner = (
                  <span className="flex items-center gap-3 text-[14px] text-neutral-800">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-neutral-200 bg-neutral-50">
                      <Image
                        src={row.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="opacity-90"
                      />
                    </span>
                    {row.label}
                  </span>
                );
                return (
                  <li key={row.label}>
                    {row.href ? (
                      <Link
                        href={row.href}
                        className="block rounded-xl py-1 transition-colors hover:text-[#70AA26]"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className="py-1">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={`${styles.contactFaqBlock} mx-auto max-w-[720px]`}
          aria-labelledby="contact-faq-heading"
        >
          <h2
            id="contact-faq-heading"
            className="title text-center text-balance text-neutral-900 sm:mb-2"
          >
            Frequently Asked{" "}
            <span className="text-[#70AA26]">Questions</span>
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-center text-[15px] leading-relaxed text-neutral-600">
            Quick answers about how we work with new clients and projects.
          </p>
          <ContactFaq items={FAQ_ITEMS} />
        </div>
      </section>

    </main>
  );
}
