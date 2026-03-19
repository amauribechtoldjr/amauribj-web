import { MenuLayout } from "@/components/Layout/MenuLayout";
import { MenuItem } from "@/constants/menus.constants";

export default function About() {
  return (
    <MenuLayout menuId={MenuItem.About}>
      <span className="text-white">About</span>
    </MenuLayout>
  );
}
