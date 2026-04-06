import Image from "next/image";
import styles from "./ClientLogos.module.css";
const PRIMARY = "#70AA26";
const CLIENT_IMAGES_BASE = "/assets/images-webp/our-clients";
const SHADOW_IMAGE = "/assets/images-webp/shadow-1.png";
const SHADOW_WIDTH = 700;

const TOP_ROW = [
  { src: `${CLIENT_IMAGES_BASE}/client-1.png`, name: "PayPal" },
  { src: `${CLIENT_IMAGES_BASE}/client-2.png`, name: "Spotify" },
  { src: `${CLIENT_IMAGES_BASE}/client-3.png`, name: "SHOPBOT" },
  { src: `${CLIENT_IMAGES_BASE}/client-4.png`, name: "Slack" },
  { src: `${CLIENT_IMAGES_BASE}/client-5.png`, name: "Envato" },
];

const BOTTOM_ROW = [
  { src: `${CLIENT_IMAGES_BASE}/client-6.png`, name: "jQuery" },
  { src: `${CLIENT_IMAGES_BASE}/client-7.png`, name: "WooCommerce" },
  { src: `${CLIENT_IMAGES_BASE}/client-8.png`, name: "ThemeForest" },
];

const ALL_LOGOS = [...TOP_ROW, ...BOTTOM_ROW];

function LogoCard({ src, name }) {
  return (
    <div className="relative flex h-[76px] w-full min-w-0 items-center justify-center overflow-hidden rounded-xl bg-white px-0 min-[768px]:overflow-visible min-[768px]:rounded-2xl">
      <Image
        src={src}
        alt={name}
        width={220}
        height={100}
        sizes="(max-width: 767px) 40vw, 140px"
        className="min-w-0 h-auto w-[60%] max-w-[60%] object-contain object-center"
      />
    </div>
  );
}

export default function ClientLogosSection() {
  return (
    <section
      className={`${styles.clientLogos} relative overflow-hidden`}
      aria-labelledby="client-logos-heading"
    >
      <div
        className={`${styles.sectionShadow} hidden sm:block`}
        aria-hidden
      >
        <Image
          src={SHADOW_IMAGE}
          alt=""
          width={SHADOW_WIDTH}
          height={SHADOW_WIDTH}
          className={styles.sectionShadowImg}
          sizes="(max-width: 767px) 80vw, 720px"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span
            className="inline-flex rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:px-5 sm:py-1.5 sm:text-xs"
            style={{ backgroundColor: PRIMARY }}
          >
            OurClients
          </span>
          <h2
            id="client-logos-heading"
            className="site-title mt-4 max-w-4xl text-balance text-neutral-900 sm:mt-6"
            style={{
              fontSize:
                "clamp(1.35rem, 5.2vw + 0.35rem, var(--site-title-size))",
            }}
          >
            We Have Made{" "}
            <span style={{ color: PRIMARY }}>Them Taste Success</span>
          </h2>
          {/* Below 768px: 2-column grid (all logos) */}
          <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-2 sm:max-w-lg sm:gap-3 min-[768px]:hidden">
            {ALL_LOGOS.map((logo) => (
              <LogoCard key={logo.name} {...logo} />
            ))}
          </div>
          {/* 768px+: fixed 5 + 3 rows (screenshot) — grid so row 1 never wraps */}
          <div className="mt-8 hidden w-full max-w-[min(100%,40rem)] flex-col items-center gap-3 px-2 min-[768px]:flex min-[768px]:mt-10 lg:mt-12 lg:max-w-5xl lg:gap-4 lg:px-4">
            <div className="grid w-full grid-cols-5 gap-2 sm:gap-2.5 lg:gap-4">
              {TOP_ROW.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </div>
            <div className="grid w-full max-w-[min(100%,22.5rem)] grid-cols-3 gap-2 sm:gap-2.5 lg:max-w-[26rem] lg:gap-4">
              {BOTTOM_ROW.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
