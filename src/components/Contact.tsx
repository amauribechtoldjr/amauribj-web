import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Link } from "@/components/Layout/Link";
import { socialLinks } from "@/data/profile";

import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center p-10" id="contact">
      <div className="flex mt-20 gap-16 flex-wrap flex-1 justify-center">
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-4xl font-display">{t("contact.title")}</span>
          <span className="text-offwhite font-semibold text-2xl font-mono uppercase">
            {t("contact.subtitle")}
          </span>
          <span className="text-offwhite/70 min-w-0 tracking-wider leading-7">
            {t("contact.tagline")} <br /> {t("contact.taglineEnd")}
          </span>
          <div className="flex flex-col gap-3">
            <Link href={`mailto:${socialLinks.email}`}>
              {socialLinks.email}
            </Link>
            <Link href={socialLinks.github} target="_blank">
              github.com/amauribechtoldjr
            </Link>
            <Link href={socialLinks.linkedin} target="_blank">
              linkedin.com/in/amauribechtoldjr
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
