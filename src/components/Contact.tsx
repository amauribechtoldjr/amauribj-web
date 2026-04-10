import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { LinkedInIcon } from "@/components/Layout/Icons/LinkedInIcon";
import { Link } from "@/components/Layout/Link";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";

import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-80">
      <div className="flex mt-20 gap-16 flex-wrap">
        <div className="flex-1 flex flex-col gap-6">
          <TitleSeparator title={t("contact.title")} />
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
