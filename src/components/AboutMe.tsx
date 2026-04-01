import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { PageSection } from "@/components/Layout/PageSection";

export const AboutMe = () => {
  return (
    <PageSection classNames="flex items-center gap-10 justify-between">
      <div className="h-125 overflow-hidden flex flex-col items-center">
        <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
          Frontend Development
        </span>
        <GithubIcon className="size-10" />
        <span className="mt-20">
          I help you build user-friendly interfaces that are not only visually
          appealing but also performant and accessible. With a focus on React
          and modern frontend technologies, I create seamless user experiences
          that drive engagement and satisfaction.
        </span>
      </div>
      <div className="h-125 overflow-hidden flex flex-col items-center">
        <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
          Backend Development
        </span>
        <GithubIcon className="size-10" />
        <span className="mt-20">
          I help you build robust and scalable backend systems with Node.js,
          Python, and other technologies. I focus on creating efficient, secure,
          and maintainable solutions that power modern applications and
          services.
        </span>
      </div>
      <div className="h-125 overflow-hidden flex flex-col items-center">
        <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
          Frontend Development
        </span>
        <GithubIcon className="size-10" />
        <span className="mt-20">
          I help you build user-friendly interfaces that are not only visually
          appealing but also performant and accessible. With a focus on React
          and modern frontend technologies, I create seamless user experiences
          that drive engagement and satisfaction.
        </span>
      </div>
    </PageSection>
  );
};
