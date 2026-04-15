import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-40 lg:gap-20 px-10 w-full items-center lg:flex-row lg:px-16 lg:justify-center">
      <div className="flex-1 min-h-screen flex justify-center lg:max-w-120">
        <Intro />
      </div>
      <div className="flex-1 flex lg:justify-end lg:max-w-120">
        <ProfileImage />
      </div>
    </section>
  );
};
