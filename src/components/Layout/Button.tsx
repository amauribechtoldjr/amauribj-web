import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-10 py-2 font-bold tracking-wider font-mono flex items-center flex-wrap gap-2" +
    " cursor-pointer",
  {
    variants: {
      variant: {
        emphasis:
          "bg-primary text-background hover:-border-primary/50 hover:bg-primary/80",
        outline:
          "text-primary bg-background border border-primary hover:bg-primary hover:text-background",
      },
    },
    defaultVariants: {
      variant: "emphasis",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  onClick: () => void;
};

export const Button = ({
  children,
  leadingIcon,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={buttonVariants({ variant })}>
      {leadingIcon}
      {children}
    </button>
  );
};
