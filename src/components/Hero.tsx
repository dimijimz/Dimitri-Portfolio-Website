import { FunctionComponent } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// Define the props type for the Hero component
export type HeroType = {
  className?: string; // Optional className prop for custom styling
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <motion.div
      // Container for the entire Hero section with Framer Motion
      className={`w-full flex flex-col items-start justify-center max-w-[1248px] text-left text-21xl text-gray-900 font-btn-text mq1250:max-w-full ${className}`}
      initial={{ opacity: 0, y: 50 }} // Initial state before the animation starts
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.3 }} // Only animate once when 30% of the section is in view
    >
      <div className="self-stretch flex flex-row items-end justify-center gap-[63px] max-w-full gap-[31px] mq1100:flex-wrap gap-4">
        {/* Left column for the text content */}
        <div className="flex-1 flex flex-col items-start justify-center min-w-[289px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            {/* Hero section heading */}
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[72px] font-bold font-[inherit] mq750:text-13xl mq750:leading-[58px] mq450:text-5xl mq450:leading-[43px]">
              <p className="m-0">Welcome!</p>
              <p className="m-0">
                <span>{`I'm `}</span>
                <span className="text-dimitri">Dimitri.</span>
              </p>
            </h1>
            {/* Subheading text */}
            <div className="relative text-base leading-[24px] font-open-sans max-w-[900px]">
              <p className="m-0">
                I&apos;m a full stack developer. I like creating fast, accessible, and visually appealing digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right column for the social icons */}
        <div className="w-[741px] flex flex-row items-center justify-end py-[388px] px-0 box-border min-w-[741px] min-h-[995px] max-w-full gap-[21px] mq1100:flex-1 mq1100:pt-[252px] mq1100:pb-[252px] mq1100:box-border mq1100:min-w-full mq450:pt-[164px] mq450:pb-[164px] mq450:box-border">
          <div className="flex-1 flex flex-col items-end justify-center py-[43px] px-[25px] box-border max-w-full">
            <div className="w-[588px] overflow-hidden flex flex-row flex-wrap items-center justify-between py-0 px-[145px] box-border gap-5 max-w-full mq750:pl-[72px] mq750:pr-[72px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;