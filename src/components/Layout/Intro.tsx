import resumePdf from "@/assets/resume.pdf";
import { Button } from "@/components/Layout/Button";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { DownloadIcon } from "@/components/Layout/Icons/DownloadIcon";

export const Intro = () => {
  return (
    <>
      <div className="text-offwhite text-7xl font-semibold font-display flex flex-col gap-0.5 -tracking-wide">
        <span>
          SCALING <span className="text-primary">DIGITAL</span> PRODUCTS
        </span>
      </div>
      <div className="flex gap-6 my-8 items-center">
        <div className="w-40 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">SOFTWARE ENGINEER</span>
      </div>
      <span className="text-offwhite/50 max-w-2/3">
        Senior Full-Stack Engineer building scalable systems with{" "}
        <span className="text-primary">TypeScript</span>,{" "}
        <span className="text-primary">React</span>, and{" "}
        <span className="text-primary">Node.js</span>. <br /> From frontend
        architecture to backend services, I create reliable solutions that
        enable products to grow and perform at scale.
      </span>
      <div className="mt-8 flex items-center gap-4">
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
