import { t } from "../i18n";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          {t("experience.heading")}
        </h2>
        <div className="space-y-8 border-l-2 border-slate-700 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-7.25 top-1 w-3 h-3 rounded-full bg-accent" />
              <p className="text-sm text-slate-500 mb-1">
                {exp.startDate} — {t(exp.endDate)}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {t(exp.role)}
              </h3>
              <p className="text-accent text-sm mb-3">{exp.company}</p>
              <ul className="space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-300 text-sm">
                    • {t(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
