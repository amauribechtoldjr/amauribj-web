import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { MainLayout } from "@/components/Layout/MainLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Experiences } from "@/components/Experiences";
import { Skills } from "@/components/Skills";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <MainLayout>
      <section className="flex items-center gap-2 min-h-screen mx-52">
        <div className="flex-2 flex flex-col">
          <Intro />
        </div>
        <div className="flex-1 flex justify-end">
          <ProfileImage />
        </div>
      </section>
      <div className="flex flex-col items-center mx-52">
        <Skills />
        <Experiences />
        <ContactForm />
      </div>
    </MainLayout>
  );
}
