/**
 * Compact marks for integration pills (stylized, not official logos).
 */

export default function NutritionAppDevelopmentIntegrationIcon({ id, className = "" }) {
  const cn = `shrink-0 ${className}`;

  switch (id) {
    case "apple-health":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#34C759" />
          <path
            fill="#fff"
            d="M12 7c-.8 0-1.4.4-1.8 1.1-.4-.7-1-1.1-1.8-1.1-1.2 0-2.1 1-2.1 2.3 0 2.6 3.2 5.7 3.9 5.7.7 0 3.9-3.1 3.9-5.7 0-1.3-.9-2.3-2.1-2.3z"
          />
        </svg>
      );
    case "google-fit":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
          <path
            fill="#EA4335"
            d="M12 8.5c-1.2 0-2.2 1-2.2 2.2 0 1.6 2.2 3.8 2.2 3.8s2.2-2.2 2.2-3.8c0-1.2-1-2.2-2.2-2.2z"
          />
          <circle cx="8" cy="11" r="1.4" fill="#FBBC05" />
          <circle cx="16" cy="11" r="1.4" fill="#34A853" />
        </svg>
      );
    case "strava":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#FC4C02" />
          <path fill="#fff" d="M8 17l2.5-8h2.2l3.3 8h-2.1l-.7-2h-3.4l-.7 2H8zm3.3-3.3h2l-1-3.2-1 3.2z" />
        </svg>
      );
    case "garmin":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#007CC3" />
          <path fill="#fff" d="M7 12h2v4H7v-4zm4-3h2v7h-2V9zm4 2h2v5h-2v-5z" />
        </svg>
      );
    case "fitbit":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#00B0B9" />
          <circle cx="9" cy="12" r="2" fill="#fff" />
          <circle cx="15" cy="12" r="2" fill="#fff" />
        </svg>
      );
    case "stripe":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#635BFF" />
          <path fill="#fff" d="M7 10h10v1.2H7V10zm0 2.8h7v1.2H7v-1.2z" opacity="0.95" />
        </svg>
      );
    case "apple-pay":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#000" />
          <path
            fill="#fff"
            d="M15.7 7.2c-.65.75-1.65 1.2-2.65 1.15-.1-1 .35-2 .95-2.65.7-.75 1.75-1.2 2.65-1.15.05 1-.3 1.95-.95 2.65zm.55 8.35c-.05 1.55 1.35 2.3 1.4 2.35-.75 1.1-1.9 1.25-2.3 1.25-1.1.1-2.15-.65-2.7-.65-.55 0-1.4.65-2.3.6-.95-.05-1.75-.55-2.25-1.35-1.9-2.75-.5-6.85 1.35-8.6.75-.7 1.65-1.1 2.55-1.1 1.05 0 1.65.65 2.5.65.8 0 1.3-.65 2.45-.65.85 0 1.75.35 2.5 1.05-2.15 1.2-1.8 4.3.4 5.15z"
          />
        </svg>
      );
    case "google-pay":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
          <circle cx="8.5" cy="12" r="2" fill="#EA4335" />
          <circle cx="12" cy="12" r="2" fill="#FBBC05" />
          <circle cx="15.5" cy="12" r="2" fill="#34A853" />
        </svg>
      );
    case "paypal":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#003087" />
          <path
            fill="#009CDE"
            d="M9.2 16.5h1.4l.6-3.8H9.8c-1.4 0-2.5-.9-2.7-2.2-.2-1.3.7-2.4 2.1-2.4h3.2l-.6 3.8h2.1c1.3 0 2.4.8 2.6 2 .3 1.4-.6 2.6-2 2.6H9.2z"
          />
        </svg>
      );
    case "google-maps":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#fff" />
          <path
            fill="#EA4335"
            d="M12 7c-1.9 0-3.5 1.6-3.5 3.5 0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5C15.5 8.6 13.9 7 12 7zm0 4.8c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z"
          />
          <path fill="#4285F4" d="M12 17.2c-1.2-1.4-2.8-3.6-2.8-5.2 0-1.5 1.3-2.8 2.8-2.8V17.2z" />
        </svg>
      );
    case "meta":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#0668E1" />
          <path
            fill="#fff"
            d="M12 8c-1.2 0-2 .6-2.5 1.5-.5-.9-1.3-1.5-2.5-1.5-1.7 0-3 1.5-3 3.3 0 2.5 3.2 5.2 5.5 5.2 2.3 0 5.5-2.7 5.5-5.2 0-1.8-1.3-3.3-3-3.3-1.2 0-2 .6-2.5 1.5C14 8.6 13.2 8 12 8z"
          />
        </svg>
      );
    case "segment":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#43AF79" />
          <path fill="#fff" d="M12 6L7 18h3l1-3h4l1 3h3L12 6z" />
        </svg>
      );
    case "twilio":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#F22F46" />
          <circle cx="9" cy="12" r="2.5" fill="#fff" />
          <circle cx="15" cy="12" r="2.5" fill="#fff" />
        </svg>
      );
    case "sendgrid":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#1A82E2" />
          <path fill="#fff" d="M6 9h12v1.5H6V9zm0 3h8v1.5H6V12zm0 3h10v1.5H6V15z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="5" fill="#21759B" />
          <circle cx="12" cy="12" r="5" fill="#fff" />
          <circle cx="12" cy="12" r="2.5" fill="#21759B" />
        </svg>
      );
    default:
      return (
        <span
          className={`${cn} grid h-6 w-6 place-items-center rounded-md bg-neutral-200 text-[10px] font-bold text-neutral-600`}
          aria-hidden
        >
          ·
        </span>
      );
  }
}
