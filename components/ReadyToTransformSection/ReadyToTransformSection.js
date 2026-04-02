import Image from "next/image";
import Link from "next/link";
import styles from "./ReadyToTransformSection.module.css";

const CTA_IMAGE = "/assets/images-webp/ready-to-transform/digitalsolution-3.png";
const SHADOW_IMAGE = "/assets/images-webp/ready-to-transform/shadow-1.png";

export default function ReadyToTransformSection() {
  return (
    <section
      className="relative w-full"
      aria-labelledby="ready-heading"
    >
      <div className={styles.shadowLayer} aria-hidden>
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={800}
          height={800}
          className="h-auto max-h-[min(70vh,800px)] w-auto max-w-[min(100vw,800px)] object-contain object-top select-none"
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-[560px] lg:max-w-none">
          <span className="mb-5 inline-flex rounded-full bg-[#2563eb] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm">
            Ready To Transform
          </span>
          <h2
            id="ready-heading"
            className="text-balance text-[1.65rem] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.05rem] lg:text-[2.35rem]"
          >
            Empower Your Business With Cutting Edge{" "}
            <span className="text-[#2563eb]">Digital Solutions</span>
          </h2>
          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
            From ideation to deployment — let&apos;s turn your vision into an
            app that disrupts your industry.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#2563eb] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.6)] sm:px-10 sm:py-4 sm:text-[16px]"
          >
            Book Free Consultation
          </Link>
        </div>

        <div
          className={`relative mx-auto w-full max-w-[540px] p-6 sm:p-8 lg:max-w-none lg:p-10 ${styles.visualCard}`}
        >
          <div className="relative mx-auto aspect-[4/5] w-[85%] max-w-[420px] overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={CTA_IMAGE}
              alt="Consultation preview on mobile"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 42vw, 380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
