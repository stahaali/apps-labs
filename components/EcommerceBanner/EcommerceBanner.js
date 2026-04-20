"use client";

import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import styles from "./EcommerceBanner.module.css";

const HERO = "/assets/images-webp/banners/ecommerce-banner1.webp";
const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.webp";

export default function EcommerceBanner() {
  const { openModal } = useLeadFormModal();

  return (
    <section
      className={`${styles.ecommerceBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby="ecommerce-banner-heading"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          <AnimateOnView variant="fadeUp" className={styles.contentCol}>
            <h2 id="ecommerce-banner-heading" className={styles.headline}>
              <span className={styles.headlineAccent}>Ecommerce</span>
              <br />
              <span className={styles.headlinePlain}>App Development</span>
            </h2>
            <p className={`${styles.lead} text-neutral-400`}>
              Expand your business globally and increase your revenue tenfold on your own eCommerce marketplace.
            </p>

            <form
              className={`mt-8 w-full max-w-[520px] ${styles.emailSignupForm}`}
              action="#"
              method="post"
              aria-label="Ecommerce email signup"
              onSubmit={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <div
                className="bannerEmailShell flex w-full flex-col gap-2 rounded-2xl border border-[#353539] bg-[#0a0d12] p-3 shadow-[0_0_0_9px_rgba(253,247,236,0.03)] min-[480px]:min-h-[56px] min-[480px]:flex-row min-[480px]:flex-nowrap min-[480px]:items-stretch min-[480px]:gap-2 min-[480px]:rounded-full min-[480px]:p-0 min-[480px]:py-1.5 min-[480px]:pl-5"
                role="group"
              >
                <div className="flex min-h-[44px] min-w-0 flex-1 items-center gap-2 min-[480px]:min-h-0">
                  <Image
                    src={PEN_ICON}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0 self-center object-contain"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    required
                    className={styles.emailField}
                    autoComplete="email"
                  />
                </div>
                <GreenButton
                  type="submit"
                  className="w-full shrink-0 min-[480px]:w-auto submit"
                >
                  Get Started
                </GreenButton>
              </div>
            </form>
          </AnimateOnView>

          <AnimateOnView
            variant="fadeLeft"
            className={styles.visualCol}
            delayMs={120}
          >
            <div className={styles.visualRoot}>
              <div className={styles.visualFrame}>
                <div
                  className={`${styles.visualFigure} ${animateStyles.imageEase}`}
                >
                  <ImageWithSkeleton
                    src={HERO}
                    alt="Ecommerce app mockups on phones"
                    width={700}
                    height={761}
                    sizes="(max-width: 767px) min(92vw, 520px), (max-width: 1023px) 52vw, min(700px, 45vw)"
                    className="w-full max-w-full select-none object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    fetchPriority="high"
                    darkBackground
                    wrapClassName="block w-full max-w-full"
                  />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
