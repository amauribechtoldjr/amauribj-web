import { cva } from "class-variance-authority";

const textAreaVariants = cva(
  "w-full resize-none bg-secondary px-3 py-2.5 text-sm tracking-wider text-offwhite placeholder:text-offwhite/30 outline-none autofill:shadow-[inset_0_0_0px_1000px] autofill:shadow-secondary autofill:[-webkit-text-fill-color:var(--color-offwhite)] autofill:caret-offwhite ",
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

type TextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className"
> & {
  placeholder?: string;
  invalid?: boolean;
};

export const TextArea = ({ placeholder, invalid, ...rest }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={textAreaVariants({
        variant: invalid ? "invalid" : "default",
      })}
      {...rest}
    />
  );
};
