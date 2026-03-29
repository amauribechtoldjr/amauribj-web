import { PageSection } from "@/components/Layout/PageSection";

export const Skills = () => {
  return (
    <PageSection classNames="flex items-center gap-10" id="skills">
      <div className="flex flex-col gap-8 flex-1">
        <span className="text-6xl font-bold font-display">ABOUT ME</span>
        <span className="text-background max-w-3/4">
          Senior Full-Stack Engineer building scalable systems with{" "}
          <span className="font-bold">TypeScript</span>,{" "}
          <span className="font-bold">React</span>, and{" "}
          <span className="font-bold">Node.js</span>. <br />
          <br /> From frontend architecture to backend services, I create
          reliable solutions that enable products to grow and perform at scale.
        </span>
      </div>
      <div className="flex-2"></div>
    </PageSection>
  );
};
