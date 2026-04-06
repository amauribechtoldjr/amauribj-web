import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { LinkedInIcon } from "@/components/Layout/Icons/LinkedInIcon";

export const AboutMe = () => {
  return (
    <div className="flex z-10 px-40 gap-20">
      <div className="flex flex-col flex-2 gap-10">
        <span className="text-8xl font-display text-background">ABOUT ME</span>
        <div className="max-w-2/3">
          <span className="min-w-0 text-background font-medium text-lg tracking-wider leading-7">
            I help you build user-friendly interfaces that are not only visually
            appealing but also performant and accessible. With a focus on React
            and modern frontend technologies, I create seamless user experiences
            that drive engagement and satisfaction.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <GithubIcon className="text-background size-6" />
          <LinkedInIcon className="text-background size-6" />
        </div>
      </div>
      <div className="flex flex-col gap-16 flex-1 bg-background text-primary p-10">
        <SkillItem>
          <SkillTitle>FRONTEND</SkillTitle>
          <SkillList>
            <span>Typescript</span>
            <span>Javascript</span>
            <span>React</span>
            <span>Nextjs</span>
            <span>HTML/CSS</span>
            <span>SSG</span>
            <span>Prisma</span>
            <span>TanStack Query</span>
            <span>GSAP</span>
          </SkillList>
        </SkillItem>
        <SkillItem>
          <SkillTitle>BACKEND</SkillTitle>
          <SkillList>
            <span>Nodejs</span>
            <span>Express</span>
            <span>GO</span>
            <span>Rest APIs</span>
            <span>GraphQL</span>
            <span>Redis</span>
            <span>DesignSystem</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
          </SkillList>
        </SkillItem>
        <SkillItem>
          <SkillTitle>INFRA & TOOLS</SkillTitle>
          <SkillList>
            <span>UNIX</span>
            <span>Docker</span>
            <span>CI/CD</span>
            <span>Figma</span>
            <span>Jira</span>
            <span>IA</span>
            <span>AWS</span>
            <span>CLI</span>
          </SkillList>
        </SkillItem>
      </div>
    </div>
  );
};

const SkillList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap text">{children}</div>
  );
};

const SkillTitle = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-semibold text-3xl font-mono">{children}</span>;
};

const SkillItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4 flex-">{children}</div>;
};
