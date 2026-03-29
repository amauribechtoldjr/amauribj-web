import resumePdf from "@/assets/resume.pdf";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { DownloadIcon } from "@/components/Layout/Icons/DownloadIcon";

export const Intro = () => {
  return (
    <>
      <span className="text-sm mb-4 font-display tracking-huge text-primary">
        AMAURI BECHTOLD JUNIOR
      </span>
      <div className="text-offwhite text-8xl font-bold font-display flex flex-col gap-0.5 -tracking-wide">
        <span>
          SCALING <span className="text-primary">DIGITAL</span> PRODUCTS
        </span>
      </div>
      <div className="flex gap-6 my-8 items-center">
        <div className="w-40 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">SOFTWARE ENGINEER</span>
      </div>
      <div className="flex items-center gap-4">
        <a href={resumePdf} download="amauri-bechtold-junior-resume.pdf">
          <Button variant="emphasis" leadingIcon={<DownloadIcon />}>
            RESUME
          </Button>
        </a>
        <a href="#contact">
          <Button variant="outline" leadingIcon={<ContactIcon />}>
            CONTACT
          </Button>
        </a>
      </div>
    </>
  );
};
