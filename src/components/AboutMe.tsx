import { PageSection } from "@/components/Layout/PageSection";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutMe = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { x: -400, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: ".box",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <PageSection
      classNames="flex items-center gap-40 justify-between"
      ref={container}
    >
      <div className="flex flex-col gap-8 box">
        <span className="text-6xl font-bold font-display">ABOUT ME</span>
        <span className="text-background">
          Senior Full-Stack Engineer building scalable systems with{" "}
          <span className="font-bold">TypeScript</span>,{" "}
          <span className="font-bold">React</span>, and{" "}
          <span className="font-bold">Node.js</span>. <br />
          <br /> From frontend architecture to backend services, I create
          reliable solutions that enable products to grow and perform at scale.
        </span>
      </div>
      <div className="border-4 border-black h-125 overflow-hidden min-w-100"></div>
    </PageSection>
  );
};
