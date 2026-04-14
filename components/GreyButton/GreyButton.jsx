import Link from "next/link";

import styles from "./GreyButton.module.css";

/**
 * Dark pill CTA for dark banners — grey fill, white label, subtle border.
 * Hover/active live in `GreyButton.module.css` so they aren’t lost to Tailwind / `.site-btn-motion` cascade.
 */
export default function GreyButton({
  children,
  className = "",
  href,
  type = "button",
  ...rest
}) {
  const classes = [styles.greyBtn, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
