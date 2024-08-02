import { FunctionComponent } from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";

export type ProjectSectionType = {
  className?: string;
};

const ProjectSection: FunctionComponent<ProjectSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1248px] bg-gray-900 flex flex-col items-center justify-start pt-[84px] px-5 pb-[293px] box-border min-h-[1533px] max-w-full text-left text-5xl text-gray-900 font-btn-text mq750:pt-9 mq750:pb-[123px] mq750:box-border mq450:pt-[23px] mq450:pb-20 mq450:box-border mq1250:pt-[55px] mq1250:pb-[190px] mq1250:box-border ${className}`}
    >
      <div className="w-[848px] flex flex-col items-center justify-start gap-[50px] max-w-full gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-5 text-center text-21xl text-lightgray">
          <h1 className="m-0 w-[163px] relative text-inherit leading-[20px] font-normal font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq750:text-13xl mq750:leading-[16px] mq450:text-5xl mq450:leading-[12px]">
            Projects
          </h1>
        </div>
        <Container1
          box="/box.svg"
          inventoryManager="Inventory Manager"
          iDevelopedAnInventoryMana="I developed an Inventory Manager in Java to streamline the process of tracking and managing inventory for small businesses. This project includes features like adding, removing, and updating inventory items, as well as generating reports on stock levels."
          tagOrButton="Java Programming"
          tagOrButton1="Object-Oriented Design"
          tagOrButton2="View Project"
          tagOrButton3="User Interface Design"
          tagOrButton4="Software Testing"
        />
        <Container2
          vuesaxbulkdollarCircle="/vuesaxbulkdollarcircle.svg"
          betMaster="BetMaster"
          betMasterIsAnInteractiveB="BetMaster is an interactive betting game developed in Python, showcasing my ability to create engaging and dynamic applications. The game allows users to place bets, generates random outcomes, and calculates winnings, providing an entertaining and user-friendly experience."
          tagOrButton="Python Programming"
          tagOrButton1="Game Development"
          tagOrButton2="Algorithm Design"
          tagOrButton3="User Input Handling"
          tagOrButton4="View Project"
        />
        <Container2
          vuesaxbulkdollarCircle="/vuesaxbulkdollarcircle1.svg"
          betMaster="YourAIWeather Hub"
          propMinWidth="191px"
          betMasterIsAnInteractiveB="YourAIWeather Hub is an AI-powered weather station project designed to provide real-time weather updates using a Raspberry Pi and GPT-4 integration. The project aims to deliver accurate and accessible weather information through a user-friendly interface."
          tagOrButton="AI and Machine Learning"
          propDisplay="unset"
          propMinWidth1="unset"
          tagOrButton1="Python Programming"
          propMinWidth2="120px"
          tagOrButton2="Data Visualization"
          propWidth="88px"
          tagOrButton3="API Handling"
          propMinWidth3="72px"
          tagOrButton4="View Project"
        />
        <Container1
          box="/box1.svg"
          inventoryManager="Full Stack Web Developer - Freelance"
          propMinWidth="355px"
          iDevelopedAnInventoryMana="I provide full stack web development services, focusing on fast, accessible, and visually appealing websites. My services include website design and development, UX/UI design, responsive web design, and SEO optimization."
          propGap="20px"
          propWidth="74px"
          tagOrButton="HTML/CSS"
          propMinWidth1="58px"
          propWidth1="71px"
          tagOrButton1="JavaScript"
          propDisplay="inline-block"
          propMinWidth2="55px"
          tagOrButton2="View Project"
          tagOrButton3="UX/UI Design"
          tagOrButton4="Responsive Web Design"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
