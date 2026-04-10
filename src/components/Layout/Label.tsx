import type { ReactNode } from "react";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label className="text-xs tracking-wider font-bold text-primary">
      {children}
    </label>
  );
};
