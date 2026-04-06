type LinkProps = {
  href: string;
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export const Link = ({ href, children, leadingIcon, ...rest }: LinkProps) => {
  return (
    <a href={href} className="flex items-center gap-2" {...rest}>
      {leadingIcon}
      <span className="cursor-pointer font-mono tracking-widest underline underline-offset-2">
        {children}
      </span>
    </a>
  );
};
