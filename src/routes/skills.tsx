import { MainLayout } from "@/components/Layout/MainLayout";
import { Path } from "@/components/Layout/Path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

function Skills() {
  return (
    <MainLayout>
      <Path />
    </MainLayout>
  );
}
