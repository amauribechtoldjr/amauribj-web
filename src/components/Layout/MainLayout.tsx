type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex-auto min-w-0 overflow-y-auto bg-background px-20 text-primary relative">
      {children}
      <div className="absolute w-px h-56 bg-primary/35 top-5 left-5 z-10" />
      <div className="absolute w-56 h-px bg-primary/35 top-5 left-5 z-0" />
    </section>
  );
};
