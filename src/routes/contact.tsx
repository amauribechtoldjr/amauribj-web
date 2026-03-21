import { MainLayout } from "@/components/Layout/MainLayout";
import { Path } from "@/components/Layout/Path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <MainLayout>
      <Path />
    </MainLayout>
  );
}
