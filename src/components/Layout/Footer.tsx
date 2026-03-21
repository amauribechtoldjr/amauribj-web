import { socialLinks } from "@/data/me";

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
  return (
    <footer className="border-t-2 border-primary/20 bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm tracking-widest text-primary uppercase">
          &copy; 2024 BJ_TERMINAL // ALL RIGHTS RESERVED
        </span>
        <div className="flex items-center gap-8">
          <FooterLink href={`${socialLinks.github}`}>GITHUB</FooterLink>
          <FooterLink href={socialLinks.linkedin}>LINKEDIN</FooterLink>
          <FooterLink href={`${socialLinks.github}/amauribj-web`}>
            SOURCE_CODE
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
