import { Experience } from "@/components/Layout/Experience";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ExperienceType } from "@/types/experience.types";
import { useTranslation } from "react-i18next";
import { mediaQuerySizes } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Experiences = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(mediaQuerySizes.md, () => {
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
      });
    },
    { scope: container },
  );

  const { t } = useTranslation();

  const experiences: ExperienceType[] = [
    {
      firstYear: t("experience.companies.sigmaMd.firstYear"),
      company: "Sigma MD",
      position: t("experience.companies.sigmaMd.position"),
      location: t("experience.companies.sigmaMd.location"),
      description: [t("experience.companies.sigmaMd.description")],
      remote: true,
    },
    {
      firstYear: t("experience.companies.solides.firstYear"),
      lastYear: t("experience.companies.solides.lastYear"),
      company: "Sólides",
      position: t("experience.companies.solides.position"),
      location: t("experience.companies.solides.location"),
      description: [
        t("experience.companies.solides.description1"),
        t("experience.companies.solides.description2"),
      ],
      remote: true,
    },
    {
      firstYear: t("experience.companies.bornlogic.firstYear"),
      lastYear: t("experience.companies.bornlogic.lastYear"),
      company: "Bornlogic",
      position: t("experience.companies.bornlogic.position"),
      location: t("experience.companies.bornlogic.location"),
      description: [
        t("experience.companies.bornlogic.description1"),
        t("experience.companies.bornlogic.description2"),
      ],
      remote: true,
    },
    {
      firstYear: t("experience.companies.eureca.firstYear"),
      lastYear: t("experience.companies.eureca.lastYear"),
      company: "Eureca",
      position: t("experience.companies.eureca.position"),
      location: t("experience.companies.eureca.location"),
      description: [
        t("experience.companies.eureca.description1"),
        t("experience.companies.eureca.description2"),
      ],
    },
    {
      firstYear: t("experience.companies.linx.firstYear"),
      lastYear: t("experience.companies.linx.lastYear"),
      company: "Linx",
      position: t("experience.companies.linx.position"),
      location: t("experience.companies.linx.location"),
      description: [t("experience.companies.linx.description")],
    },
    {
      firstYear: t("experience.companies.unimestre.firstYear"),
      lastYear: t("experience.companies.unimestre.lastYear"),
      company: "Unimestre",
      position: t("experience.companies.unimestre.position"),
      location: t("experience.companies.unimestre.location"),
      description: [
        t("experience.companies.unimestre.description1"),
        t("experience.companies.unimestre.description2"),
      ],
    },
  ];

  return (
    <section className="p-10">
      <div className="mb-20">
        <span className="text-primary text-4xl font-display">
          {t("experience.title")}
        </span>
      </div>
      <div className="flex flex-col gap-20" ref={container}>
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <Experience experience={exp} />
          </div>
        ))}
      </div>
    </section>
  );
};
