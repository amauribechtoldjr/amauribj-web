import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-40 px-10 w-full items-center lg:flex-row lg:px-16">
      <div className="flex-1 min-h-screen flex justify-center">
        <Intro />
      </div>
      <div className="flex-1 flex">
        <ProfileImage />
      </div>
    </section>
  );
};
