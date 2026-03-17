import { t } from '../i18n'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">{t('projects.heading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{t(project.name)}</h3>
              <p className="text-slate-400 text-sm mb-4">{t(project.description)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover text-sm transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover text-sm transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
