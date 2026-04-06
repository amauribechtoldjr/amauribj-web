import { forwardRef } from "react";
import { twJoin } from "tailwind-merge";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  ({ children, id, className }, ref) => {
    return (
      <section className={twJoin("min-w-0 px-40", className)} id={id} ref={ref}>
        {children}
      </section>
    );
  },
);
