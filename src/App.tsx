import { useState } from "react";
import { getLanguage } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollMark } from "./components/CustomScroll/ScrollMark";
import { ScrollIndicator } from "./components/CustomScroll/ScrollIndicator";

export default function App() {
  const [, setLang] = useState(getLanguage());

  return (
    <>
      <ScrollMark />
      <ScrollIndicator />
      <div className="min-h-screen bg-black">
        <Navbar onLanguageChange={setLang} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
