import { FunctionComponent } from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import { motion } from "framer-motion"; // Import Framer Motion

export type ProjectSectionType = {
  className?: string;
};

const ProjectSection: FunctionComponent<ProjectSectionType> = ({
  className = "",
}) => {
  return (
    <motion.section
      className={`w-full max-w-[1248px] bg-gray-900 flex flex-col items-center justify-start pt-[84px] px-5 pb-[293px] box-border min-h-[1533px] text-left text-5xl text-gray-900 font-btn-text mq750:pt-9 mq750:pb-[123px] mq750:box-border mq450:pt-[23px] mq450:pb-20 mq450:box-border mq1250:pt-[55px] mq1250:pb-[190px] mq1250:box-border ${className}`}
      initial={{ opacity: 0, y: 50 }} // Initial state before the animation starts
      whileInView={{ opacity: 1, y: 0 }} // Only animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.1 }} // Only animate once when 10% of the section is in view
    >
      <div className="w-full max-w-[848px] mx-auto flex flex-col items-center justify-start gap-[50px]">
        {/* Adjusted Padding for Projects Heading */}
        <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-5 text-center text-21xl text-lightgray pb-20">
          <h1 className="m-0 relative text-inherit leading-[20px] font-normal font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq750:text-13xl mq750:leading-[16px] mq450:text-5xl mq450:leading-[12px]">
            Projects
          </h1>
        </div>

        {/* Project Containers */}
        <Container1
          box="/box.svg"
          inventoryManager="Inventory Manager"
          iDevelopedAnInventoryMana="I developed an Inventory Manager in Java to streamline the process of tracking and managing inventory for small businesses. This project includes features like adding, removing, and updating inventory items, as well as generating reports on stock levels."
          tagOrButton="Java Programming"
          tagOrButton1="Object-Oriented Design"
          tagOrButton2="User Interface Design"
          tagOrButton3="Software Testing"
          projectLink="https://github.com/dimijimz/Inventory-Manager-Java"
        />
        <Container2
          vuesaxbulkdollarCircle="/vuesaxbulkdollarcircle.svg"
          betMaster="BetMaster"
          betMasterIsAnInteractiveB="BetMaster is an interactive betting game developed in Python, showcasing my ability to create engaging and dynamic applications. The game allows users to place bets, generates random outcomes, and calculates winnings, providing an entertaining and user-friendly experience."
          tagOrButton="Python Programming"
          tagOrButton1="Game Development"
          tagOrButton2="Algorithm Design"
          tagOrButton3="User Input Handling"
          projectLink="https://github.com/dimijimz/BetMaster"
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
          projectLink="https://github.com/dimijimz/YourAIWeather-Hub"
        />
        <Container1
          box="/box1.svg"
          inventoryManager="To Do List App"
          propMinWidth="355px"
          iDevelopedAnInventoryMana="My to-do list app offers a sleek, minimalistic design that stands out while remaining highly functional. The smooth animation on the dark mode toggle adds a touch of sophistication, making it feel intuitive and enjoyable to use. With features like adding multiple tasks, marking them complete, and a one-click delete-all option, it streamlines task management without the clutter. Despite its simplicity, the site is loud and personable, creating a satisfying user experience that feels good every time you interact with it."
          propGap="20px"
          propWidth="74px"
          tagOrButton="HTML/CSS"
          propMinWidth1="58px"
          tagOrButton1="JavaScript"
          propDisplay="inline-block"
          propMinWidth2="55px"
          tagOrButton2="UX/UI Design"
          tagOrButton3="Responsive Web Design"
          projectLink="https://dimijimz.github.io/todo-list-app/"
        />
      </div>
    </motion.section>
  );
};
export default ProjectSection;
