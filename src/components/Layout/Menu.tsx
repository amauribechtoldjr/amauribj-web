import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { HomeIcon } from "@/components/Layout/Icons/HomeIcon";
import { OpenCloseIcon } from "@/components/Layout/Icons/OpenCloseIcon";
import { SkillsIcon } from "@/components/Layout/Icons/SkillsIcon";
import { UserIcon } from "@/components/Layout/Icons/UserIcon";
import { WalletIcon } from "@/components/Layout/Icons/WalletIcon";
import { MenuItem } from "@/components/Layout/MenuItem";

export const Menu = () => {
  return (
    <nav className="w-80 shrink-0 bg-background border-r-2 border-primary/20 flex flex-col divide-y divide-primary/20">
      <div className="px-6 py-8 flex gap-4">
        <div className="h-10 w-10 bg-primary flex items-center justify-center">
          <UserIcon />
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-mono font-bold text-sm tracking-wider">
            ROOT_USER
          </span>
          <span className="text-off-primary font-bold font-mono text-sm tracking-wider">
            SR_SOFT_ENG
          </span>
        </div>
      </div>
      <div>
        <MenuItem title="SOBRE" Icon={HomeIcon} href="/" />
        <MenuItem title="EXPERIÊNCIA" Icon={WalletIcon} href="/experience" />
        <MenuItem title="HABILIDADES" Icon={SkillsIcon} href="/skills" />
        <MenuItem title="PROJETOS" Icon={OpenCloseIcon} href="/projects" />
        <MenuItem title="CONTATO" Icon={ContactIcon} href="/contact" />
      </div>
    </nav>
  );
};
