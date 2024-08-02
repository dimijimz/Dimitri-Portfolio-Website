import { FunctionComponent } from "react";
import NavbarParent from "../components/NavbarParent";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-light-text-color overflow-hidden flex flex-col items-center justify-start pt-0 px-5 pb-2.5 box-border leading-[normal] tracking-[normal]">
      <section className="w-[1248px] flex flex-col items-start justify-start pt-0 px-0 pb-[214px] box-border gap-[55px] max-w-full gap-[27px] mq750:pb-[90px] mq750:box-border mq1250:pb-[139px] mq1250:box-border">
        <NavbarParent />
        <Hero />
      </section>
      <ProjectSection />
      <section className="w-[1248px] flex flex-col items-start justify-start max-w-full text-center text-mini text-gray-900 font-btn-text">
        <AboutSection />
        <ContactSection />
        <div className="self-stretch bg-light-text-color flex flex-col items-center justify-center pt-12 px-5 pb-6 box-border max-w-full">
          <div className="w-[1078px] flex flex-col items-center justify-center gap-[11px] max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-[411px] gap-5 mq750:pl-[102px] mq750:pr-[102px] mq750:box-border mq1100:pl-[205px] mq1100:pr-[205px] mq1100:box-border mq1250:flex-wrap mq1250:justify-center">
              <div className="h-[47px] w-[47px] rounded-[24.08px] bg-gray-900 flex flex-col items-start justify-start pt-[10.7px] pb-[9.6px] pl-2.5 pr-[9px] box-border">
                <div className="flex flex-row items-end justify-start gap-[2.7px]">
                  <img
                    className="h-[26.7px] w-[6.8px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className="h-[17.9px] w-[17.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
              </div>
              <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
              <div className="rounded-[14.44px] flex flex-row items-center justify-center pt-[6.3px] px-[3px] pb-[6.4px]">
                <img
                  className="h-[43.3px] w-[43.3px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
              <img
                className="h-[34px] w-[43px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="self-stretch relative tracking-[-0.01em] font-light">
              Fully designed and developed by Dimitri Jimenez
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
