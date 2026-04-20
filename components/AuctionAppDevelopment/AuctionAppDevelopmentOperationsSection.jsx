import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import GreenButton from "@/components/GreenButton/GreenButton";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { AUCTION_APP_DEVELOPMENT_OPERATIONS } from "@/lib/auctionAppDevelopmentOperations";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./AuctionAppDevelopmentOperationsSection.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 =
  "title text-balance break-words text-neutral-900 [&_span.block]:leading-[1.12]";
const THEME_LEAD =
  "mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]";

function CheckBullet() {
  return (
    <span className={pageStyles.check} aria-hidden>
      ✓
    </span>
  );
}

function Headline({ id, lines }) {
  return (
    <h2 id={id} className={THEME_H2}>
      {lines.map((line) => {
        if (line.parts) {
          return (
            <span key={line.key} className="block">
              {line.parts.map((p, i) => (
                <span key={i} className={p.green ? "text-[#70AA26]" : undefined}>
                  {p.text}
                </span>
              ))}
            </span>
          );
        }
        return (
          <span
            key={line.key}
            className={`block ${line.green ? "text-[#70AA26]" : ""}`}
          >
            {line.text}
          </span>
        );
      })}
    </h2>
  );
}

export default function AuctionAppDevelopmentOperationsSection() {
  const { eyebrow, headlineLines, body, bullets, cta, image } =
    AUCTION_APP_DEVELOPMENT_OPERATIONS;

  const headingId = "auction-operations-heading";

  const textBlock = (
    <div>
      <span className={THEME_PILL}>{eyebrow}</span>
      <Headline id={headingId} lines={headlineLines} />
      <p className={THEME_LEAD}>{body}</p>
      <ul className={pageStyles.bullets}>
        {bullets.map((b) => (
          <li key={b} className={pageStyles.bullet}>
            <CheckBullet />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <GreenButton href="/contact" focusOn="light" className="mt-6 max-[576px]:w-fit">
        {cta}
      </GreenButton>
    </div>
  );

  const imageBlock = (
    <div className={pageStyles.imageCard}>
      <div
        className={`relative w-full min-h-[200px] bg-transparent ${pageStyles.splitImageNarrow}`}
      >
        <ImageWithSkeleton
          src={image}
          alt="Auction app mockups showing lots, bidding, and seller home screens"
          width={1600}
          height={1000}
          className="h-auto w-full object-contain object-center mix-blend-multiply"
          sizes="(max-width: 1023px) min(90vw, 380px), 380px"
          skeletonClassName="rounded-[1.25rem]"
          wrapClassName="block min-h-[200px] w-full"
        />
      </div>
    </div>
  );

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={`${pageStyles.inner} auctionOperationsInnerFlush`}>
        <div
          className={`${pageStyles.split} ${pageStyles.splitStackFlipSm}`}
        >
          <AnimateOnView variant="fadeUp">{imageBlock}</AnimateOnView>
          <AnimateOnView variant="fadeUp" delayMs={80}>
            {textBlock}
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
