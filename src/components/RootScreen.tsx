import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Experiences } from "@/components/Experiences";
import Footer from "@/components/Layout/Footer";
import { Intro } from "@/components/Layout/Intro";
import { MainLayout } from "@/components/Layout/MainLayout";
import { ProfileImage } from "@/components/Layout/ProfileImage";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubIcon } from "@/components/Layout/Icons/GithubIcon";
import { PageSection } from "@/components/Layout/PageSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const RootScreen = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: ".experiences",
        start: "top 115%",
        end: "top 70%",
        scrub: 4,
        pin: ".about",
        pinSpacing: true,
      },
    });
  });

  return (
    <>
      <MainLayout>
        <section className="flex items-center gap-16 min-h-[70vh] mx-40 pt-70">
          <div className="flex-2 flex flex-col">
            <Intro />
          </div>
          <div className="flex-1 flex justify-end">
            <ProfileImage />
          </div>
        </section>
        <div
          className="min-h-[130vh] flex items-center relative justify-between px-40 mt-10 about"
          ref={container}
        >
          <div
            className="absolute inset-0 bg-primary"
            style={{
              clipPath: "polygon(0 15%, 100% 20%, 100% 80%, 0 75%)",
            }}
          />
          <div className="flex flex-col items-center justify-center text-background flex-1 z-10">
            <PageSection classNames="flex overflow-x-auto">
              <div className="h-125 min-w-full flex flex-col items-center">
                <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
                  Frontend Development
                </span>
                <GithubIcon className="size-10" />
                <span className="mt-20">
                  I help you build user-friendly interfaces that are not only
                  visually appealing but also performant and accessible. With a
                  focus on React and modern frontend technologies, I create
                  seamless user experiences that drive engagement and
                  satisfaction.
                </span>
              </div>
              <div className="h-125 min-w-full flex flex-col items-center">
                <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
                  Backend Development
                </span>
                <GithubIcon className="size-10" />
                <span className="mt-20">
                  I help you build robust and scalable backend systems with
                  Node.js, Python, and other technologies. I focus on creating
                  efficient, secure, and maintainable solutions that power
                  modern applications and services.
                </span>
              </div>
              <div className="h-125 min-w-full flex flex-col items-center">
                <span className="text-2xl font-mono font-extrabold mt-4 -tracking-widest mb-4">
                  Frontend Development
                </span>
                <GithubIcon className="size-10" />
                <span className="mt-20">
                  I help you build user-friendly interfaces that are not only
                  visually appealing but also performant and accessible. With a
                  focus on React and modern frontend technologies, I create
                  seamless user experiences that drive engagement and
                  satisfaction.
                </span>
              </div>
            </PageSection>
          </div>
        </div>
        <div className="flex flex-col items-center mx-40 relative experiences">
          <Experiences />
          <ContactForm />
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};
