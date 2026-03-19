import type { MenuItemType } from "@/constants/menus.constants";

type MenuLayoutProps = {
  children: React.ReactNode;
  menuId: MenuItemType;
};

export const MenuLayout = ({ children, menuId }: MenuLayoutProps) => {
  return (
    <section
      className="w-full flex justify-center min-h-screen scroll-mt-52"
      id={menuId}
    >
      {children}
    </section>
  );
};
