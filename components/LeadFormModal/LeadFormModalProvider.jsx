"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  getLeadFieldError,
  sanitizeAndValidateLeadForm,
  sanitizeEmail,
  sanitizeEmailInput,
  sanitizeMessage,
  sanitizeMessageInput,
  sanitizeName,
  sanitizeNameInput,
  sanitizePhone,
} from "@/lib/leadFormValidation";

const LeadFormContext = createContext(null);

const PRIMARY = "#70AA26";
const PRIMARY_SOFT = "rgba(112, 170, 38, 0.12)";

const initialValues = () => ({
  name: "",
  email: "",
  phone: "",
  message: "",
});

function UserIcon({ className }) {
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

function MailIcon({ className }) {
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

function PhoneIcon({ className }) {
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

function MessageIcon({ className }) {
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

function FieldShell({ icon: Icon, children, error, fieldId, iconTop }) {
  const errId = `lead-err-${fieldId}`;
  const iconPosition = iconTop
    ? "left-2 top-2.5 translate-y-0 sm:left-2.5 sm:top-3"
    : "left-2 top-1/2 -translate-y-1/2 sm:left-2.5";

  return (
    <div className="grid gap-1.5">
      <div
        className={`relative h-fit rounded-2xl border bg-white/95 py-1 pl-1 pr-2 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] transition-[border-color,box-shadow] ${
          error
            ? "border-red-300 ring-2 ring-red-100"
            : "border-neutral-200/95 focus-within:border-[#70AA26]/45 focus-within:ring-2 focus-within:ring-[#70AA26]/18"
        }`}
      >
        <span
          className={`pointer-events-none absolute z-[1] flex h-fit w-11 flex-none items-center justify-center rounded-xl py-2.5 sm:w-12 ${
            error ? "bg-red-50 text-red-500" : "text-[#5a8a22]"
          } ${iconPosition}`}
          style={!error ? { backgroundColor: PRIMARY_SOFT } : undefined}
          aria-hidden
        >
          <Icon className="h-[18px] w-[18px] shrink-0 opacity-90" />
        </span>
        <div className="min-w-0 pl-[3.25rem] pr-1 pt-0.5 pb-0.5 sm:pl-[3.65rem] sm:pr-2">
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

function LeadFormModal({ open, onClose }) {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setSent(false);
      setValues(initialValues());
      setErrors({});
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || sent) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector("input")?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open, sent]);

  const updateField = useCallback((key, v) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const handleBlur = useCallback(
    (key) => {
      const merged = { ...values };
      if (key === "name") merged.name = sanitizeName(values.name);
      if (key === "email") merged.email = sanitizeEmail(sanitizeEmailInput(values.email));
      if (key === "phone") merged.phone = sanitizePhone(values.phone);
      if (key === "message") merged.message = sanitizeMessage(sanitizeMessageInput(values.message));

      setValues({
        name: sanitizeName(merged.name),
        email: sanitizeEmail(sanitizeEmailInput(merged.email)),
        phone: sanitizePhone(merged.phone),
        message: sanitizeMessage(sanitizeMessageInput(merged.message)),
      });

      const sanitized = {
        name: sanitizeName(merged.name),
        email: sanitizeEmail(sanitizeEmailInput(merged.email)),
        phone: sanitizePhone(merged.phone),
        message: sanitizeMessage(sanitizeMessageInput(merged.message)),
      };
      const err = getLeadFieldError(key, sanitized);
      setErrors((prev) => {
        const next = { ...prev };
        if (err) next[key] = err;
        else delete next[key];
        return next;
      });
    },
    [values],
  );

  const inputInner =
    "w-full border-0 bg-transparent py-2.5 text-[14px] text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 sm:text-[15px]";

  function handleSubmit(e) {
    e.preventDefault();
    const { valid, errors: nextErrors, data } = sanitizeAndValidateLeadForm(values);
    setValues({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    if (!valid) {
      setErrors(nextErrors);
      const firstKey = Object.keys(nextErrors)[0];
      const el = panelRef.current?.querySelector(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[320] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-[3px] transition-opacity"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 h-fit max-h-[min(92vh,880px)] w-full max-w-[460px] overflow-x-hidden overflow-y-auto rounded-[1.35rem] border border-white/80 bg-white shadow-[0_8px_0_rgba(112,170,38,0.14),0_32px_64px_-20px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="relative border-b border-[#70AA26]/15 bg-gradient-to-br from-[#f3f9ec] via-white to-[#f0f4ff] px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 0%, ${PRIMARY_SOFT} 0%, transparent 45%)`,
          }}
        >
          <div
            className="pointer-events-none absolute right-6 top-5 h-16 w-16 rounded-full opacity-[0.35]"
            style={{
              background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)`,
              filter: "blur(12px)",
            }}
            aria-hidden
          />
          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span
                className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm sm:text-[11px]"
                style={{ backgroundColor: PRIMARY }}
              >
                Get in touch
              </span>
              <h2
                id={titleId}
                className="mt-3 text-[1.35rem] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[1.5rem]"
              >
                Start your <span style={{ color: PRIMARY }}>project</span>
              </h2>
              <p
                id={descId}
                className="mt-2 max-w-[32rem] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]"
              >
                Share a few details—we&apos;ll follow up with scope options, timeline, and
                next steps. All fields are validated and secured on your device before send.
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-neutral-200/80 bg-white/90 p-2 text-neutral-500 shadow-sm transition-[color,box-shadow] hover:text-neutral-900 hover:shadow-md"
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-neutral-50/80 to-white px-5 py-6 sm:px-7 sm:py-7">
          {sent ? (
            <div className="py-4 text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_-8px_rgba(112,170,38,0.65)]"
                style={{ backgroundColor: PRIMARY }}
                aria-hidden
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-5 text-[16px] font-semibold text-neutral-900">
                Thanks — we&apos;ve got your details.
              </p>
              <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-relaxed text-neutral-600">
                We&apos;ll reach out shortly. You can also email{" "}
                <a
                  href="mailto:info@apexlabs.co"
                  className="font-semibold text-[#70AA26] underline decoration-[#70AA26]/35 underline-offset-2"
                >
                  info@apexlabs.co
                </a>
                .
              </p>
              <button
                type="button"
                className="mt-8 rounded-full border-0 bg-[#70AA26] px-8 py-3 text-[15px] font-semibold text-white shadow-[0_4px_14px_-4px_rgba(112,170,38,0.65)] transition-[filter,transform] hover:brightness-105 active:scale-[0.98]"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
              <FieldShell icon={UserIcon} fieldId="name" error={errors.name}>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  className={inputInner}
                  value={values.name}
                  onChange={(e) => updateField("name", sanitizeNameInput(e.target.value))}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "lead-err-name" : undefined}
                />
              </FieldShell>

              <FieldShell icon={MailIcon} fieldId="email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Work email"
                  className={inputInner}
                  value={values.email}
                  onChange={(e) => updateField("email", sanitizeEmailInput(e.target.value))}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "lead-err-email" : undefined}
                />
              </FieldShell>

              <FieldShell icon={PhoneIcon} fieldId="phone" error={errors.phone}>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Phone number"
                  className={inputInner}
                  value={values.phone}
                  onChange={(e) => updateField("phone", sanitizePhone(e.target.value))}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "lead-err-phone" : undefined}
                />
              </FieldShell>

              <FieldShell icon={MessageIcon} fieldId="message" error={errors.message} iconTop>
                <textarea
                  name="message"
                  placeholder="How can we help? (goals, timeline, platforms…)"
                  rows={4}
                  className={`${inputInner} min-h-[108px] resize-y py-2`}
                  value={values.message}
                  onChange={(e) => updateField("message", sanitizeMessageInput(e.target.value))}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "lead-err-message" : undefined}
                />
              </FieldShell>

              <button
                type="submit"
                className="mt-1 w-full rounded-full border-0 bg-gradient-to-b from-[#7eb832] to-[#5f8a1f] py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_-4px_rgba(112,170,38,0.55)] transition-[filter,transform] hover:brightness-105 active:scale-[0.99] sm:py-3"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.08)" }}
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function LeadFormModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <LeadFormContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadFormModal open={open} onClose={closeModal} />
    </LeadFormContext.Provider>
  );
}

export function useLeadFormModal() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadFormModal must be used within LeadFormModalProvider");
  }
  return ctx;
}
