import { FunctionComponent } from "react";
import NavBarDesktop from "./NavBarDesktop";

export type NavbarParentType = {
  className?: string;
};

const NavbarParent: FunctionComponent<NavbarParentType> = ({
  className = "",
}) => {
  return (
    <header className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-btn-text">
      <div className="w-full flex flex-row items-start justify-start max-w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full py-4">
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

          {/* Desktop Navigation (always visible) */}
          <div className="flex w-full">
            <NavBarDesktop />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarParent;
