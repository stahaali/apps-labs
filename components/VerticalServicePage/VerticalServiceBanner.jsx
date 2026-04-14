import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import bannerStyles from "@/components/FoodDeliveryBanner/FoodDeliveryBanner.module.css";

const PEN_ICON = "/assets/images-webp/hero-banner/pen-01.png";

function CheckGlyph() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
      <path
        d="M1 4.2L4.2 7.4L10 1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VerticalServiceBanner({
  headingId,
  accent,
  plain,
  lead,
  features,
  image,
  imageAlt,
}) {
  return (
    <section
      className={`${bannerStyles.foodDeliveryBanner} relative z-[1] w-full overflow-hidden`}
      aria-labelledby={headingId}
    >
      <div className={bannerStyles.inner}>
        <div className={bannerStyles.grid}>
          <AnimateOnView variant="fadeUp" className={bannerStyles.contentCol}>
            <h1 id={headingId} className={bannerStyles.headline}>
              <span className={bannerStyles.headlineAccent}>{accent}</span>
              <br />
              <span className={bannerStyles.headlinePlain}>{plain}</span>
            </h1>
            <p className={bannerStyles.lead}>{lead}</p>

            <div className={bannerStyles.features} role="list">
              {features.map((label) => (
                <div key={label} className={bannerStyles.featureItem} role="listitem">
                  <span className={bannerStyles.checkBubble} aria-hidden>
                    <CheckGlyph />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <form
              className="mt-8 w-full max-w-[520px]"
              action="#"
              method="post"
              aria-label="Email signup"
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
                    aria-hidden
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    required
                    className={bannerStyles.emailField}
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

          <AnimateOnView variant="fadeLeft" className={bannerStyles.visualCol} delayMs={120}>
            <div className={bannerStyles.visualRoot}>
              <div className={bannerStyles.visualFrame}>
                <div className={`${bannerStyles.visualFigure} ${animateStyles.imageEase}`}>
                  <ImageWithSkeleton
                    src={image}
                    alt={imageAlt}
                    width={400}
                    height={435}
                    sizes="(max-width: 767px) min(90vw, 400px), 400px"
                    className="max-w-[400px] select-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    fetchPriority="high"
                    darkBackground
                    wrapClassName="block w-full max-w-[400px]"
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
