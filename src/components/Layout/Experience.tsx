import type { ExperienceType } from "@/types/experience.types";
import { cva } from "class-variance-authority";
import { t } from "i18next";

type ExperienceProps = {
  experience: ExperienceType;
};

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-4">
      <ExperienceTime experience={experience} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-offwhite uppercase font-semibold text-2xl font-mono">
            {experience.position} // {experience.company}
          </span>
          <div className="flex items-center gap-2 text-primary/80 font-bold">
            <span className="uppercase text-xs">
              {t("experience.location")} {experience.location} (
              {experience.remote ? "REMOTE" : "ON-SITE"})
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {experience.description.map((desc, index) => (
            <span
              className="text-offwhite/70 min-w-0 tracking-wider leading-7 hyphens-none"
              key={index}
            >
              {desc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const experienceTimeVariants = cva("flex-1 flex gap-2 font-mono text-sm", {
  variants: {
    status: {
      active: "",
      inactive: "text-offwhite/50",
    },
  },
});

type ExperienceTimeProps = {
  experience: ExperienceType;
};

const ExperienceTime = ({ experience }: ExperienceTimeProps) => {
  return (
    <div
      className={experienceTimeVariants({
        status: experience.lastYear ? "inactive" : "active",
      })}
    >
      <span>{experience.firstYear}</span>
      <span>{" - "}</span>
      <span>
        {experience.lastYear ? experience.lastYear : t("experience.present")}
      </span>
    </div>
  );
};
