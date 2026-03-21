const BASE_PATH = "/HOME/AMAURI_BJ";

const PAGE_FILE_EXTENSIONS: Record<string, string> = {
  "/": "ABOUT.MD",
  "/experience": "EXPERIENCE.MD",
  "/skills": "SKILLS.MD",
  "/projects": "PROJECTS.MD",
  "/contact": "CONTACT.MD",
};

export const getPagePath = (pathname: string) => {
  const file = PAGE_FILE_EXTENSIONS[pathname] ?? "UNKNOWN";

  return `${BASE_PATH}/${file}`;
};
