import { PageSection } from "@/components/Layout/PageSection";
import { SkillCategory } from "@/components/Layout/SkillCategory";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";

export const Skills = () => {
  return (
    <PageSection>
      <TitleSeparator title="CORE CAPABILITIES" />
      <div className="flex gap-12 mt-20 justify-between">
        <SkillCategory
          category="LANGUAGES & FRAMEWORKS"
          items={[
            { name: "Javascript", value: "5 yrs" },
            { name: "Typescript", value: "5 yrs" },
            { name: "React", value: "10 yrs" },
            { name: "Node.js", value: "5 yrs" },
          ]}
        />
        <SkillCategory
          category="ARCHITECTURE"
          items={[
            { name: "Microservices", value: "5 yrs" },
            { name: "Cloud Native", value: "4 yrs" },
            { name: "Distributed Systems", value: "3 yrs" },
          ]}
        />
        <SkillCategory
          category="ARCHITECTURE"
          items={[
            { name: "Microservices", value: "5 yrs" },
            { name: "Cloud Native", value: "4 yrs" },
            { name: "Distributed Systems", value: "3 yrs" },
          ]}
        />
        <SkillCategory
          category="LANGUAGES & FRAMEWORKS"
          items={[
            { name: "Javascript", value: "5 yrs" },
            { name: "Typescript", value: "5 yrs" },
            { name: "Cloud Native", value: "4 yrs" },
            { name: "Distributed Systems", value: "3 yrs" },
          ]}
        />
      </div>
    </PageSection>
  );
};
