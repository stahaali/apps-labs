import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { ECOMMERCE_STORE_SETUP_BLOCK } from "@/lib/ecommerceAppDevelopmentFreeSetup";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import localStyles from "./EcommerceAppDevelopmentFreeSetupSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 =
  "title text-balance break-words text-neutral-900";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function RowImage({ src, alt }) {
  return (
    <div
      className={`${pageStyles.imageCard} ${localStyles.imageWrap} w-full min-w-0`}
    >
      <div className="relative w-full min-h-[200px] bg-transparent">
        <ImageWithSkeleton
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="h-auto w-full max-w-full object-contain object-center"
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, 500px"
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full max-w-full"
        />
      </div>
    </div>
  );
}

export default function EcommerceAppDevelopmentFreeSetupSection() {
  const rowSetup = ECOMMERCE_STORE_SETUP_BLOCK;

  const setupText = (
    <div className="lg:max-w-xl">
      <span className={THEME_PILL}>{rowSetup.eyebrow}</span>
      <h2
        id="ecommerce-store-setup-heading"
        className={`${THEME_H2} ${localStyles.heading}`}
      >
        <span className="block">{rowSetup.headlineLine1}</span>
        <span className="block text-[#70AA26]">{rowSetup.headlineLine2}</span>
      </h2>
      <p className={THEME_LEAD}>{rowSetup.body}</p>
      <GreenButton href="/contact" focusOn="light" className="mt-6 max-[576px]:w-fit">
        {rowSetup.cta}
      </GreenButton>
    </div>
  );

  return (
    <section
      className={localStyles.sectionShell}
      aria-labelledby="ecommerce-store-setup-heading"
    >
      <div className={pageStyles.inner}>
        <div className={localStyles.rowsWrap}>
          <div
            className={`${pageStyles.split} ${pageStyles.splitStackFlipSm} ${localStyles.splitTopAlign}`}
          >
            <div className={`${localStyles.splitCol} ${localStyles.imageCol}`}>
              <AnimateOnView variant="fadeUp">
                <RowImage
                  src={rowSetup.image}
                  alt="Team at laptop with floating Products, Orders, and Payments cards"
                />
              </AnimateOnView>
            </div>
            <div className={localStyles.splitCol}>
              <AnimateOnView variant="fadeUp" delayMs={80}>
                {setupText}
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
