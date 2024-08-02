import { FunctionComponent } from "react";

export type ContactSectionType = {
  className?: string;
};

const ContactSection: FunctionComponent<ContactSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-gray-900 flex flex-col items-start justify-start py-[63px] px-0 box-border gap-2.5 max-w-full text-center text-21xl text-light-text-color font-btn-text mq1100:pt-[41px] mq1100:pb-[41px] mq1100:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] font-normal font-[inherit] opacity-[0.9] mq750:text-13xl mq450:text-5xl">
        <span>Contact</span>
        <span className="text-silver">{` `}</span>
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-center justify-start pt-[98px] px-5 pb-[168px] box-border gap-8 max-w-full mq750:pt-16 mq750:pb-[109px] mq750:box-border gap-4">
          <div className="w-[750px] h-[42px] flex flex-row items-start justify-start gap-3.5 max-w-full">
            <div className="h-11 flex-1 rounded-8xs bg-gray-300 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3 px-3.5 max-w-[calc(100%_-_384px)]">
              <input
                className="w-[76px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[18px] relative tracking-[-0.01em] text-gray-100 text-left inline-block p-0"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="h-11 flex-1 rounded-8xs bg-gray-300 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3 px-3.5 max-w-[calc(100%_-_384px)]">
              <input
                className="w-[75px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[18px] relative tracking-[-0.01em] text-gray-100 text-left inline-block p-0"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="w-[750px] flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch h-[52px] rounded-8xs bg-gray-300 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-4 px-3.5">
              <input
                className="w-[37px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[18px] relative tracking-[-0.01em] text-gray-100 text-left inline-block p-0"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="self-stretch rounded-8xs bg-gray-300 border-gray-200 border-[1px] border-solid flex flex-row items-start justify-start p-3.5">
              <input
                className="w-[105px] [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[18px] relative tracking-[-0.01em] text-gray-100 text-left inline-block p-0"
                placeholder="Phone Number"
                type="text"
              />
            </div>
            <div className="self-stretch rounded-8xs bg-gray-300 border-gray-200 border-[1px] border-solid flex flex-row items-start justify-start pt-3.5 px-3.5 pb-[77px]">
              <input
                className="w-16 [border:none] [outline:none] font-inter text-mini bg-[transparent] h-[18px] relative tracking-[-0.01em] text-gray-100 text-left inline-block p-0"
                placeholder="Message"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[292px] box-border max-w-full mq750:pl-[146px] mq750:pr-[146px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button className="cursor-pointer [border:none] pt-[13.5px] pb-[12.5px] pl-[58px] pr-[53px] bg-[transparent] flex flex-row items-start justify-start relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-63xl bg-light-text-color" />
              <div className="relative text-mini tracking-[-0.01em] font-btn-text text-black text-left inline-block min-w-[55px] z-[1]">
                Submit
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
