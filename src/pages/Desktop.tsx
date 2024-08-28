import { FunctionComponent } from "react";
import NavbarParent from "../components/NavbarParent";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-light-text-color overflow-hidden flex flex-col items-center justify-start">
      <section className="w-full max-w-[1248px] flex flex-col items-center justify-start pt-0 px-5 pb-[214px] mx-auto box-border gap-[55px]">
        <NavbarParent />
        <Hero />
      </section>

      <section id="projects" className="w-full bg-gray-900 py-16 px-5">
        <div className="max-w-[1248px] mx-auto">
          <ProjectSection />
        </div>
      </section>

      <section id="about" className="w-full bg-light-text-color py-16 px-5">
        <div className="max-w-[1248px] mx-auto">
          <AboutSection />
        </div>
      </section>

      <section id="contact" className="w-full bg-gray-900 py-16 px-5">
        <div className="max-w-[1248px] mx-auto">
          <ContactSection />
        </div>
      </section>

      <div className="w-full bg-light-text-color flex flex-col items-center justify-center pt-12 px-5 pb-6 box-border">
        <div className="max-w-[1078px] mx-auto flex flex-col items-center justify-center gap-[11px]">
          <div className="w-full overflow-hidden flex flex-row items-center justify-between py-0 px-[411px] gap-5">
            
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/dimitri-jimenez/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[47px] w-[47px] rounded-[24.08px] bg-gray-900 flex flex-col items-start justify-start pt-[10.7px] pb-[9.6px] pl-2.5 pr-[9px] box-border"
            >
              <div className="flex flex-row items-end justify-start gap-[2.7px]">
                <img
                  className="h-[26.7px] w-[6.8px] relative"
                  loading="lazy"
                  alt="LinkedIn"
                  src="/vector-4.svg"
                />
                <img
                  className="h-[17.9px] w-[17.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </a>

            <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />

            {/* GitHub Button */}
            <a
              href="https://github.com/dimijimz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[14.44px] flex flex-row items-center justify-center pt-[6.3px] px-[3px] pb-[6.4px]"
            >
              <img
                className="h-[43.3px] w-[43.3px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt="GitHub"
                src="/icon.svg"
              />
            </a>

            <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />

            {/* Email Button */}
            <a
              href="mailto:dimijimz96@gmail.com?subject=Hello%2C%20there!"
              className="h-[34px] w-[43px] relative overflow-hidden shrink-0"
            >
              <img
                className="h-[34px] w-[43px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt="Email"
                src="/frame.svg"
              />
            </a>
          </div>

          {/* Footer Text */}
          <div className="self-stretch relative tracking-[-0.01em] font-light text-center font-open-sans">
            Full design and development by Dimitri Jimenez
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
