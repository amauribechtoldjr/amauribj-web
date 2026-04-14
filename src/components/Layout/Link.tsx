type LinkProps = {
  href: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <a
      href={href}
      className="flex text-xs items-center gap-2 max-w-min cursor-pointer tracking-wider underline underline-offset-2"
      {...rest}
    >
      {children}
    </a>
  );
};
