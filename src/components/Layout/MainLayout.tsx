type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex-auto min-w-0 overflow-y-auto bg-background px-20 text-primary ">
      {children}
    </section>
  );
};
