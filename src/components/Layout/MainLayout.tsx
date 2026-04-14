type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="min-w-0 bg-background text-primary">{children}</section>
  );
};
