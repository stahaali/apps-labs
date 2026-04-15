"use client";

import { createContext, useContext } from "react";

export const LeadFormContext = createContext(null);

export function useLeadFormModal() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadFormModal must be used within LeadFormModalProvider");
  }
  return ctx;
}
