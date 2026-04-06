type TitleSeparatorProps = {
  title: string;
};

export const TitleSeparator = ({ title }: TitleSeparatorProps) => {
  return (
    <div className="flex gap-6 my-8 items-center w-full">
      <span className="text-7xl font-display">{title}</span>
    </div>
  );
};
