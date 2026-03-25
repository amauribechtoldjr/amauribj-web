import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full border border-b border-offwhite/20 bg-secondary px-3 py-2.5 font-mono text-sm tracking-wider text-offwhite placeholder:text-offwhite/30 outline-none ",
  {
    variants: {
      variant: {
        default:
          "focus:border-t-primary/50 focus:border-x-primary/50 border-b-primary",
        invalid: "border-red-700",
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
  label: string;
  placeholder?: string;
  invalid?: boolean;
};

export const Input = ({ label, placeholder, invalid, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-wider text-primary">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={inputVariants({
          variant: invalid ? "invalid" : "default",
        })}
        {...rest}
      />
    </div>
  );
};
