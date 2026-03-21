type LabelProps = {
  children: React.ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <span className="text-off-primary font-mono">{children}</span>;
};
