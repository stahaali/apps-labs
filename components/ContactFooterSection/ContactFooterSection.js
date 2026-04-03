import Image from "next/image";
import Link from "next/link";
import styles from "./ContactFooterSection.module.css";

const FOOTER_BG = "/assets/images-webp/footer/footer-bg.webp";
const BASE = "/assets/images-webp/contact";
/* `public/assets/images-webp/shadow-1.png` (or `.webp` — update extension if needed) */
const SHADOW_IMAGE = "/assets/images-webp/footer/shadow-1.png";
const SHADOW_WIDTH = 700;

const CONTACT_ITEMS = [
  { icon: `${BASE}/contact1.png`, label: "USA" },
  { icon: `${BASE}/contact2.png`, label: "info@apexlabs.co" },
  { icon: `${BASE}/contact3.png`, label: "+1 (555) 010-2030" },
];


const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: ["Core Features", "Integrations", "Roadmap", "App Store Agency"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Design Portfolio", "Help Center"],
  },
  {
    title: "Types of Apps",
    links: [
      "Custom Mobile Apps",
      "Cross Platform Apps",
      "Ecommerce & Shopify",
      "Fintech Solutions",
      "Health & Fitness",
      "Travel & Tourism",
    ],
  },
  {
    title: "Company",
    links: ["About", "Pricing", "Careers", "Contact Policy", "Privacy", "CSAI"],
  },
];

export default function ContactFooterSection() {
  return (
    <section className={styles.section} aria-labelledby="contact-footer-title">

      <div className={styles.bg} aria-hidden>
        <Image
          src={FOOTER_BG}
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>

      <div className={styles.iconShadowWrap} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={SHADOW_WIDTH}
          height={SHADOW_WIDTH}
          className={styles.iconShadowImage}
          sizes="(max-width: 768px) 150vw, 900px"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.topGrid}>
          <div className={styles.left}>
            <span className={styles.pill}>Contact Us</span>
            <h2 id="contact-footer-title" className={styles.title}>
              Let&apos;s Fire Up <span className={styles.accent}>Your Business!</span>
            </h2>
            <p className={styles.lead}>
              Ready to start? Tell us about your project and we&apos;ll get back to
              you with a tailored plan.
            </p>

            <ul className={styles.contactList}>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden>
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      sizes="20px"
                      className={styles.contactIconImg}
                    />
                  </span>
                  <span className={styles.contactText}>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card} aria-label="Start your project form">
            <h3 className={styles.cardTitle}>Start Your Project</h3>
            <p className={styles.cardSub}>
              Let&apos;s shape your idea into a polished product. Share a few
              details and we&apos;ll reply shortly.
            </p>

            <form className={styles.form} action="#" method="post">
              <div className={styles.row2}>
                <label className={styles.field}>
                  <span className={styles.srOnly}>Full name</span>
                  <input
                    className={styles.input}
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.srOnly}>Email</span>
                  <input
                    className={styles.input}
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.srOnly}>Phone number</span>
                <input
                  className={styles.input}
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="tel"
                />
              </label>

              <label className={styles.field}>
                <span className={styles.srOnly}>Message</span>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Message"
                  rows={4}
                />
              </label>

              <button className={styles.btn} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerGrid}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.colList}>
                  {col.links.map((label) => (
                    <li key={label} className={styles.colItem}>
                      <Link href="#" className={styles.colLink}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.bottomBar}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} Apex Labs. All rights reserved.
            </p>
            <p className={styles.legalText}>A Curious Company</p>
          </div>
        </div>
      </div>
    </section>
  );
}

