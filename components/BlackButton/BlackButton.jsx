import Link from "next/link";

/**
 * Black pill CTA — ripple + hover face from `app/globals.css`
 * (`.btn` + `.site-btn-motion` + `.btn-dark`).
 */
const motionBase =
  "btn btn-dark site-btn-motion flex shrink-0 items-center justify-center rounded-full border-0 text-[15px] font-semibold leading-none text-white focus:outline-none active:brightness-95";

const FOCUS_ON = {
  dark: "focus-visible:ring-2 focus-visible:ring-white/35",
  light: "focus-visible:ring-2 focus-visible:ring-[#70AA26]/35",
};

const SIZE = {
  md: "min-h-[48px] px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] min-[480px]:min-h-0",
  none: "",
  compact:
    "self-stretch px-4 max-[479px]:min-h-[48px] max-[479px]:w-full max-[479px]:py-[0.65rem]",
  modal: "min-h-0 px-8 py-3",
};

export default function BlackButton({
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
