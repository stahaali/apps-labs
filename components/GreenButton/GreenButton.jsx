import Link from "next/link";

/**
 * Brand green pill CTA — fill + ripple + hover/active from `app/globals.css`
 * (`.btn.btn-banner` + `.site-btn-motion`).
 */
const motionBase =
  "btn btn-banner site-btn-motion inline-flex shrink-0 items-center justify-center rounded-full border-0 text-[15px] font-semibold leading-none text-white hover:brightness-105 hover:shadow-[0_14px_32px_-14px_rgba(112,170,38,0.45)] focus:outline-none active:brightness-95";

const FOCUS_ON = {
  dark: "focus-visible:ring-2 focus-visible:ring-white/35",
  light: "focus-visible:ring-2 focus-visible:ring-[#70AA26]/35",
};

const SIZE = {
  /** Hero / forms: matches `--cta-button-pad-*` + mobile min height */
  md: "min-h-[48px] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] min-[480px]:min-h-0",
  /** Parent supplies padding / min-height (e.g. pricing cards) */
  none: "",
  /** Wider pill on narrow screens (Food Delivery V1 hero) */
  compact:
    "self-stretch px-4 max-[479px]:min-h-[48px] max-[479px]:w-full max-[479px]:py-[0.65rem]",
  /** Lead modal success / tight CTAs */
  modal: "min-h-0 px-8 py-3",
};

export default function GreenButton({
  children,
  className = "",
  href,
  type = "button",
  size = "md",
  focusOn = "dark",
  ...rest
}) {
  const focusClass = FOCUS_ON[focusOn] ?? FOCUS_ON.dark;
  const sizeClass = SIZE[size] ?? SIZE.md;
  const classes = [motionBase, focusClass, sizeClass, className].filter(Boolean).join(" ");

  const label = <span className="relative z-[1] text-white">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {label}
    </button>
  );
}
