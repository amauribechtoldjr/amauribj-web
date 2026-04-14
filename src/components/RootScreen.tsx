import Footer from "@/components/Layout/Footer";
import { MainLayout } from "@/components/Layout/MainLayout";
import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { Experiences } from "@/components/Experiences";
import { Contact } from "@/components/Contact";

export const RootScreen = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutMe />
        <Experiences />
        <Contact />
      </MainLayout>
      <Footer />
    </>
  );
};
