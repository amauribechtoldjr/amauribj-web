export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Company Name',
    role: 'experience.roles.software_developer',
    startDate: '2023',
    endDate: 'experience.present',
    bullets: [
      'experience.bullets.exp1_bullet1',
      'experience.bullets.exp1_bullet2',
    ],
  },
]
