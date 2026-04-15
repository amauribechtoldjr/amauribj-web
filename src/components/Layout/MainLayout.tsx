type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="min-w-0 bg-background text-primary">{children}</main>;
};
