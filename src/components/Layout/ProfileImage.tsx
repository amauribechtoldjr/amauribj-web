import amauriBj from "/profile.png";

export const ProfileImage = () => {
  return (
    <div className="border border-primary/20 p-2 min-w-0 relative cursor-default w-80 h-100 sm:w-90 sm:h-110 md:w-110 md:h-120 lg:w-90 lg:h-110">
      <img
        src={amauriBj}
        alt="Profile"
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-3 right-3 text-primary/40 border border-primary/20 bg-background/50 px-2 py-0.5 text-xs cyber-flicker">
        STATUS: VERIFIED
      </div>
      <div className="absolute top-3 left-3 text-primary/40 border border-primary/20 bg-background/50 px-2 py-0.5 text-xs cyber-flicker">
        ORIGIN: BRASIL/SC
      </div>
      <div className="absolute top-35 -right-6 rotate-90 text-primary/40 text-[8px] tracking-huge cyber-flicker">
        AMAURI BECHTOLD JUNIOR
      </div>
    </div>
  );
};
