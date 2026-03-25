import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";

const buttonVariants = cva(
  "px-10 py-2 font-bold tracking-wider font-mono flex items-center justify-center flex-wrap gap-2" +
    " cursor-pointer relative",
  {
    variants: {
      variant: {
        emphasis:
          "bg-primary text-background border-primary border hover:scanlines",
        outline:
          "text-primary bg-background border border-primary hover:scanlines",
      },
    },
    defaultVariants: {
      variant: "emphasis",
    },
  },
);

const TypingDots = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 6);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <span>{".".repeat(count + 1)}</span>;
};

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    isLoading?: boolean;
  };

export const Button = ({
  children,
  leadingIcon,
  trailingIcon,
  variant,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={buttonVariants({ variant })}
      {...rest}
    >
      {isLoading ? (
        <TypingDots />
      ) : (
        <>
          {leadingIcon}
          {children}
          {trailingIcon}
        </>
      )}
    </button>
  );
};
