import {
  contactFormSchema,
  type ContactFormDef,
} from "@/components/ContactForm/ContactForm.schema";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { LinkedInIcon } from "@/components/Layout/Icons/LinkedInIcon";
import { Input } from "@/components/Layout/Input";
import { Link } from "@/components/Layout/Link";
import { TextArea } from "@/components/Layout/TextArea";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { useEmail } from "@/hooks/useEmail";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// TODO: reset form after send
// TODO: success confirmation message

export const ContactForm = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);

  const { sendEmail, status } = useEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormDef>({
    mode: "onChange",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormDef) => {
    sendEmail(data.name, data.email, data.content);
  };

  return (
    <div className="mb-80">
      <TitleSeparator title={t("contact.title")} />
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="flex mt-20 gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-offwhite font-semibold text-3xl font-mono uppercase">
              {t("contact.subtitle")}
            </span>
            <span className="text-offwhite/70 min-w-0 tracking-wider leading-7">
              {t("contact.tagline")} <br /> {t("contact.taglineEnd")}
            </span>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:amauribechtoldjr@gmail.com"
                leadingIcon={<ContactIcon color="text-primary" />}
              >
                amauribechtoldjr@gmail.com
              </Link>
              <Link
                href="https://github.com/amauribechtoldjr"
                leadingIcon={
                  <GithubIcon
                    color="text-primary"
                    className="size-4 text-primary"
                  />
                }
                target="_blank"
              >
                github.com/amauribechtoldjr
              </Link>
              <Link
                href="https://www.linkedin.com/in/amauribechtoldjr/"
                leadingIcon={
                  <LinkedInIcon
                    color="text-primary"
                    className="size-4 text-primary"
                  />
                }
                target="_blank"
              >
                linkedin.com/in/amauribechtoldjr
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="border border-primary/20 flex flex-col p-6 gap-6">
              <Input
                {...register("name")}
                label={t("contact.form.nameLabel")}
                placeholder={t("contact.form.namePlaceholder")}
                invalid={!!errors["name"]}
              />
              <Input
                {...register("email")}
                label={t("contact.form.emailLabel")}
                placeholder={t("contact.form.emailPlaceholder")}
                invalid={!!errors["email"]}
              />
              <TextArea
                {...register("content")}
                label={t("contact.form.contentLabel")}
                placeholder={t("contact.form.contentPlaceholder")}
                rows={5}
                invalid={!!errors["content"]}
              />
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
          </div>
        </div>
      </form>
    </div>
  );
};
