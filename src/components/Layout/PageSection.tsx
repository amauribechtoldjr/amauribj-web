type PageSectionProps = {
  children: React.ReactNode;
  id?: string;
};

export const PageSection = ({ children, id }: PageSectionProps) => {
  return (
    <div className="mb-40 w-full" id={id}>
      {children}
    </div>
  );
};
