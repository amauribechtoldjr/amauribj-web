import { PageSection } from "@/components/Layout/PageSection";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutMe = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      {
        x: -5000,
      },
      {
        x: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".skills",
          start: "top 100%",
          end: "bottom 100%",
          scrub: 1,
        },
      },
    );
  });

  return (
    <PageSection
      classNames="flex items-center gap-40 justify-between skills"
      ref={container}
    >
      <div className="flex flex-col gap-8 flex-1">
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
      <div className="flex-1 border border-black h-125"></div>
    </PageSection>
  );
};
