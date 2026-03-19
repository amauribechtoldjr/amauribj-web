import { MenuLayout } from "@/components/Layout/MenuLayout";
import { MenuItem } from "@/constants/menus.constants";

export default function Skills() {
  return (
    <MenuLayout menuId={MenuItem.Skills}>
      <span className="text-white">Skills</span>
    </MenuLayout>
  );
}
