import { MainLayout } from "@/components/Layout/MainLayout";
import { Path } from "@/components/Layout/Path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <MainLayout>
      <Path />
    </MainLayout>
  );
}
