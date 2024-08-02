import { FunctionComponent } from "react";
import Link from "./Link";

export type NavBarDesktopType = {
  className?: string;
};

const NavBarDesktop: FunctionComponent<NavBarDesktopType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-start justify-between py-4 px-[19px] box-border max-w-full gap-5 text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start py-[3px] px-0">
          <h3 className="m-0 h-8 relative text-inherit leading-[32px] font-bold font-[inherit] inline-block whitespace-nowrap mq1100:hidden">
            <span>{`<`}</span>
            <span className="text-dimgray-100">Dimitri</span>
            <span>{`>`}</span>
            <span className="text-darkslategray-200">{` `}</span>
            <span>{`</Full Stack Developer>`}</span>
          </h3>
        </div>
      </div>
      <div className="w-[571px] flex flex-row items-start justify-start gap-[33px] max-w-full text-center text-sm text-dimgray-200 gap-4">
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <Link />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.2px] leading-[24px] font-semibold text-[inherit]">
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.2px] leading-[24px] font-semibold text-[inherit]">
                    Info
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.2px] leading-[24px] font-semibold text-[inherit]">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-2.5 pl-2.5 pr-[9px]">
              <div className="h-6 w-px relative border-gray-900 border-r-[1px] border-solid box-border" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-left text-light-text-color">
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-17xl bg-gray-900 overflow-hidden flex flex-row items-start justify-start py-[15px] px-[25px] gap-[15px]">
              <a className="[text-decoration:none] relative tracking-[0.2px] leading-[28px] font-bold text-[inherit] whitespace-nowrap">
                Downlad Resume
              </a>
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <img
                  className="w-3 h-2.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icn-arrowright-icnxs.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;
