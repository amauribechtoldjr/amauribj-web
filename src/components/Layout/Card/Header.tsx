type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs tracking-wide">{children}</span>
      <div className="h-2 w-2 bg-primary" />
    </div>
  );
};
