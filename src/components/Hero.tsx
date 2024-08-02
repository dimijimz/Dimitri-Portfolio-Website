import { FunctionComponent } from "react";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-center max-w-[1248px] text-left text-21xl text-gray-900 font-btn-text mq1250:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-center gap-[63px] max-w-full gap-[31px] mq1100:flex-wrap gap-4">
        <div className="flex-1 flex flex-col items-start justify-center min-w-[289px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[72px] font-bold font-[inherit] mq750:text-13xl mq750:leading-[58px] mq450:text-5xl mq450:leading-[43px]">
              <p className="m-0">Welcome!</p>
              <p className="m-0">
                <span>{`I’m `}</span>
                <span className="text-dimitri">Dimitri.</span>
              </p>
            </h1>
            <div className="relative text-base leading-[24px] font-open-sans">
              <p className="[margin-block-start:0] [margin-block-end:3px]">
                I'm a full stack developer. I like creating fast, accessible and
              </p>
              <p className="m-0"> visually appealing digital solutions.</p>
            </div>
          </div>
        </div>
        <div className="w-[741px] flex flex-row items-center justify-end py-[388px] px-0 box-border min-w-[741px] min-h-[995px] max-w-full gap-[21px] mq1100:flex-1 mq1100:pt-[252px] mq1100:pb-[252px] mq1100:box-border mq1100:min-w-full mq450:pt-[164px] mq450:pb-[164px] mq450:box-border">
          <div className="flex-1 flex flex-col items-end justify-center py-[43px] px-[25px] box-border max-w-full">
            <div className="w-[588px] overflow-hidden flex flex-row flex-wrap items-center justify-between py-0 px-[145px] box-border gap-5 max-w-full mq750:pl-[72px] mq750:pr-[72px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[47px] w-[47px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[24.08px] bg-gray-900 flex flex-col items-start justify-start pt-[10.7px] pb-[9.6px] pl-2.5 pr-[9px] box-border">
                <div className="flex flex-row items-end justify-start gap-[2.7px]">
                  <img
                    className="h-[26.7px] w-[6.8px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="h-[17.9px] w-[17.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
              <div className="overflow-hidden flex flex-col items-center justify-center w-[34px] h-[34px]">
                <img
                  className="w-[34px] h-[34px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className="h-[25px] w-px relative border-dimitri border-r-[1px] border-solid box-border" />
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start">
                <img
                  className="w-[43px] h-[34px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
