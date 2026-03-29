import { forwardRef } from "react";
import { twJoin } from "tailwind-merge";

type PageSectionProps = {
  children: React.ReactNode;
  classNames?: string;
  id?: string;
};

export const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  ({ children, id, classNames }, ref) => {
    return (
      <div className={twJoin("mb-40 w-full", classNames)} id={id} ref={ref}>
        {children}
      </div>
    );
  }
);
