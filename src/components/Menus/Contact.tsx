import { MenuLayout } from "@/components/Layout/MenuLayout";
import { MenuItem } from "@/constants/menus.constants";

export default function Contact() {
  return (
    <MenuLayout menuId={MenuItem.Contact}>
      <span className="text-white">Contact</span>
    </MenuLayout>
  );
}
