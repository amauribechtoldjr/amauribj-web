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
      className="font-mono text-xs tracking-widest text-offwhite uppercase"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-10 py-12">
      <div className="flex flex-col gap-10 items-center justify-between">
        <div className="flex flex-col items-center gap-2 divide-primary">
          <span className="text-primary font-display text-xs">
            AMAURI BECHTOLD JUNIOR
          </span>
          <div className="h-4 w-1 bg-primary/50 hidden" />
          <span className="font-mono text-primary/80 uppercase text-xs">
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
