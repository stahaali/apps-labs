"use client";

export const PRIMARY = "#70AA26";
export const PRIMARY_SOFT = "rgba(112, 170, 38, 0.12)";

export function UserIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 6-10 7L2 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FieldShell({
  icon: Icon,
  children,
  error,
  fieldId,
  iconTop,
  errorIdPrefix = "lead-err",
  compact = false,
}) {
  const errId = `${errorIdPrefix}-${fieldId}`;
  const rowAlign = iconTop ? "items-start" : "items-center";

  return (
    <div className={compact ? "grid gap-1" : "grid gap-1.5"}>
      <div
        className={`relative flex h-fit ${rowAlign} bg-white/95 ${
          compact
            ? "gap-1.5 rounded-xl border-0 p-1.5 transition-[box-shadow,ring]"
            : "gap-2 rounded-2xl border p-2 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] transition-[border-color,box-shadow]"
        } ${
          error
            ? compact
              ? "shadow-none ring-2 ring-red-300"
              : "border-red-300 ring-2 ring-red-100"
            : compact
              ? "shadow-[0_0_2px_#3a850c,inset_0_0_8px_#bdd8a4] focus-within:shadow-[0_0_4px_#3a850c,inset_0_0_8px_#bdd8a4]"
              : "border-neutral-200/95 focus-within:border-[#70AA26]/45 focus-within:ring-2 focus-within:ring-[#70AA26]/18"
        }`}
      >
        <span
          className={`pointer-events-none z-[1] flex shrink-0 items-center justify-center rounded-lg ${
            compact
              ? "h-9 w-9 sm:h-10 sm:w-10"
              : "min-h-[2.75rem] w-11 sm:min-h-[3rem] sm:w-12"
          } ${error ? "bg-red-50 text-red-500" : "text-[#5a8a22]"}`}
          style={!error ? { backgroundColor: PRIMARY_SOFT } : undefined}
          aria-hidden
        >
          <Icon className={`${compact ? "h-4 w-4" : "h-[18px] w-[18px]"} shrink-0 opacity-90`} />
        </span>
        <div className="min-w-0 flex-1 self-stretch [&_input]:py-0 [&_textarea]:py-1">
          {children}
        </div>
      </div>
      {error ? (
        <p id={errId} className="px-1 text-[12px] font-medium leading-snug text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
