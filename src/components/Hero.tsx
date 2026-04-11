import { Intro } from "@/components/Layout/Intro";
import { ProfileImage } from "@/components/Layout/ProfileImage";

export const Hero = () => {
  return (
    <>
      <div className="flex-1">
        <Intro />
      </div>
      <div className="flex-1 flex justify-end">
        <ProfileImage />
      </div>
    </>
  );
};
