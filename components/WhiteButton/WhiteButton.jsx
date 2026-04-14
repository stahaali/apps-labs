import Link from "next/link";

/**
 * White pill CTA on dark or colored panels — ripple + shadows from `app/globals.css`
 * (`.btn` + `.site-btn-motion`, no `.btn-banner`). Keep `bg-transparent` so `::before` fill shows.
 */
const motionBase =
  "btn site-btn-motion inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent px-[var(--cta-button-pad-x)] py-[var(--cta-button-pad-y)] text-[15px] leading-none shadow-[0_4px_20px_-8px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] hover:brightness-[1.02] focus:outline-none active:brightness-[0.98]";

const FOCUS = {
  /** Header / dark chrome */
  onDark: "focus-visible:ring-2 focus-visible:ring-white/35",
  /** CTA blue card */
  onBlue: "focus-visible:ring-2 focus-visible:ring-white/45",
};

const LABEL = {
  onDark: "relative z-[1] text-[#050505]",
  onBlue: "relative z-[1] text-[#0f172a]",
};

export default function WhiteButton({
  children,
  className = "",
  href,
  type = "button",
  surface = "onDark",
  ...rest
}) {
  const focusClass = FOCUS[surface] ?? FOCUS.onDark;
  const labelClass = LABEL[surface] ?? LABEL.onDark;
  const classes = [motionBase, focusClass, className].filter(Boolean).join(" ");
  const label = <span className={labelClass}>{children}</span>;

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
