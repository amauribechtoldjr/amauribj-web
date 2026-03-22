import { Intro } from "@/components/bio/Intro";
import { ProfileImage } from "@/components/bio/ProfileImage";
import { MainLayout } from "@/components/Layout/MainLayout";
import { TitleSeparator } from "@/components/Layout/TitleSeparator";
import { createFileRoute } from "@tanstack/react-router";

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
      <section>
        <TitleSeparator title="CORE CAPABILITIES" />
      </section>
    </MainLayout>
  );
}
