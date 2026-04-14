import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-40 min-h-[80vh] pt-20 px-10 w-full">
      <div className="flex-1 min-h-[75vh] flex justify-center">
        <Intro />
      </div>
      <div className="flex-1 flex">
        <ProfileImage />
      </div>
    </section>
  );
};
