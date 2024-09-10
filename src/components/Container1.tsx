import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Container1Type = {
  className?: string;
  box?: string;
  inventoryManager?: string;
  iDevelopedAnInventoryMana?: string;
  tagOrButton?: string;
  tagOrButton1?: string;
  tagOrButton2?: string;
  tagOrButton3?: string;
  tagOrButton4?: string;
  projectLink?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const Container1: FunctionComponent<Container1Type> = ({
  className = "",
  box,
  inventoryManager,
  propMinWidth,
  iDevelopedAnInventoryMana,
  propGap,
  propWidth,
  tagOrButton,
  propMinWidth1,
  tagOrButton1,
  propDisplay,
  propMinWidth2,
  projectLink,
}) => {
  const inventoryManagerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const tagStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tagOrButtonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tagOrButton1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  return (
    <div
      className={`self-stretch rounded-2xl bg-light-text-color overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-btn-text ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 px-0 box-border gap-2.5 max-w-full">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src={box}
              />
            </div>
          </div>
          <h1
            className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-[inherit] inline-block min-w-[180px] max-w-full mq450:text-lgi mq450:leading-[22px]"
            style={inventoryManagerStyle}
          >
            {inventoryManager}
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-5 box-border max-w-full text-base text-gray-600 font-open-sans">
          <div className="flex-1 relative leading-[24px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full">
            {iDevelopedAnInventoryMana}
          </div>
        </div>
      </div>
      <div className="w-[780px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full text-xs text-darkslategray-100 font-open-sans">
  <div
    className="flex-1 flex flex-row items-center justify-between py-2.5 px-[41px] box-border max-w-full gap-[7.8px] mq1100:flex-wrap"
    style={containerStyle}
        >
          {/* "View Project" button - remains interactive */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border-darkslategray-100 border-[1px] border-solid py-1.5 px-[7px] bg-darkslategray-100 w-[85px] rounded-81xl box-border flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-300 hover:border-dimgray-300 hover:border-[1px] hover:border-solid hover:box-border"
          >
            <div className="relative text-xs font-open-sans text-light-text-color text-left inline-block min-w-[69px]">
              View Project
            </div>
          </a>

          <div className="w-5 flex flex-row items-center justify-start py-2.5 pl-2.5 pr-2 box-border">
            <div className="h-6 w-px relative border-gray-900 border-r-[1px] border-solid box-border" />
          </div>

          {/* Tags - now non-interactive */}
          <div className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-light mr-2 mb-2">
      {tagOrButton}
    </div>
    <div className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-light mr-2 mb-2">
      {tagOrButton1}
    </div>
    <div className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-light mr-2 mb-2">
      User Interface Design
    </div>
    <div className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-light mr-2 mb-2">
      Software Testing
    </div>
  </div>
</div>
    </div>
  );
};

export default Container1;