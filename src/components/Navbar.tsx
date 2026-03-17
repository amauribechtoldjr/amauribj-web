import { useState, useEffect } from "react";
import { t, getLanguage, setLanguage } from "../i18n";

interface NavbarProps {
  onLanguageChange: (lang: "en" | "pt") => void;
}

const sectionIds = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar({ onLanguageChange }: NavbarProps) {
  const lang = getLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const newLang = lang === "en" ? "pt" : "en";
    const result = setLanguage(newLang);
    onLanguageChange(result);
  };

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 backdrop-blur-sm border-2 border-orange-500 bg-black">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-300 hover:text-accent"
        >
          ☰
        </button>
        <ul
          className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-12 absolute md:static top-full left-0 right-0 bg-slate-900 md:bg-transparent px-4 py-4 md:p-0 border-b md:border-0 border-slate-800`}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative pb-1 transition-colors text-sm ${isActive ? "text-orange-400" : "text-slate-300 hover:text-accent"}`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleToggle}
          aria-label="Toggle language"
          className="text-sm font-medium text-slate-300 hover:text-accent transition-colors px-2 py-1 border border-slate-700 rounded"
        >
          {lang === "en" ? "PT" : "EN"}
        </button>
      </div>
    </nav>
  );
}
