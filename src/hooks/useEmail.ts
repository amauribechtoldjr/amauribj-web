import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/config";
import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";

type EmailStatus = "idle" | "loading" | "success" | "error";

type UseEmailReturn = {
  sendEmail: (name: string, email: string, content: string) => Promise<void>;
  status: EmailStatus;
};

export const useEmail = (): UseEmailReturn => {
  const [status, setStatus] = useState<EmailStatus>("idle");

  const sendEmail = useCallback(
    async (name: string, email: string, content: string) => {
      setStatus("loading");

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { name, email, content },
          EMAILJS_PUBLIC_KEY,
        );

        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [],
  );

  return { sendEmail, status };
};
