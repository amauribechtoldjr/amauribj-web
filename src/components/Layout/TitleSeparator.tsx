type TitleSeparatorProps = {
  title: string;
};

export const TitleSeparator = ({ title }: TitleSeparatorProps) => {
  return (
    <div className="flex gap-6 my-8 items-center w-full justify-center">
      <div className="grow h-px bg-primary/20" />
      {/* <div className="grow h-1 bg-primary/70" /> */}
      <span className="tracking-huge text-2xl">{title}</span>
      <div className="grow h-px bg-primary/20" />
    </div>
  );
};
