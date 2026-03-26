type SkillItem = {
  name: string;
  value: string;
};

type SkillCategoryProps = {
  category: string;
  items: SkillItem[];
};

export const SkillCategory = ({ category, items }: SkillCategoryProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="font-mono text-xs text-primary/80 tracking-widest">
        {`${category}`}
      </span>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between py-5 border-b border-primary/20 flex-wrap gap-4"
          >
            <span className="font-display text-offwhite/70 tracking-wider text-sm">
              {item.name}
            </span>
            <span className="font-mono text-primary text-sm">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
