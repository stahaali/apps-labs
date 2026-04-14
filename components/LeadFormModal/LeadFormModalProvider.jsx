"use client";

import { createPortal } from "react-dom";
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

const LeadFormContext = createContext(null);

const PRIMARY = "#70AA26";
const PRIMARY_SOFT = "rgba(112, 170, 38, 0.12)";

const FIELD_ORDER = ["name", "email", "phone", "message"];

/** Right slide-drawer open/close — matches CSS transition duration below */
const DRAWER_TRANSITION_MS = 300;

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

function FieldShell({
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
        className={`relative flex h-fit ${rowAlign} border bg-white/95 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] transition-[border-color,box-shadow] ${
          compact ? "gap-1.5 rounded-xl p-1.5" : "gap-2 rounded-2xl p-2"
        } ${
          error
            ? "border-red-300 ring-2 ring-red-100"
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

const MODAL_COPY = {
  lead: {
    badge: "Get in touch",
    titleBefore: "Start your ",
    titleAccent: "project",
    titleAfter: "",
    description:
      "Share a few details—we'll follow up with scope options, timeline, and next steps.",
    messagePlaceholder: "How can we help? (goals, timeline, platforms…)",
    submitLabel: "Send message",
    successTitle: "Thanks — we've got your details.",
    successEmailIntro: "We'll reach out shortly. You can also email",
  },
  consultation: {
    titleBefore: "Book Your ",
    titleAccent: "Free Consultation",
    titleAfter: "",
    messagePlaceholder: "What would you like to discuss? (product, timeline, team size…)",
    submitLabel: "Request consultation",
    successTitle: "Thanks — we'll follow up to schedule.",
    successEmailIntro:
      "We'll reach out shortly to arrange your consultation. You can also email",
  },
};

function LeadFormModal({ open, onClose, variant = "lead" }) {
  const copy = MODAL_COPY[variant] ?? MODAL_COPY.lead;
  const isConsultation = variant === "consultation";
  const errorIdPrefix = isConsultation ? "consult-err" : "lead-err";
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
    // Reset fields when opening or switching variant (lead vs consultation) while drawer stays open
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional form reset on variant/open
    setSent(false);
    setValues(initialValues());
    setErrors({});
  }, [variant, open]);

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
    // First paint off-screen, then slide in from the right (needs sync mount)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- drawer shell must mount before rAF transition
    setMounted(true);
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

  /** Trim/sanitize on blur only — errors show after “Send message”, not on focus/leave */
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

  const inputInner = isConsultation
    ? "w-full border-0 bg-transparent py-1.5 text-[13px] text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 sm:py-2 sm:text-[14px]"
    : "w-full border-0 bg-transparent py-2.5 text-[14px] text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 sm:text-[15px]";

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
        className={`absolute right-0 z-10 flex max-w-full flex-col overflow-hidden bg-[#fdfcfa] transition-transform duration-300 ease-out ${
          isConsultation
            ? `top-1/2 max-h-[min(450px,92dvh)] w-[min(88vw,360px)] rounded-l-2xl border-2 border-solid border-[#70AA26]/45 border-r-0 shadow-[-12px_0_28px_-10px_rgba(112,170,38,0.28),0_0_20px_-8px_rgba(112,170,38,0.12)] ${
                panelVisible ? "translate-x-0 -translate-y-1/2" : "translate-x-full -translate-y-1/2"
              }`
            : `top-0 h-full max-h-[100dvh] w-[min(92vw,480px)] rounded-l-[1.35rem] border-l border-t border-b border-neutral-200/80 shadow-[-16px_0_48px_-12px_rgba(15,23,42,0.32)] ring-1 ring-black/[0.04] ${
                panelVisible ? "translate-x-0" : "translate-x-full"
              }`
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className={
            isConsultation
              ? "relative shrink-0 border-b border-[#70AA26]/18 bg-gradient-to-br from-[#fff8f2] via-white to-[#f5f3ef] px-4 pb-3 pt-4 sm:px-5 sm:pb-3.5 sm:pt-4"
              : "relative shrink-0 border-b border-[#70AA26]/18 bg-gradient-to-br from-[#fff8f2] via-white to-[#f5f3ef] px-5 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7"
          }
          style={{
            backgroundImage: `radial-gradient(circle at 100% 0%, ${PRIMARY_SOFT} 0%, transparent 45%)`,
          }}
        >
          <div
            className={`pointer-events-none absolute rounded-full opacity-[0.35] ${
              isConsultation ? "right-4 top-3 h-12 w-12" : "right-6 top-5 h-16 w-16"
            }`}
            style={{
              background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)`,
              filter: "blur(12px)",
            }}
            aria-hidden
          />
          <div className={`relative flex items-start justify-between ${isConsultation ? "gap-2" : "gap-4"}`}>
            <div className="min-w-0">       
              <h2
                id={titleId}
                className={`font-bold leading-tight tracking-tight text-neutral-900 ${
                  isConsultation
                    ? "mt-0 text-[1.2rem] leading-snug sm:text-[1.4rem]"
                    : "mt-3 text-[1.35rem] sm:text-[1.5rem]"
                }`}
              >
                {copy.titleBefore}
                <span style={{ color: PRIMARY }}>{copy.titleAccent}</span>
                {copy.titleAfter}
              </h2>
              <p
                id={descId}
                className={`max-w-[32rem] text-neutral-600 ${
                  isConsultation
                    ? "mt-1.5 text-[12px] leading-snug sm:text-[13px]"
                    : "mt-2 text-[14px] leading-relaxed sm:text-[15px]"
                }`}
              >
                {copy.description}
              </p>
            </div>
            <button
              type="button"
              className={`site-btn-motion shrink-0 rounded-full border border-neutral-200/80 bg-white/90 text-neutral-500 shadow-sm hover:bg-neutral-50 hover:text-neutral-900 active:brightness-95 ${
                isConsultation ? "p-1.5" : "p-2"
              }`}
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                width={isConsultation ? 18 : 20}
                height={isConsultation ? 18 : 20}
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

        <div
          className={
            isConsultation
              ? "min-h-0 flex-1 bg-gradient-to-b from-[#faf9f6] to-white px-4 py-3 sm:px-5 sm:py-3.5"
              : "min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#faf9f6] to-white px-5 py-6 sm:px-7 sm:py-7"
          }
        >
          {sent ? (
            <div className={isConsultation ? "py-2 text-center" : "py-4 text-center"}>
              <div
                className={`mx-auto flex items-center justify-center rounded-full text-white shadow-[0_8px_24px_-8px_rgba(112,170,38,0.65)] ${
                  isConsultation ? "h-11 w-11" : "h-14 w-14"
                }`}
                style={{ backgroundColor: PRIMARY }}
                aria-hidden
              >
                <svg
                  width={isConsultation ? 22 : 28}
                  height={isConsultation ? 22 : 28}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`font-semibold text-neutral-900 ${isConsultation ? "mt-3 text-[14px]" : "mt-5 text-[16px]"}`}
              >
                {copy.successTitle}
              </p>
              <p
                className={`mx-auto max-w-[320px] text-neutral-600 ${isConsultation ? "mt-1.5 text-[12px] leading-relaxed" : "mt-2 text-[14px] leading-relaxed"}`}
              >
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
                className={isConsultation ? "mt-4 shadow-sm" : "mt-8 shadow-sm"}
                onClick={onClose}
              >
                Close
              </GreenButton>
            </div>
          ) : (
            <form className={`grid ${isConsultation ? "gap-2.5" : "gap-4"}`} onSubmit={handleSubmit} noValidate>
              <FieldShell
                icon={UserIcon}
                fieldId="name"
                error={errors.name}
                errorIdPrefix={errorIdPrefix}
                compact={isConsultation}
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
                compact={isConsultation}
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
                compact={isConsultation}
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
                compact={isConsultation}
              >
                <textarea
                  name="message"
                  placeholder={copy.messagePlaceholder}
                  rows={isConsultation ? 2 : 4}
                  className={
                    isConsultation
                      ? `${inputInner} min-h-[56px] resize-y py-1 sm:min-h-[64px]`
                      : `${inputInner} min-h-[108px] resize-y py-2`
                  }
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
                className={
                  isConsultation
                    ? "mt-0.5 w-full py-2.5 text-[13px] font-bold shadow-sm sm:py-2.5 sm:text-[14px]"
                    : "mt-1 w-full py-3.5 text-[15px] font-bold shadow-sm sm:py-3"
                }
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

export function LeadFormModalProvider({ children }) {
  const [drawer, setDrawer] = useState({ open: false, variant: "lead" });

  /** Heroes / banners / inner pages — “Get in touch”, slides in from the right (header uses centered dialog). */
  const openModal = useCallback(() => setDrawer({ open: true, variant: "lead" }), []);
  const closeModal = useCallback(() => setDrawer((s) => ({ ...s, open: false })), []);
  /** Fixed edge tab only — separate copy (“Free consultation”) */
  const openConsultationDrawer = useCallback(
    () => setDrawer({ open: true, variant: "consultation" }),
    [],
  );
  const closeConsultationDrawer = closeModal;

  const consultationDrawerOpen = drawer.open && drawer.variant === "consultation";

  return (
    <LeadFormContext.Provider
      value={{
        openModal,
        closeModal,
        openConsultationDrawer,
        closeConsultationDrawer,
        consultationDrawerOpen,
      }}
    >
      {children}
      <LeadFormModal open={drawer.open} variant={drawer.variant} onClose={closeModal} />
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
