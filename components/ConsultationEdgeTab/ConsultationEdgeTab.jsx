"use client";

import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import styles from "./ConsultationEdgeTab.module.css";

/** Fixed vertical tab — toggles the consultation slide form open/closed. */
export default function ConsultationEdgeTab() {
  const { openConsultationDrawer, closeConsultationDrawer, consultationDrawerOpen } = useLeadFormModal();

  function toggleConsultation() {
    if (consultationDrawerOpen) closeConsultationDrawer();
    else openConsultationDrawer();
  }

  return (
    <button
      type="button"
      className={`site-btn-motion ${styles.tab}`}
      onClick={toggleConsultation}
      aria-expanded={consultationDrawerOpen}
      aria-label={
        consultationDrawerOpen
          ? "Close free consultation form"
          : "Get free consultation — open contact form"
      }
    >
      <span className={styles.label}>Get Free Consultation</span>
    </button>
  );
}
