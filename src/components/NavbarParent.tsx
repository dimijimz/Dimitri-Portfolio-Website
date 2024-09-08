import { FunctionComponent } from "react";
import NavBarDesktop from "./NavBarDesktop";

export type NavbarParentType = {
  className?: string;
};

const NavbarParent: FunctionComponent<NavbarParentType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="w-[1056px] flex flex-row items-start justify-start max-w-full">
        <NavBarDesktop />
      </div>
    </header>
  );
};

export default NavbarParent;