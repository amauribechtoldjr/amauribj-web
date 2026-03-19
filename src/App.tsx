import About from "@/components/Menus/About";
import Contact from "@/components/Menus/Contact";
import { ScrollIndicator } from "@/components/CustomScroll/ScrollIndicator";
import { ScrollMark } from "@/components/CustomScroll/ScrollMark";
import Experience from "@/components/Menus/Experience";
import Navbar from "@/components/Layout/Navbar";
import Projects from "@/components/Menus/Projects";
import Skills from "@/components/Menus/Skills";
import { getLanguage } from "@/i18n";
import { useState } from "react";

export default function App() {
  const [, setLang] = useState(getLanguage());

  return (
    <>
      <ScrollMark />
      <ScrollIndicator />
      <Navbar onLanguageChange={setLang} />
      <main className="h-screen">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
