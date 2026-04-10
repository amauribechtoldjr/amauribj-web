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
      className="font-mono text-xs tracking-widest text-primary uppercase hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background px-18 py-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 divide-primary">
          <span className="text-primary tracking-huge text-sm">
            AMAURI BECHTOLD JUNIOR
          </span>
          <div className="h-4 w-1 bg-primary/50" />
          <span className="font-mono tracking-widest text-primary/35 uppercase text-xs">
            {t("footer.rights")}
          </span>
        </div>
        <div className="flex items-center gap-8">
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
