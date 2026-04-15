"use client";

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
import {
  FieldShell,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PRIMARY,
  PRIMARY_SOFT,
  UserIcon,
} from "@/components/LeadFormModal/LeadFormFieldShell";
import { useLeadFormModal } from "@/components/LeadFormModal/leadFormModalContext";
import styles from "./ConsultationSideDrawer.module.css";

const FIELD_ORDER = ["name", "email", "phone", "message"];

const initialValues = () => ({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const COPY = {
  titleBefore: "Book Your ",
  titleAccent: "Free Consultation",
  titleAfter: "",
  messagePlaceholder: "What would you like to discuss? (product, timeline, team size…)",
  submitLabel: "Request consultation",
  successTitle: "Thanks — we'll follow up to schedule.",
  successEmailIntro:
    "We'll reach out shortly to arrange your consultation. You can also email",
};

export default function ConsultationSideDrawer() {
  const { consultationDrawerOpen, openConsultationDrawer, closeModal } = useLeadFormModal();
  const titleId = useId();
  const descId = useId();
  const errorIdPrefix = "consult-err";
  const panelRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const toggle = useCallback(() => {
    if (consultationDrawerOpen) closeModal();
    else openConsultationDrawer();
  }, [consultationDrawerOpen, closeModal, openConsultationDrawer]);

  useEffect(() => {
    if (!consultationDrawerOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset form when drawer opens
    setSent(false);
    setValues(initialValues());
    setErrors({});
  }, [consultationDrawerOpen]);

  useEffect(() => {
    if (!consultationDrawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [consultationDrawerOpen]);

  useEffect(() => {
    if (!consultationDrawerOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [consultationDrawerOpen, closeModal]);

  useEffect(() => {
    if (!consultationDrawerOpen || sent) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector("input")?.focus();
    }, 350);
    return () => clearTimeout(t);
  }, [consultationDrawerOpen, sent]);

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
    "w-full border-0 bg-transparent py-1.5 text-[13px] text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 sm:py-2 sm:text-[14px]";

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

  return (
    <>
      <button
        type="button"
        className={`fixed inset-0 z-[10039] bg-black/65 backdrop-blur-[3px] transition-opacity duration-300 ease-out ${
          consultationDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Close dialog"
        onClick={closeModal}
      />
      <div className={styles.shell}>
        <div
          className={`${styles.slideWrap} ${consultationDrawerOpen ? styles.slideWrapOpen : ""}`}
        >
          <button
            type="button"
            className={`site-btn-motion ${styles.tab}`}
            onClick={toggle}
            aria-expanded={consultationDrawerOpen}
            aria-controls={consultationDrawerOpen ? "consultation-side-panel" : undefined}
            aria-label={
              consultationDrawerOpen
                ? "Close free consultation form"
                : "Get free consultation — open contact form"
            }
          >
            <span className={styles.tabLabel}>Get Free Consultation</span>
          </button>

          <div
            id="consultation-side-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative flex max-h-[min(470px,92dvh)] w-full flex-col overflow-hidden rounded-l-2xl bg-[#fdfcfa]"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div
              className="relative shrink-0 border-b-0 px-4 pt-4 sm:px-5 sm:pt-4 "
              style={{
                backgroundImage: `radial-gradient(circle at 100% 0%, ${PRIMARY_SOFT} 0%, transparent 45%)`,
              }}
            >
              <div
                className="pointer-events-none absolute right-4 top-3 h-12 w-12 rounded-full opacity-[0.35]"
                style={{
                  background: `radial-gradient(circle, ${PRIMARY} 0%, transparent 70%)`,
                  filter: "blur(12px)",
                }}
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h2
                    id={titleId}
                    className="mt-0 text-[1.2rem] font-bold leading-snug tracking-tight text-neutral-900 sm:text-[1.4rem]"
                  >
                    {COPY.titleBefore}
                    <span style={{ color: PRIMARY }}>{COPY.titleAccent}</span>
                    {COPY.titleAfter}
                  </h2>
                  <p
                    id={descId}
                    className="mt-1.5 max-w-[32rem] text-[12px] leading-snug text-neutral-600 sm:text-[13px]"
                  >
                    {COPY.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="site-btn-motion shrink-0 rounded-full border border-neutral-200/80 bg-white/90 p-1.5 text-neutral-500 shadow-sm hover:bg-neutral-50 hover:text-neutral-900 active:brightness-95"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
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

            <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-b to-white">
              {sent ? (
                <div className="px-4 py-2 text-center sm:px-5">
                  <div
                    className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_8px_24px_-8px_rgba(112,170,38,0.65)]"
                    style={{ backgroundColor: PRIMARY }}
                    aria-hidden
                  >
                    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-[14px] font-semibold text-neutral-900">{COPY.successTitle}</p>
                  <p className="mx-auto mt-1.5 max-w-[320px] text-[12px] leading-relaxed text-neutral-600">
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
                    className="mt-4 shadow-sm"
                    onClick={closeModal}
                  >
                    Close
                  </GreenButton>
                </div>
              ) : (
                <form className="flex flex-1 flex-col" onSubmit={handleSubmit} noValidate>
                  <div className="flex-1 px-4 pt-3 sm:px-5">
                    <div className="grid gap-2.5">
                      <FieldShell
                        icon={UserIcon}
                        fieldId="name"
                        error={errors.name}
                        errorIdPrefix={errorIdPrefix}
                        compact
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
                        compact
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
                        compact
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
                        compact
                      >
                        <textarea
                          name="message"
                          placeholder={COPY.messagePlaceholder}
                          rows={2}
                          className={`${inputInner} min-h-[56px] resize-y py-1 sm:min-h-[64px]`}
                          value={values.message}
                          onChange={(e) => updateField("message", sanitizeMessageInput(e.target.value))}
                          onBlur={() => handleBlur("message")}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? `${errorIdPrefix}-message` : undefined}
                        />
                      </FieldShell>
                    </div>
                  </div>
                  <div className="shrink-0 px-4 pb-3 pt-1.5 sm:px-5 sm:pb-3.5 sm:pt-2">
                    <GreenButton
                      type="submit"
                      size="md"
                      focusOn="light"
                      className="w-full py-2.5 text-[13px] font-bold shadow-sm sm:py-2.5 sm:text-[14px]"
                    >
                      {COPY.submitLabel}
                    </GreenButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
