import { ToastContext } from "@/contexts/ToastContext";
import { useContext } from "react";

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Failed to load ToastProvider");
  }

  return context;
};
