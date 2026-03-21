import { twJoin } from "tailwind-merge";

type RootProps = {
  children: React.ReactNode;
  className?: string;
};

export const Root = ({ children, className }: RootProps) => {
  return (
    <div
      className={twJoin(
        className,
        "border-t-4 border-primary/20 border bg-secondary p-6 border-t-primary",
      )}
    >
      {children}
    </div>
  );
};
