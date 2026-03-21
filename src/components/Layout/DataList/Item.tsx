type ItemProps = {
  children: React.ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return (
    <div className="flex items-center gap-2 justify-between pb-4 border-b border-primary/20">
      {children}
    </div>
  );
};
