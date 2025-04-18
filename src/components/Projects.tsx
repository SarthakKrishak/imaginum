import hexa from "/Hexagons.svg";
import element from "/element.svg";
import Card from "./Cards";
import proj1 from "/proj1.svg";
import proj2 from "/proj2.svg";
import proj3 from "/proj3.svg";
import square from "/square.svg";
import more from '/gradient.png'
import { Toaster } from 'react-hot-toast';

// import Light from './Light'
import { motion, animate, useMotionValue } from "framer-motion";
const Projects = () => {
  const img1X = useMotionValue(90);
  const img1Y = useMotionValue(0);
  return (
    <>
      <Toaster position="top-center" />
      <motion.img
        style={{ x: img1X, y: img1Y }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.8}
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ zIndex: 50 }}
        onDragEnd={() => {
          animate(img1X, 90, { type: "spring", stiffness: 200 });
          animate(img1Y, 0, { type: "spring", stiffness: 200 });
        }}
        src={element}
        alt="#"
        className="absolute h-28 md:h-40 md:top-[112rem] md:left-32 left-56 top-[125rem] z-20 cursor-grab active:cursor-grabbing"
      />
      <img
        src={hexa}
        alt="#"
        className="md:h-[30rem] h-[24rem] ml-12 absolute"
      />
      <div className="relative mt-48">
        <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[6rem] flex flex-col gap-4">
          <div className="flex items-center">
            <img src={square} alt="image" className="size-9" />
            <h1 className="pl-4 md:pl-[1rem]">Our Projects</h1>
          </div>
          <div className="border-gradient-custom w-[7rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
        </div>

        <div className="px-6 md:px-[6rem] text-3xl md:text-6xl mt-4">
          <h1 className="text-[#A1B0D1] font-geist font-semibold">
            We build <br />
            real world <span className="text-white">projects</span> that <br />
            create impact
          </h1>
        </div>
      </div>
      <div className="flex flex-col ">
        <Card
          image={proj1}
          name="CSED VIT"
          subtitle="Official Website"
          description="Created the official website for the CSED Club, enhancing their digital presence by showcasing events,projects, and resources, and enabling better engagement with members and visitors."
          tags={["HTML", "CSS", "JS", "GSAP", "Swiper Js", "JQuery"]}
          liveUrl="https://csedvit.com/"
          buttonText="View Website"
          imagePosition="right"
          statuss="LIVE"
        />
        <Card
          image={proj2}
          name="CAMPUSMART"
          subtitle="Shopping platform"
          description="Campus Mart is a marketplace built for college students. It makes buying and selling items like books, gadgets, and projects easy on campus. The platform features a clean and user-friendly design."
          tags={[
            "React Js",
            "Node Js",
            "Express Js",
            "Mongo DB",
            "Socket io",
            "Tailwind CSS",
          ]}
          liveUrl=""
          buttonText="View Website"
          imagePosition="left"
          statuss="Currently Underway"
        />
        <Card
          image={proj3}
          name="CABSYNC"
          subtitle="A Travel Partner"
          description="CAB SYNC helps college students find travel partners for shared rides. Students can search for others going to the same destination or create rooms to connect with peers."
          tags={["React Native", "Node Js", "Socket io", "Firebase"]}
          liveUrl=""
          buttonText="View Website"
          imagePosition="right"
          statuss="Currently Underway"
        />
        <Card
          image={more}
          name="MORE PROJECT"
          subtitle="COMING SOON.."
          description="We get ideas all day . All of them are updated here as soon as we start working on them."
          tags={[]}
          liveUrl=""
          buttonText="Coming Soon"
          imagePosition="left"
          statuss="Initializing next project.."
        />
      </div>

      {/* <Light top={170} left={20}></Light>
<Light top={265} left={60}></Light> */}

      {/* <div className="absolute top-[336vh] left-1/2 -translate-x-1/2 md:left-[36rem] md:translate-x-0 -z-[80]">
        <div className="h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[400px] md:blur-[600px]"></div>
      </div>

      <div className="absolute top-[460vh] left-1/2 -translate-x-1/2 md:top-[520vh] md:left-[60rem] md:translate-x-0 -z-[80]">
        <div className="h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] rounded-full bg-[#006fff] opacity-[75%] blur-[400px] md:blur-[600px]"></div>
      </div> */}
    </>
  );
};

export default Projects;
