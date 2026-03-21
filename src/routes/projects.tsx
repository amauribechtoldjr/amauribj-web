import { MainLayout } from "@/components/Layout/MainLayout";
import { Path } from "@/components/Layout/Path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: Project,
});

function Project() {
  return (
    <MainLayout>
      <Path />
    </MainLayout>
  );
}
