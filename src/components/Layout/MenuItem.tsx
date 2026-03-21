import { Link, useMatchRoute } from "@tanstack/react-router";
import { cva } from "class-variance-authority";

const menuItemVariants = cva(
  "px-6 py-5 font-mono text-sm flex items-center gap-2 font-bold tracking-huge",
  {
    variants: {
      active: {
        false: "text-off-primary hover:text-primary hover:translate-x-2",
        true: "",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

type MenuItemProps = {
  title: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const MenuItem = ({ title, href, Icon }: MenuItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to: href });

  return (
    <Link to={href} className={menuItemVariants({ active: isActive })}>
      <Icon className={isActive ? "opacity-100" : "opacity-70"} />
      {title}
    </Link>
  );
};
