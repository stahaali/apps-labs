"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  sanitizeAndValidateLeadForm,
  sanitizeEmail,
  sanitizeEmailInput,
  sanitizeMessage,
  sanitizeMessageInput,
  sanitizeName,
  sanitizeNameInput,
  sanitizePhone,
} from "@/lib/leadFormValidation";
import GreenButton from "@/components/GreenButton/GreenButton";

const PRIMARY = "#70AA26";
const PRIMARY_SOFT = "rgba(112, 170, 38, 0.12)";
const FIELD_ORDER = ["name", "email", "phone", "message"];
const DIALOG_MS = 220;

const initialValues = () => ({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const COPY = {
  titleBefore: "Start your ",
  titleAccent: "project",
  description:
    "Share a few details—we'll follow up with scope options, timeline, and next steps.",
  messagePlaceholder: "How can we help? (goals, timeline, platforms…)",
  submitLabel: "Send message",
  successTitle: "Thanks — we've got your details.",
  successEmailIntro: "We'll reach out shortly. You can also email",
};

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

function FieldShell({ icon: Icon, children, error, fieldId, iconTop, errorIdPrefix }) {
  const errId = `${errorIdPrefix}-${fieldId}`;
  const rowAlign = iconTop ? "items-start" : "items-center";

  return (
    <div className="grid gap-1.5">
      <div
        className={`relative flex h-fit ${rowAlign} gap-2 rounded-2xl border bg-white/95 p-2 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] transition-[border-color,box-shadow] ${
          error
            ? "border-red-300 ring-2 ring-red-100"
            : "border-neutral-200/95 focus-within:border-[#70AA26]/45 focus-within:ring-2 focus-within:ring-[#70AA26]/18"
        }`}
      >
        <span
          className={`pointer-events-none z-[1] flex min-h-[2.75rem] w-11 shrink-0 items-center justify-center rounded-lg sm:min-h-[3rem] sm:w-12 ${
            error ? "bg-red-50 text-red-500" : "text-[#5a8a22]"
          }`}
          style={!error ? { backgroundColor: PRIMARY_SOFT } : undefined}
          aria-hidden
        >
          <Icon className="h-[18px] w-[18px] shrink-0 opacity-90" />
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

/** Centered popup (not the right-slide drawer) — header “Get Started” only. */
export default function HeaderLeadFormDialog({ open, onClose }) {
  const errorIdPrefix = "header-lead-err";
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset on open
    setSent(false);
    setValues(initialValues());
    setErrors({});
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t0 = window.setTimeout(() => {
        setVisible(false);
        setSent(false);
        setValues(initialValues());
        setErrors({});
      }, 0);
      const t1 = window.setTimeout(() => setMounted(false), DIALOG_MS);
      return () => {
        window.clearTimeout(t0);
        window.clearTimeout(t1);
      };
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount shell before transition
    setMounted(true);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mounted, onClose]);

  useEffect(() => {
    if (!visible || sent) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector("input")?.focus();
    }, DIALOG_MS + 30);
    return () => window.clearTimeout(t);
  }, [visible, sent]);

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
      const firstKey = FIELD_ORDER.find((k) => nextErrors[k]);
      setErrors(firstKey ? { [firstKey]: nextErrors[firstKey] } : nextErrors);
      window.requestAnimationFrame(() => {
        const root = panelRef.current;
        if (!firstKey || !root) return;
        const el = root.querySelector(`[name="${firstKey}"]`);
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10050] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-200 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`relative z-10 flex max-h-[min(90dvh,720px)] w-full max-w-[440px] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-[#fdfcfa] shadow-[0_24px_64px_-16px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.05] transition-[opacity,transform] duration-200 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="relative shrink-0 border-b border-[#70AA26]/18 bg-gradient-to-br from-[#fff8f2] via-white to-[#f5f3ef] px-5 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 0%, ${PRIMARY_SOFT} 0%, transparent 45%)`,
          }}
        >
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="text-[1.25rem] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[1.4rem]"
              >
                {COPY.titleBefore}
                <span style={{ color: PRIMARY }}>{COPY.titleAccent}</span>
              </h2>
              <p
                id={descId}
                className="mt-2 text-[13px] leading-relaxed text-neutral-600 sm:text-[14px]"
              >
                {COPY.description}
              </p>
            </div>
            <button
              type="button"
              className="site-btn-motion shrink-0 rounded-full border border-neutral-200/80 bg-white/90 p-2 text-neutral-500 shadow-sm hover:bg-neutral-50 hover:text-neutral-900 active:brightness-95"
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

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#faf9f6] to-white px-5 py-5 sm:px-6 sm:py-6">
          {sent ? (
            <div className="py-3 text-center">
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
              <p className="mt-4 text-[16px] font-semibold text-neutral-900">{COPY.successTitle}</p>
              <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-relaxed text-neutral-600">
                {COPY.successEmailIntro}{" "}
                <a
                  href="mailto:info@apexlabs.co"
                  className="font-semibold text-[#70AA26] underline decoration-[#70AA26]/35 underline-offset-2"
                >
                  info@apexlabs.co
                </a>
                .
              </p>
              <GreenButton
                type="button"
                size="modal"
                focusOn="light"
                className="mt-6 shadow-sm"
                onClick={onClose}
              >
                Close
              </GreenButton>
            </div>
          ) : (
            <form className="grid gap-3.5" onSubmit={handleSubmit} noValidate>
              <FieldShell
                icon={UserIcon}
                fieldId="name"
                error={errors.name}
                errorIdPrefix={errorIdPrefix}
              >
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
                  aria-describedby={errors.name ? `${errorIdPrefix}-name` : undefined}
                />
              </FieldShell>

              <FieldShell
                icon={MailIcon}
                fieldId="email"
                error={errors.email}
                errorIdPrefix={errorIdPrefix}
              >
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
                  aria-describedby={errors.email ? `${errorIdPrefix}-email` : undefined}
                />
              </FieldShell>

              <FieldShell
                icon={PhoneIcon}
                fieldId="phone"
                error={errors.phone}
                errorIdPrefix={errorIdPrefix}
              >
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
                  aria-describedby={errors.phone ? `${errorIdPrefix}-phone` : undefined}
                />
              </FieldShell>

              <FieldShell
                icon={MessageIcon}
                fieldId="message"
                error={errors.message}
                iconTop
                errorIdPrefix={errorIdPrefix}
              >
                <textarea
                  name="message"
                  placeholder={COPY.messagePlaceholder}
                  rows={4}
                  className={`${inputInner} min-h-[100px] resize-y py-2`}
                  value={values.message}
                  onChange={(e) => updateField("message", sanitizeMessageInput(e.target.value))}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${errorIdPrefix}-message` : undefined}
                />
              </FieldShell>

              <GreenButton
                type="submit"
                size="md"
                focusOn="light"
                className="mt-1 w-full py-3.5 text-[15px] font-bold shadow-sm sm:py-3"
              >
                {COPY.submitLabel}
              </GreenButton>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
