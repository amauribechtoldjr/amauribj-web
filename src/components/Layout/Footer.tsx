import { socialLinks } from "@/data/profile";
import { useTranslation } from "react-i18next";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono  tracking-widest text-offwhite uppercase underline"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-10 py-12 text-xs lg:text-sm lg:p-16 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between h-20 xl:max-w-300 flex-1 w-full">
        <div className="flex flex-col lg:flex-row items-center items gap-2 lg:gap-6 divide-primary">
          <span className="text-primary font-mono font-bold flex-auto">
            AMAURI BECHTOLD JUNIOR
          </span>
          <span className="font-mono text-primary/80 uppercase min-w-min">
            {t("footer.rights")}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <FooterLink href={socialLinks.github}>GITHUB</FooterLink>
          <FooterLink href={socialLinks.linkedin}>LINKEDIN</FooterLink>
          <FooterLink href={`${socialLinks.github}/amauribj-web`}>
            {t("footer.sourceCode")}
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
