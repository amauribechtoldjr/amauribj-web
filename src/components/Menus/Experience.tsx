import { MenuLayout } from "@/components/Layout/MenuLayout";
import { MenuItem } from "@/constants/menus.constants";

export default function Experience() {
  return (
    <MenuLayout menuId={MenuItem.Experience}>
      <span className="text-white">Experience</span>
    </MenuLayout>
  );
}
