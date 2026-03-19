export const MenuItem = {
  About: "about",
  Skills: "skills",
  Experience: "experience",
  Projects: "projects",
  Contact: "contact",
} as const;

export type MenuItemType = (typeof MenuItem)[keyof typeof MenuItem];
