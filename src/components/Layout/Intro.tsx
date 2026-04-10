import resumePdf from "@/assets/resume.pdf";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { DownloadIcon } from "@/components/Layout/Icons/DownloadIcon";
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center">
      <span className="text-sm mb-6 tracking-huge text-primary leading-none ml-2 inline-block">
        AMAURI BECHTOLD JUNIOR
      </span>
      <div className="text-offwhite text-8xl font-display leading-none flex flex-col">
        <span>{t("hero.title.build")}</span>
        <span className="text-primary">{t("hero.title.scale")}</span>
        <span>{t("hero.title.impact")}</span>
      </div>
      <div className="flex gap-6 my-8 items-center ml-2">
        <div className="w-40 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">{t("hero.jobTitle")}</span>
      </div>
      <div className="flex items-center gap-4 ml-2">
        <a href={resumePdf} download="amauri-bechtold-junior-resume.pdf">
          <Button variant="emphasis" leadingIcon={<DownloadIcon />}>
            {t("hero.resume")}
          </Button>
        </a>
        <a href="#contact">
          <Button variant="outline" leadingIcon={<ContactIcon />}>
            {t("hero.contact")}
          </Button>
        </a>
      </div>
    </div>
  );
};
