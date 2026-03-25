import { Experience } from "@/components/Layout/Experience";
import { PageSection } from "@/components/Layout/PageSection";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";

export const Experiences = () => {
  return (
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
        <div className="w-full h-px bg-primary/20" />
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
        <div className="w-full h-px bg-primary/20" />
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
        <div className="w-full h-px bg-primary/20" />
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
  );
};
