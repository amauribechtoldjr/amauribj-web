export interface Project {
  name: string
  description: string
  techTags: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'projects.project1.name',
    description: 'projects.project1.description',
    techTags: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/amauribj/project-one',
  },
]
