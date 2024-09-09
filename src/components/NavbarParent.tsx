import React, { FunctionComponent, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import NavBarDesktop from "./NavBarDesktop";

export type NavbarParentType = {
  className?: string;
};

const NavbarParent: FunctionComponent<NavbarParentType> = ({
  className = "",
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
      if (window.innerWidth > 950) {
        setMobileMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-between">
        {isMobile ? (
          <>
            <div className="flex flex-row items-center justify-start py-[3px]">
              <h3 className="m-0 h-8 relative text-inherit leading-[32px] font-bold font-[inherit] inline-block whitespace-nowrap">
                <span>{`<`}</span>
                <span className="text-dimgray-100">Dimitri</span>
                <span>{`>`}</span>
                <span className="text-darkslategray-200">{` `}</span>
                <span>{`</Full Stack Developer>`}</span>
              </h3>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span>&#9776;</span>
            </div>
            <nav className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="block py-2">
                Projects
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="block py-2">
                Info
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="block py-2">
                Contact
              </ScrollLink>
              <a
                href="https://drive.google.com/file/d/1if4TrLO2YOUQxaZ3PLtXCNWfT61EuFMQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2"
              >
                Download Resume
              </a>
            </nav>
          </>
        ) : (
          <NavBarDesktop />
        )}
      </div>
    </header>
  );
};

export default NavbarParent;