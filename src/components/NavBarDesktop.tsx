import { FunctionComponent } from "react";
import { Link as ScrollLink } from "react-scroll";

export type NavBarDesktopType = {
  className?: string;
};

const NavBarDesktop: FunctionComponent<NavBarDesktopType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-center justify-between py-4 px-[19px] box-border max-w-full text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-start py-[3px]">
          <h3 className="m-0 h-8 relative text-inherit leading-[32px] font-bold font-[inherit] inline-block whitespace-nowrap">
            <span>{`<`}</span>
            <span className="text-dimgray-100">Dimitri</span>
            <span>{`>`}</span>
            <span className="text-darkslategray-200">{` `}</span>
            <span>{`</Full Stack Developer>`}</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-12 max-w-full text-center text-sm text-dimgray-200">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Info
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          Contact
        </ScrollLink>
        {/* Vector Line Divider */}
        <div className="flex items-center">
          <div className="h-6 w-px bg-gray-900" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-light-text-color">
        <div className="rounded-17xl bg-gray-900 overflow-hidden flex flex-row items-center justify-center py-[10px] px-[20px] gap-[10px]">
          <a
            href="https://drive.google.com/file/d/1if4TrLO2YOUQxaZ3PLtXCNWfT61EuFMQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="[text-decoration:none] relative tracking-[0.2px] leading-[24px] font-semibold text-[14px] text-white whitespace-nowrap"
          >
            Download Resume
          </a>
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-2 h-2 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icn-arrowright-icnxs.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;