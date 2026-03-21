export default function Navbar() {
  return (
    <nav className="h-16 bg-background border-b-2 border-primary/20 p-4 flex items-center justify-between">
      <span className="font-display text-primary font-semibold tracking-widest">
        SYS_PORTFOLIO_V1.0.1
      </span>
      <div>
        <NavIcons />
      </div>
    </nav>
  );
}

const NavIcons = () => {
  return (
    <div className="bg-primary py-1 px-4">
      <span className="font-display text-black font-bold">SYSTEM_ACTIVE</span>
    </div>
  );
};
