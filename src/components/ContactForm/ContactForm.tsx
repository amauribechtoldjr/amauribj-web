import {
  contactFormSchema,
  CONTENT_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  NAME_MAX_LENGTH,
  type ContactFormData,
} from "@/components/ContactForm/ContactForm.schema";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { Input } from "@/components/Layout/Input";
import { Label } from "@/components/Layout/Label";
import { TextArea } from "@/components/Layout/TextArea";

import { useEmail } from "@/hooks/useEmail";
import { useToast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();
  const { sendEmail, status } = useEmail();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onChange",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    sendEmail({
      name: data.name,
      email: data.email,
      content: data.content,
      onSuccess: () => {
        showToast({
          message: t("contact.notifications.success"),
          variant: "success",
        });
        reset();
      },
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label>{t("contact.form.nameLabel")}</Label>
          <Input
            {...register("name")}
            placeholder={t("contact.form.namePlaceholder")}
            invalid={!!errors["name"]}
            maxLength={NAME_MAX_LENGTH}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t("contact.form.emailLabel")}</Label>
          <Input
            {...register("email")}
            placeholder={t("contact.form.emailPlaceholder")}
            invalid={!!errors["email"]}
            maxLength={EMAIL_MAX_LENGTH}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t("contact.form.contentLabel")}</Label>
          <TextArea
            {...register("content")}
            placeholder={t("contact.form.contentPlaceholder")}
            rows={5}
            invalid={!!errors["content"]}
            maxLength={CONTENT_MAX_LENGTH}
          />
        </div>
        <Button
          variant={"emphasis"}
          onClick={() => null}
          trailingIcon={<ContactIcon />}
          type="submit"
          isLoading={status === "loading"}
        >
          {t("contact.form.submit")}
        </Button>
      </div>
    </form>
  );
};
