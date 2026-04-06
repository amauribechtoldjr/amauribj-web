import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Layout/Footer";
import { Intro } from "@/components/Layout/Intro";
import { MainLayout } from "@/components/Layout/MainLayout";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { PageSection } from "@/components/Layout/PageSection";
import { AboutMe } from "@/components/AboutMe";

export const RootScreen = () => {
  return (
    <>
      <MainLayout>
        <PageSection className="flex items-center gap-16 min-h-[80vh] pt-40">
          <div className="flex-2 flex flex-col">
            <Intro />
          </div>
          <div className="flex-1 flex justify-end">
            <ProfileImage />
          </div>
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
          <ContactForm />
        </PageSection>
      </MainLayout>
      <Footer />
    </>
  );
};
