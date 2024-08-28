import { FunctionComponent } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export type AboutSectionType = {
  className?: string;
};

const AboutSection: FunctionComponent<AboutSectionType> = ({
  className = "",
}) => {
  return (
    <motion.div
      className={`self-stretch flex flex-col items-start justify-start pt-[63px] px-0 pb-0 box-border max-w-full text-center text-21xl text-gray-600 font-btn-text mq750:pt-[27px] mq750:box-border mq1250:pt-[41px] mq1250:box-border ${className}`}
      initial={{ opacity: 0, y: 50 }} // Initial state before the animation starts
      whileInView={{ opacity: 1, y: 0 }} // Only animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.3 }} // Only animate once when 30% of the section is in view
    >
      <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(#111827,_#111827),_rgba(17,_24,_39,_0.5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full pt-3 pb-3 mq750:text-13xl mq750:leading-[24px] mq450:text-5xl mq450:leading-[20px]">
          About
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-[63px] px-24 pb-[300px] box-border max-w-full text-left text-base font-open-sans mq750:pt-[27px] mq750:px-6 mq750:pb-[127px] mq750:box-border mq1250:pt-[41px] mq1250:px-12 mq1250:pb-[195px] mq1250:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-[55px] px-0 box-border gap-10 max-w-[1248px] gap-5 mq1100:pt-9 mq1100:pb-9 mq1100:box-border mq450:pt-[23px] mq450:pb-[23px] mq450:box-border mq1250:max-w-full">
          <div className="flex-1 flex flex-row items-center justify-start min-w-[330px] max-w-full">
            <img
              className="h-[480px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/pic@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[35px] min-w-[330px] max-w-full gap-[17px]">
            <div className="self-stretch relative leading-[24px] font-light [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Hi, I&apos;m Dimitri. I&apos;m a dedicated and passionate full stack
              developer with a strong focus on creating efficient, accessible,
              and visually appealing digital solutions. Currently pursuing a
              Bachelor of Science in Software Development at Grand Canyon
              University, I am constantly enhancing my skills and knowledge in
              the field.
            </div>
            <div className="self-stretch relative leading-[24px] font-light [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              I have hands-on experience with Python, Java, and full-stack web
              development, and have worked on various projects that demonstrate
              my ability to solve complex problems and deliver high-quality
              results. One of my notable projects is an AI-powered weather
              station, which showcases my expertise in AI integration, machine
              learning, IoT, and cloud computing.
            </div>
            <div className="self-stretch relative leading-[24px] font-light [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Beyond coding, I am a family man from New York, enjoying the
              journey of life with my wife and our young son. We live a vegan
              lifestyle and believe in the importance of health and wellness. In
              my free time, I stay active through walking and exploring new
              workout routines.
            </div>
            <div className="self-stretch relative leading-[24px] font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              TL;DR:
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-2.5 mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[162px]">
                <div className="relative leading-[24px]">
                  <p className="m-0">
                    <b>Academic Background:</b>
                  </p>
                  <p className="m-0">
                    Bachelor of Science in Software Development, graduating in
                    2025
                  </p>
                </div>
                <div className="self-stretch relative leading-[24px]">
                  <p className="m-0">
                    <b className="font-open-sans">Achievements</b>
                    <span>:</span>
                  </p>
                  <p className="m-0">
                    Developed AI-powered weather station, optimized technical
                    processes at Tesla
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[162px]">
                <div className="self-stretch relative leading-[24px]">
                  <p className="m-0">
                    <b>Proficient Skills:</b>
                  </p>
                  <p className="m-0">
                    Python, Java, Full-Stack Web Development, AI Integration,
                    Machine Learning, IoT, Cloud Computing
                  </p>
                </div>
                <div className="self-stretch relative leading-[24px]">
                  <p className="m-0">
                    <b>Freelance Work:</b>
                  </p>
                  <p className="m-0">Available for web development projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
