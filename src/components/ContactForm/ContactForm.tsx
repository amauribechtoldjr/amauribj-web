import {
  contactFormSchema,
  type ContactFormDef,
} from "@/components/ContactForm/ContactForm.schema";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { Input } from "@/components/Layout/Input";
import { Link } from "@/components/Layout/Link";
import { PageSection } from "@/components/Layout/PageSection";
import { TextArea } from "@/components/Layout/TextArea";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { useEmail } from "@/hooks/useEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
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
    <PageSection>
      <TitleSeparator title="CONTACT" />
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="flex mt-20 gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-offwhite text-3xl uppercase -tracking-wide font-display font-bold">
              Establish Connection
            </span>
            <span className="text-offwhite/70">
              Ready to integrate new technologies into your architectural
              framework? Send a transmission and our systems will respond within
              12 standard hours.
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
                leadingIcon={<GithubIcon color="text-primary" />}
                target="_blank"
              >
                github.com/amauribechtoldjr
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="border border-primary/20 flex flex-col p-6 gap-6">
              <Input
                {...register("name")}
                label="NAME"
                placeholder="GUEST USER"
                invalid={!!errors["name"]}
              />
              <Input
                {...register("email")}
                label="EMAIL"
                placeholder="USER@DOMAIN.COM"
                invalid={!!errors["email"]}
              />
              <TextArea
                {...register("content")}
                label="CONTENT"
                placeholder="GUEST MESSAGE"
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
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </form>
    </PageSection>
  );
};
