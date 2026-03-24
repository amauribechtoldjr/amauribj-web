import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { MainLayout } from "@/components/Layout/MainLayout";
import { SkillCategory } from "@/components/Layout/SkillCategory";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/Layout/Experience";
import { Input } from "@/components/Layout/Input";
import { TextArea } from "@/components/Layout/TextArea";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { Link } from "@/components/Layout/Link";

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
      <div className="flex flex-col items-center mx-52">
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
        <PageSection>
          <TitleSeparator title="CONTACT" />
          <div className="flex mt-20 gap-16">
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-offwhite text-3xl uppercase -tracking-wide font-display font-bold">
                Establish Connection
              </span>
              <span className="text-offwhite/70">
                Ready to integrate new technologies into your architectural
                framework? Send a transmission and our systems will respond
                within 12 standard hours.
              </span>
              <div className="flex flex-col gap-3">
                <Link
                  href="mailto:amauribechtoldjr@gmail.com"
                  leadingIcon={<ContactIcon color="text-primary" />}
                >
                  amauribechtoldjr@gmail.com
                </Link>
                <Link
                  href="https://github.com/amauribechtoldjr"
                  leadingIcon={<GithubIcon color="text-primary" />}
                  target="_blank"
                >
                  github.com/amauribechtoldjr
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="border border-primary/20 flex flex-col p-6 gap-6">
                <Input label="NAME" placeholder="GUEST USER" type="text" />
                <Input
                  label="EMAIL"
                  placeholder="USER@DOMAIN.COM"
                  type="email"
                />
                <TextArea
                  label="CONTENT"
                  placeholder="GUEST MESSAGE"
                  rows={5}
                />
                <Button
                  variant={"emphasis"}
                  onClick={() => null}
                  trailingIcon={<ContactIcon />}
                >
                  SEND MESSAGE
                </Button>
              </div>
            </div>
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
  return <div className="mb-40 w-full">{children}</div>;
};
