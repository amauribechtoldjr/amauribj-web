import { t } from "../i18n";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          {t("contact.heading")}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:text-accent-hover transition-colors"
            aria-label={t("contact.email_label")}
          >
            {t("contact.email_label")}: {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
            aria-label={t("contact.github_label")}
          >
            {t("contact.github_label")}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
            aria-label={t("contact.linkedin_label")}
          >
            {t("contact.linkedin_label")}
          </a>
        </div>
      </div>
    </section>
  );
}
