"use client";

import { useLeadFormModal } from "@/components/LeadFormModal/LeadFormModalProvider";
import styles from "./ConsultationEdgeTab.module.css";

/** Fixed vertical tab on the viewport right — opens the sliding lead form. */
export default function ConsultationEdgeTab() {
  const { openConsultationDrawer } = useLeadFormModal();

  return (
    <button
      type="button"
      className={`site-btn-motion ${styles.tab}`}
      onClick={openConsultationDrawer}
      aria-label="Get free consultation — open contact form"
    >
      <span className={styles.label}>Get Free Consultation</span>
    </button>
  );
}
