import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/config/envinronment";
import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";

type EmailStatus = "idle" | "loading" | "success" | "error";
type SendEmailProps = {
  name: string;
  email: string;
  content: string;
  onSuccess?: () => void;
};

export const useEmail = () => {
  const [status, setStatus] = useState<EmailStatus>("idle");

  const sendEmail = useCallback(
    async ({ name, email, content, onSuccess }: SendEmailProps) => {
      setStatus("loading");

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { name, email, content },
          EMAILJS_PUBLIC_KEY,
        );

        setStatus("success");
        onSuccess?.();
      } catch {
        setStatus("error");
      }
    },
    [],
  );

  return { sendEmail, status };
};
