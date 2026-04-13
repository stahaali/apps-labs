import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView/AnimateOnView";
import pageStyles from "@/components/FoodDeliveryV1/FoodDeliveryV1.module.css";
import styles from "./FoodDeliveryV1HappyClients.module.css";

const THEME_PILL =
  "mb-5 inline-flex rounded-full bg-[#70AA26] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm";
const THEME_H2 = "title text-balance break-words text-neutral-900";
const SECTION_HEAD = "mx-auto max-w-[900px] text-center";
const HEADING_ACCENT = "text-[#70AA26]";

export default function FoodDeliveryV1HappyClients({ content }) {
  const { eyebrow, headline, cards } = content;
  const headingId = "fd-v1-happy-clients-heading";

  return (
    <section
      className={pageStyles.sectionWhite}
      aria-labelledby={headingId}
    >
      <div className={pageStyles.inner}>
        <AnimateOnView variant="fadeUp" className={SECTION_HEAD}>
          <span className={THEME_PILL}>{eyebrow}</span>
          <h2 id={headingId} className={THEME_H2}>
            {headline.before}
            <span className={HEADING_ACCENT}>{headline.highlight}</span>
            {headline.after}
          </h2>
        </AnimateOnView>
      </div>

      <div className={styles.cardsTrack}>
        <div className={styles.cardsRow} role="list">
          {cards.map((card, i) => (
            <AnimateOnView
              key={card.venue}
              variant="fadeUp"
              delayMs={i * 70}
              className={`${styles.card} block`}
              role="listitem"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className={styles.cardImage}
                sizes="(max-width: 1023px) 78vw, 22vw"
              />
              <div className={styles.cardOverlay} aria-hidden />
              <div className={styles.cardCopy}>
                <p className={styles.cardStat}>{card.stat}</p>
                <p className={styles.cardVenue}>{card.venue}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
