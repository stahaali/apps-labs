import Image from "next/image";
import styles from "./ClientLogos.module.css";
const PRIMARY = "#4D5DFB";

const TOP_ROW = [
  { src: "/assets/images-webp/our-clients/client-1.png", name: "PayPal" },
  { src: "/assets/images-webp/our-clients/client-2.png", name: "Spotify" },
  { src: "/assets/images-webp/our-clients/client-3.png", name: "SHOPBOT" },
  { src: "/assets/images-webp/our-clients/client-4.png", name: "Slack" },
  { src: "/assets/images-webp/our-clients/client-5.png", name: "Envato" },
];

const BOTTOM_ROW = [
  { src: "/assets/images-webp/our-clients/client-6.png", name: "jQuery" },
  { src: "/assets/images-webp/our-clients/client-7.png", name: "WooCommerce" },
  { src: "/assets/images-webp/our-clients/client-8.png", name: "ThemeForest" },
];

function LogoCard({ src, name }) {
  return (
    <div className="flex h-[76px] w-[min(148px,28vw)] shrink-0 items-center justify-center rounded-2xl bg-white">
      <Image
        src={src}
        alt={name}
        width={220}
        height={100}
        sizes="(max-width: 740px) 38vw, 240px"
        className="h-auto max-h-10 w-auto max-w-[120px] object-contain"
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span
            className="inline-flex rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs"
            style={{ backgroundColor: PRIMARY }}
          >
            OurClients
          </span>
          <h2
            id="client-logos-heading"
            className="mt-6 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl md:leading-[1.1]"
          >
            We Have Made{" "}
            <span style={{ color: PRIMARY }}>Them Taste Success</span>
          </h2>
          <div className="mt-10 flex w-full max-w-5xl flex-col items-center gap-4 sm:mt-12">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {TOP_ROW.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
