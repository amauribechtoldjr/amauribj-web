export default function Navbar() {
  return (
    <nav className="h-16 bg-background border-b-2 border-primary/20 p-4 flex items-center justify-between">
      <span className="text-primary tracking-huge text-sm">
        AMAURI BECHTOLD JUNIOR
      </span>
      <div>
        <NavIcons />
      </div>
    </nav>
  );
}

const NavIcons = () => {
  return (
    <div className="bg-background py-1 px-4 border border-primary/20">
      <span className="font-display text-primary tracking-wide">
        SYSTEM_ACTIVE
      </span>
    </div>
  );
};
