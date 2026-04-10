import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { LinkedInIcon } from "@/components/Layout/Icons/LinkedInIcon";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/components/Layout/Link";
import { socialLinks } from "@/data/profile";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutMe = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { x: 700, opacity: 0 },
      {
        x: 20,
        opacity: 1,
        duration: 0.9,
        scrollTrigger: {
          trigger: ".skills",
          start: "top 100%",
          end: "bottom 100%",
          toggleActions: "play reset none none",
          scrub: 1,
        },
      },
    );
  });

  return (
    <div className="flex z-10 pl-40 gap-20">
      <div className="flex flex-col flex-2 gap-10 ">
        <span className="text-7xl font-display text-background">
          {t("aboutMe.title")}
        </span>
        <div className="pr-40">
          <span className="min-w-0 text-background font-medium text-md tracking-wider leading-7">
            <span className="font-extrabold">{t("aboutMe.description.softwareEngineer")}</span>
            {t("aboutMe.description.withExperience")}
            <span className="font-extrabold">{t("aboutMe.description.fullStack")}</span>
            {t("aboutMe.description.focusingOn")}
            <span className="font-extrabold">{t("aboutMe.description.javascript")}</span>
            {t("aboutMe.description.since2012")}
            <span className="font-extrabold">{t("aboutMe.description.monolithic")}</span>
            {t("aboutMe.description.and")}
            <span className="font-extrabold">{t("aboutMe.description.microservices")}</span>
            {t("aboutMe.description.architectures")}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href={socialLinks.github} target="_blank">
            <div className="bg-background p-2">
              <GithubIcon className="text-primary size-6" />
            </div>
          </Link>
          <Link href={socialLinks.linkedin} target="_blank">
            <div className="bg-background p-2">
              <LinkedInIcon className="text-primary size-6" />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col gap-16 bg-background text-primary p-10 w-180 pr-20 skills"
        ref={container}
      >
        <SkillItem>
          <SkillTitle>{t("aboutMe.skills.frontend.title")}</SkillTitle>
          <SkillList>
            <span>{t("aboutMe.skills.frontend.typescript")}</span>
            <span>{t("aboutMe.skills.frontend.javascript")}</span>
            <span>{t("aboutMe.skills.frontend.react")}</span>
            <span>{t("aboutMe.skills.frontend.reactNative")}</span>
            <span>{t("aboutMe.skills.frontend.htmlCss")}</span>
            <span>{t("aboutMe.skills.frontend.ssg")}</span>
            <span>{t("aboutMe.skills.frontend.tailwind")}</span>
            <span>{t("aboutMe.skills.frontend.gsap")}</span>
            <span>{t("aboutMe.skills.frontend.reactQuery")}</span>
            <span>{t("aboutMe.skills.frontend.webVitals")}</span>
            <span>{t("aboutMe.skills.frontend.microFrontend")}</span>
            <span>{t("aboutMe.skills.frontend.storybook")}</span>
            <span>{t("aboutMe.skills.frontend.zustand")}</span>
          </SkillList>
        </SkillItem>
        <SkillItem>
          <SkillTitle>{t("aboutMe.skills.backend.title")}</SkillTitle>
          <SkillList>
            <span>{t("aboutMe.skills.backend.node")}</span>
            <span>{t("aboutMe.skills.backend.express")}</span>
            <span>{t("aboutMe.skills.backend.microservices")}</span>
            <span>{t("aboutMe.skills.backend.graphql")}</span>
            <span>{t("aboutMe.skills.backend.redis")}</span>
            <span>{t("aboutMe.skills.backend.python")}</span>
            <span>{t("aboutMe.skills.backend.django")}</span>
            <span>{t("aboutMe.skills.backend.postgresql")}</span>
            <span>{t("aboutMe.skills.backend.mysql")}</span>
            <span>{t("aboutMe.skills.backend.restAPI")}</span>
          </SkillList>
        </SkillItem>
        <SkillItem>
          <SkillTitle>{t("aboutMe.skills.tools.title")}</SkillTitle>
          <SkillList>
            <span>{t("aboutMe.skills.tools.git")}</span>
            <span>{t("aboutMe.skills.tools.docker")}</span>
            <span>{t("aboutMe.skills.tools.aws")}</span>
            <span>{t("aboutMe.skills.tools.ciCd")}</span>
            <span>{t("aboutMe.skills.tools.testing")}</span>
            <span>{t("aboutMe.skills.tools.datadog")}</span>
            <span>{t("aboutMe.skills.tools.optimization")}</span>
            <span>{t("aboutMe.skills.tools.designSystem")}</span>
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
