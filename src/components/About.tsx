import { t } from "../i18n";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t("about.heading")}
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          {t("about.text")}
        </p>
      </div>
    </section>
  );
}
