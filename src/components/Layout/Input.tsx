type InputProps = {
  label: string;
  placeholder?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-wider text-primary">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border border-b-primary border-b-2 border-offwhite/20 bg-secondary px-3 py-2.5 font-mono text-sm tracking-wider text-offwhite placeholder:text-offwhite/30 outline-none focus:border-t-primary/50 focus:border-x-primary/50"
        {...rest}
      />
    </div>
  );
};
