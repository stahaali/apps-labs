"use client";

import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
import {
  FieldShell,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PRIMARY,
  PRIMARY_SOFT,
  UserIcon,
} from "@/components/LeadFormModal/LeadFormFieldShell";

const FIELD_ORDER = ["name", "email", "phone", "message"];

/** Right slide-drawer open/close — matches CSS transition duration below */
const DRAWER_TRANSITION_MS = 300;

const initialValues = () => ({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const MODAL_COPY = {
  titleBefore: "Start your ",
  titleAccent: "project",
  titleAfter: "",
  description:
    "Share a few details—we'll follow up with scope options, timeline, and next steps.",
  messagePlaceholder: "How can we help? (goals, timeline, platforms…)",
  submitLabel: "Send message",
  successTitle: "Thanks — we've got your details.",
  successEmailIntro: "We'll reach out shortly. You can also email",
};

export default function LeadFormModal({ open, onClose }) {
  const copy = MODAL_COPY;
  const errorIdPrefix = "lead-err";
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional form reset when opening
    setSent(false);
    setValues(initialValues());
    setErrors({});
  }, [open]);

  useLayoutEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync mount; open is external
      setMounted(true);
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      const closeId = window.setTimeout(() => {
        setPanelVisible(false);
        setSent(false);
        setValues(initialValues());
        setErrors({});
      }, 0);
      const unmountId = window.setTimeout(() => setMounted(false), DRAWER_TRANSITION_MS);
      return () => {
        window.clearTimeout(closeId);
        window.clearTimeout(unmountId);
      };
    }
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPanelVisible(true));
    });
    return () => cancelAnimationFrame(rafId);
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
    if (!panelVisible || sent) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector("input")?.focus();
    }, DRAWER_TRANSITION_MS + 20);
    return () => window.clearTimeout(t);
  }, [panelVisible, sent]);

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
    <div className="fixed inset-0 z-[9999]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 bg-black/65 backdrop-blur-[3px] transition-opacity duration-300 ease-out ${
          panelVisible ? "opacity-100" : "opacity-0"
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
        className={`absolute right-0 top-0 z-10 flex h-full max-h-[100dvh] w-[min(92vw,480px)] max-w-full flex-col overflow-hidden rounded-l-[1.35rem] border-b border-l border-t border-neutral-200/80 bg-[#fdfcfa] shadow-[-16px_0_48px_-12px_rgba(15,23,42,0.32)] ring-1 ring-black/[0.04] transition-transform duration-300 ease-out ${
          panelVisible ? "translate-x-0" : "translate-x-full"
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="relative shrink-0 border-b border-[#70AA26]/18 bg-gradient-to-br from-[#fff8f2] via-white to-[#f5f3ef] px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7"
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
              <h2
                id={titleId}
                className="mt-3 text-[1.35rem] font-bold leading-tight tracking-tight text-neutral-900 sm:text-[1.5rem]"
              >
                {copy.titleBefore}
                <span style={{ color: PRIMARY }}>{copy.titleAccent}</span>
                {copy.titleAfter}
              </h2>
              <p
                id={descId}
                className="mt-2 max-w-[32rem] text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]"
              >
                {copy.description}
              </p>
            </div>
            <button
              type="button"
              className="site-btn-motion shrink-0 rounded-full border border-neutral-200/80 bg-white/90 p-2 text-neutral-500 shadow-sm hover:bg-neutral-50 hover:text-neutral-900 active:brightness-95"
              aria-label="Close"
              onClick={onClose}
            >
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#faf9f6] to-white px-5 py-6 sm:px-7 sm:py-7">
          {sent ? (
            <div className="py-4 text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_-8px_rgba(112,170,38,0.65)]"
                style={{ backgroundColor: PRIMARY }}
                aria-hidden
              >
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-5 text-[16px] font-semibold text-neutral-900">{copy.successTitle}</p>
              <p className="mx-auto mt-2 max-w-[320px] text-[14px] leading-relaxed text-neutral-600">
                {copy.successEmailIntro}{" "}
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
                className="mt-8 shadow-sm"
                onClick={onClose}
              >
                Close
              </GreenButton>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
              <FieldShell
                icon={UserIcon}
                fieldId="name"
                error={errors.name}
                errorIdPrefix={errorIdPrefix}
                compact={false}
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
                compact={false}
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
                compact={false}
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
                compact={false}
              >
                <textarea
                  name="message"
                  placeholder={copy.messagePlaceholder}
                  rows={4}
                  className={`${inputInner} min-h-[108px] resize-y py-2`}
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
                {copy.submitLabel}
              </GreenButton>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
