type ValueProps = {
  children: React.ReactNode;
};

export const Value = ({ children }: ValueProps) => {
  return (
    <span className="text-primary font-bold font-display">{children}</span>
  );
};
