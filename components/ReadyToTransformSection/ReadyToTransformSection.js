import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import animateStyles from "@/components/AnimateOnView/AnimateOnView.module.css";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import styles from "./ReadyToTransformSection.module.css";

const CTA_IMAGE = "/assets/images-webp/ready-to-transform/digitalsolution-4.png";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.png";

export default function ReadyToTransformSection() {
  return (
    <section
      className={`relative w-full ${styles.section}`}
      aria-labelledby="ready-heading"
    >
      <div className={`${styles.shadowLayer} hidden sm:block`} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={800}
          height={800}
          className="h-auto max-h-[min(70vh,800px)] w-auto max-w-[min(100vw,800px)] object-contain object-top select-none"
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-4 sm:px-6 min-[768px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] min-[768px]:gap-10 min-[768px]:px-6 lg:gap-14 lg:px-8 xl:gap-16">
        <AnimateOnView variant="fadeUp" className="max-w-[560px] min-[768px]:max-w-none">
          <span className="mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Ready To Transform
          </span>
          <h2
            id="ready-heading"
            className="title text-balance text-neutral-900"
          >
            Empower Your Business With Cutting Edge{" "}
            <span className="text-[#70AA26]">Digital Solutions</span>
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            From ideation to deployment — let&apos;s turn your vision into an
            app that disrupts your industry. We partner with you through product
            strategy, UX design, and robust engineering so your users get a
            polished experience on day one. Whether you are validating an MVP
            or scaling an established product, our team helps you ship faster,
            reduce risk, and stay focused on outcomes that move your business
            forward.
          </p>
          <GreenButton
            href="/contact"
            className="mt-9 shadow-[0_4px_14px_-4px_rgba(112,170,38,0.55)] sm:text-[16px]"
          >
            Book Free Consultation
          </GreenButton>
        </AnimateOnView>

        <AnimateOnView
          variant="fadeLeft"
          delayMs={100}
          className={`relative mx-auto w-full max-w-[540px] p-6 sm:p-8 min-[768px]:mx-0 min-[768px]:max-w-none min-[768px]:p-8 lg:p-10 ${styles.visualCard}`}
        >
          <div
            className={`relative mx-auto aspect-[4/5] w-[85%] max-w-[420px] overflow-hidden rounded-2xl bg-neutral-100 ${animateStyles.imageEase}`}
          >
            <ImageWithSkeleton
              src={CTA_IMAGE}
              alt="Consultation preview on mobile"
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 42vw, 380px"
              skeletonClassName="rounded-2xl"
            />
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
