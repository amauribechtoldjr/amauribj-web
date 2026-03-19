import { MenuLayout } from "@/components/Layout/MenuLayout";
import { MenuItem } from "@/constants/menus.constants";

export default function Projects() {
  return (
    <MenuLayout menuId={MenuItem.Projects}>
      <span className="text-white">Projects</span>
    </MenuLayout>
  );
}
