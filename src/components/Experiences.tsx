import { Experience } from "@/components/Layout/Experience";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Experiences = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            scrollTrigger: {
              trigger: item,
              start: "top 110%",
              end: () => `+=${item.offsetHeight + 100}`,
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div className="mb-80">
      <div className="mb-40">
        <TitleSeparator title="EXPERIENCE" />
      </div>
      <div className="flex flex-col gap-20" ref={container}>
        <div className="experience-item">
          <Experience
            experience={{
              firstYear: "2020",
              company: "Sigma MD",
              position: "Software Engineer",
              location: "California, USA",
              remote: true,
            }}
          />
        </div>
        {/* <div className="w-full h-px bg-primary/20" /> */}
        <div className="experience-item">
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
        </div>
        {/* <div className="w-full h-px bg-primary/20" /> */}
        <div className="experience-item">
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
        </div>
        {/* <div className="w-full h-px bg-primary/20" /> */}
        <div className="experience-item">
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
      </div>
    </div>
  );
};
