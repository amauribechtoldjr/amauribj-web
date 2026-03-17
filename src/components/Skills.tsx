import { t } from '../i18n'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">{t('skills.heading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-accent mb-4">{t(group.category)}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 text-slate-300 px-3 py-1 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
