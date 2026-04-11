import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Layout/Footer";
import { MainLayout } from "@/components/Layout/MainLayout";
import { PageSection } from "@/components/Layout/PageSection";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";

export const RootScreen = () => {
  return (
    <>
      <MainLayout>
        <PageSection className="flex items-center gap-16 min-h-[80vh] pt-40 justify-center px-70">
          <Hero />
        </PageSection>
        <div className="min-h-screen flex items-center relative justify-between mt-10 overflow-x-hidden">
          <div
            className="absolute inset-0 bg-primary"
            style={{
              clipPath: "polygon(0 15%, 100% 15%, 100% 85%, 0 85%)",
            }}
          />
          <AboutMe />
        </div>
        <PageSection>
          <Experiences />
        </PageSection>
        <PageSection>
          <Contact />
        </PageSection>
      </MainLayout>
      <Footer />
    </>
  );
};
