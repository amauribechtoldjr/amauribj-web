type RootProps = {
  children: React.ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex flex-col mt-8 gap-4">
      {children}
    </div>
  );
};
