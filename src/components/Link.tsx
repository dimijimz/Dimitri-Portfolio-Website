import { FunctionComponent } from "react";

export type LinkType = {
  className?: string;
};

const Link: FunctionComponent<LinkType> = ({ className = "" }) => {
  return (
    <a
      className={`[text-decoration:none] flex-1 relative text-sm tracking-[0.2px] leading-[24px] font-semibold font-btn-text text-dimgray-200 text-center ${className}`}
    >
      Home
    </a>
  );
};

export default Link;
