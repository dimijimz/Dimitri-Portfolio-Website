import { FunctionComponent, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Needed for smooth scrolling
import NavBarDesktop from "./NavBarDesktop"; // Full desktop navigation

export type NavbarParentType = {
  className?: string;
};

const NavbarParent: FunctionComponent<NavbarParentType> = ({
  className = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track if mobile menu is open

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-btn-text ${className}`}
    >
      <div className="w-full flex flex-row items-start justify-start max-w-full">
        <div className="flex items-center justify-between w-full py-4">
          {/* Logo */}
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

          {/* Mobile Hamburger Menu (only visible on tablet/mobile) */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-500 hover:text-gray-900 hover:border-gray-900"
            onClick={toggleMobileMenu} // Toggle the mobile menu when clicked
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16M4 12h16M4 19h16"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu (only visible when the hamburger menu is open) */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white z-50">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li className="cursor-pointer">
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-lg"
                    onClick={toggleMobileMenu} // Close the menu when a link is clicked
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-lg"
                    onClick={toggleMobileMenu}
                  >
                    Info
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-lg"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1if4TrLO2YOUQxaZ3PLtXCNWfT61EuFMQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white bg-gray-900 px-4 py-2 rounded"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Desktop Menu (only visible on larger screens) */}
          <div className="hidden md:flex w-full">
            <NavBarDesktop />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarParent;
