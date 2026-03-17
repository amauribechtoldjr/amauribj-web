import { t } from '../i18n'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      <h1 className="text-5xl font-bold text-white mb-4">{profile.name}</h1>
      <p className="text-xl text-accent mb-2">{t(profile.title)}</p>
      <p className="text-lg text-slate-400 mb-8">{t(profile.tagline)}</p>
      <a
        href="#contact"
        className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded transition-colors"
      >
        {t('hero.cta')}
      </a>
    </section>
  )
}
