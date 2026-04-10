import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full bg-secondary px-3 py-2.5 text-sm tracking-wider text-offwhite placeholder:text-offwhite/30 outline-none autofill:shadow-[inset_0_0_0px_1000px] autofill:shadow-secondary autofill:[-webkit-text-fill-color:var(--color-offwhite)] autofill:caret-offwhite ",
  {
    variants: {
      variant: {
        default: "",
        invalid: "ring-2 ring-red-700 ring-inset",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  placeholder?: string;
  invalid?: boolean;
};

export const Input = ({ placeholder, invalid, ...rest }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={inputVariants({
        variant: invalid ? "invalid" : "default",
      })}
      {...rest}
    />
  );
};
