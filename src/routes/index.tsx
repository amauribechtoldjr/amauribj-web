import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { MainLayout } from "@/components/Layout/MainLayout";
import { SkillCategory } from "@/components/Layout/SkillCategory";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/Layout/Experience";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <MainLayout>
      <section className="flex items-center gap-2 min-h-screen mx-52">
        <div className="flex-2 flex flex-col">
          <Intro />
        </div>
        <div className="flex-1 flex justify-end">
          <ProfileImage />
        </div>
      </section>
      <div className="flex flex-col items-center">
        <PageSection>
          <TitleSeparator title="CORE CAPABILITIES" />
          <div className="flex gap-12 mt-20 justify-between flex-wrap">
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
        <PageSection>
          <TitleSeparator title="DEPLOYMENT HISTORY" />
          <div className="flex flex-col gap-16 mt-20">
            <Experience
              experience={{
                firstYear: "2020",
                company: "Sigma MD",
                position: "Software Engineer",
                location: "California, USA",
                remote: true,
              }}
            />
            <Experience
              experience={{
                firstYear: "2020",
                lastYear: "2023",
                company: "Sigma MD",
                position: "Software Engineer",
                location: "São Paulo, Brazil",
                remote: true,
              }}
            />
            <Experience
              experience={{
                firstYear: "2020",
                lastYear: "2023",
                company: "Sigma MD",
                position: "Software Engineer",
                location: "São Paulo, Brazil",
                remote: true,
              }}
            />
            <Experience
              experience={{
                firstYear: "2020",
                lastYear: "2023",
                company: "Sigma MD",
                position: "Software Engineer",
                location: "Santa Catarina, Brazil",
              }}
            />
          </div>
        </PageSection>
      </div>
    </MainLayout>
  );
}

type PageSectionProps = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  return <div className="mb-40 max-w-7xl">{children}</div>;
};
