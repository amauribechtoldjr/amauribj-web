type TitleSeparatorProps = {
  title: string;
};

export const TitleSeparator = ({ title }: TitleSeparatorProps) => {
  return (
    <div className="flex gap-6 my-8 items-center w-full justify-center">
      <div className="w-40 h-1.5 bg-primary" />
      <span className="tracking-huge text-2xl">{title}</span>
    </div>
  );
};
