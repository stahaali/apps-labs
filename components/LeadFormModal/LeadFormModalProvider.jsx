"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import ConsultationSideDrawer from "@/components/LeadFormModal/ConsultationSideDrawer";
import { LeadFormContext } from "@/components/LeadFormModal/leadFormModalContext";

const LeadFormModal = dynamic(() => import("@/components/LeadFormModal/LeadFormModal"), {
  ssr: false,
});

export function LeadFormModalProvider({ children }) {
  const [drawer, setDrawer] = useState({ open: false, variant: "lead" });

  /** Warm the lead-modal chunk after first paint so “Get Started” opens without a cold import. */
  useEffect(() => {
    const w = typeof window !== "undefined" ? window : undefined;
    if (!w) return;
    const run = () => {
      void import("@/components/LeadFormModal/LeadFormModal");
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(run, { timeout: 3500 });
      return () => w.cancelIdleCallback(id);
    }
    const tid = w.setTimeout(run, 1800);
    return () => w.clearTimeout(tid);
  }, []);

  /** Heroes / banners / inner pages — lead form slides in from the right (header uses centered dialog). */
  const openModal = useCallback(() => setDrawer({ open: true, variant: "lead" }), []);
  const closeModal = useCallback(() => setDrawer((s) => ({ ...s, open: false })), []);
  /** Free consultation — side drawer with tab (see ConsultationSideDrawer). */
  const openConsultationDrawer = useCallback(
    () => setDrawer({ open: true, variant: "consultation" }),
    [],
  );
  const closeConsultationDrawer = closeModal;

  const consultationDrawerOpen = drawer.open && drawer.variant === "consultation";
  const leadModalOpen = drawer.open && drawer.variant === "lead";

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
      <ConsultationSideDrawer />
      <LeadFormModal open={leadModalOpen} onClose={closeModal} />
    </LeadFormContext.Provider>
  );
}

export { useLeadFormModal } from "./leadFormModalContext";
