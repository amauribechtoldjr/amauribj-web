import { CornerLines } from "@/components/Layout/CornerLines";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex min-h-screen flex-col min-w-0 overflow-y-auto bg-background text-primary relative">
      {children}
      <CornerLines />
    </section>
  );
};
