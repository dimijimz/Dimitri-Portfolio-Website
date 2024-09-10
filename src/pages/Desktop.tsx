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
        <div className="max-w-[1078px] w-full mx-auto flex flex-col items-center justify-center gap-[11px]">
          {/* Button Container */}
          <div className="w-full overflow-hidden flex flex-row items-center justify-center gap-5 flex-wrap">
            
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/dimitri-jimenez/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] w-[40px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[24.08px] bg-gray-900 flex flex-col items-start justify-start pt-[8px] pb-[8px] pl-2 pr-[8px] box-border transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-110"
            >
              <div className="flex flex-row items-end justify-start gap-[2.7px]">
                <img
                  className="h-[20px] w-[5px] relative"
                  loading="lazy"
                  alt="LinkedIn"
                  src="/vector.svg"
                />
                <img
                  className="h-[15px] w-[15px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </a>

            {/* Divider Line */}
            <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
            
            {/* GitHub Button */}
            <a
              href="https://github.com/dimijimz"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden flex flex-col items-center justify-center w-[40px] h-[40px] transition-all duration-300 ease-in-out hover:scale-110"
            >
              <img
                className="w-[40px] h-[40px] relative"
                loading="lazy"
                alt="GitHub"
                src="/vector-2.svg"
              />
            </a>

            {/* Divider Line */}
            <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
            
            {/* Email Button */}
            <a
              href="mailto:dimijimz96@gmail.com?subject=Hello%2C%20there!"
              className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start transition-all duration-300 ease-in-out hover:scale-110"
            >
              <img
                className="w-[43px] h-[34px] relative"
                loading="lazy"
                alt="Email"
                src="/vector-3.svg"
              />
            </a>
          </div>

          {/* Footer Text */}
          <div className="self-stretch relative tracking-[-0.01em] font-light text-center font-open-sans 
              text-sm sm:text-xs">
            Full design and development by Dimitri Jimenez
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;