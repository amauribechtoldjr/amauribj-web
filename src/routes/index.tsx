import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { MainLayout } from "@/components/Layout/MainLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Experiences } from "@/components/Experiences";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <MainLayout>
      <section className="flex items-center gap-16 min-h-[70vh] mx-40 pt-70">
        <div className="flex-2 flex flex-col">
          <Intro />
        </div>
        <div className="flex-1 flex justify-end">
          <ProfileImage />
        </div>
      </section>
      <div className="px-40 relative min-h-[130vh] flex items-center">
        <div
          className="absolute inset-0 bg-primary"
          style={{
            clipPath: "polygon(0 15%, 100% 20%, 100% 80%, 0 75%)",
          }}
        />
        <div className="relative flex flex-col items-center text-background">
          <Skills />
        </div>
      </div>
      <div className="flex flex-col items-center mx-40">
        <Experiences />
        <ContactForm />
      </div>
    </MainLayout>
  );
}
