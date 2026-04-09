import styles from "./MarqueeSliderSection.module.css";

const SEGMENTS = [
  "Multiple campaigns",
  "User friendly",
  "Advanced analytics",
];

function SlideItems({ slides, idPrefix }) {
  return (
    <>
      {slides.map(({ id, text }) => (
        <div key={`${idPrefix}-${id}`} className={styles.slide}>
          <span className={styles.segmentText}>{text}</span>
          <span className={styles.dot} aria-hidden>
            •
          </span>
        </div>
      ))}
    </>
  );
}

export default function MarqueeSliderSection() {
  const slides = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    text: SEGMENTS[i % SEGMENTS.length],
  }));

  return (
    <div className={styles.outer}>
      <div className={styles.strip}>
        <div className={styles.marqueeViewport}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeGroup}>
              <SlideItems slides={slides} idPrefix="a" />
            </div>
            <div className={styles.marqueeGroup} aria-hidden>
              <SlideItems slides={slides} idPrefix="b" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
