export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'skills.languages',
    items: ['TypeScript', 'Go', 'JavaScript', 'Python'],
  },
  {
    category: 'skills.frameworks',
    items: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'skills.tools',
    items: ['Git', 'Docker', 'VS Code', 'Linux'],
  },
]
