import { cva } from "class-variance-authority";

type Experience = {
  firstYear: string;
  lastYear?: string;
  company: string;
  position: string;
  location: string;
  remote?: boolean;
};

type ExperienceProps = {
  experience: Experience;
};

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex">
      <ExperienceTime experience={experience} />
      <div className="flex flex-col w-2/3">
        <div className="flex flex-col">
          <span className="text-offwhite uppercase font-semibold text-3xl font-mono leading-5">
            {experience.position} // {experience.company}
          </span>
          <div className="flex items-center gap-2 mt-3 text-primary/80">
            <span className="uppercase text-xs">
              LOCATION: {experience.location}
            </span>
            <div className="self-start border-l px-2 py-0.5 text-xs shrink-0 min-w-0">
              {experience.remote ? "REMOTE" : "ON-SITE"}
            </div>
          </div>
        </div>
        <span className="text-offwhite/70 mt-6 min-w-0 tracking-wider leading-7 hyphens-none">
          Leading the core platform team in migrating monolith architecture to a
          event-driven mesh. Redesigning deployment pipelines resulting in a
          400% increase in release velocity. Implementing zero-trust security
          layers across all internal services.
        </span>
      </div>
    </div>
  );
};

const experienceTimeVariants = cva("flex gap-2 font-mono text-sm w-1/5", {
  variants: {
    status: {
      active: "",
      inactive: "text-offwhite/50",
    },
  },
});

type ExperienceTimeProps = {
  experience: Experience;
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
      <span>{experience.lastYear ? experience.lastYear : "PRESENT"}</span>
    </div>
  );
};
