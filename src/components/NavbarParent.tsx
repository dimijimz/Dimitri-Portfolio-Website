import React, { FunctionComponent, useState } from "react";
import NavBarDesktop from "./NavBarDesktop";

export type NavbarParentType = {
  className?: string;
};

const NavbarParent: FunctionComponent<NavbarParentType> = ({
  className = "",
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="w-[1056px] flex flex-row items-start justify-start max-w-full">
        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span>&#9776;</span> {/* Hamburger icon */}
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}

        {/* Desktop Menu */}
        <NavBarDesktop />
      </div>
    </header>
  );
};

export default NavbarParent;
