type PageSectionProps = {
  children: React.ReactNode;
};

export const PageSection = ({ children }: PageSectionProps) => {
  return <div className="mb-40 w-full">{children}</div>;
};
