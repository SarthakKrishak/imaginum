import element from "/element.svg";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";
import darrow from "/darrow.svg";
const Hero = () => {
  const img1X = useMotionValue(90);
  const img1Y = useMotionValue(0);
  const [isHover, setIsHover] = useState(false);
  const img2X = useMotionValue(-90);
  const img2Y = useMotionValue(-10);

  return (
    <div className="lg:min-h-[85vh] min-h-[48vh] flex flex-col justify-between mt-16 py-8 px-6 md:px-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="px-4 py-1 text-[#D4FA00] border border-[#D4FA00] rounded-full text-xs md:text-sm font-lexend font-light">
          Innovate • Design • Build
        </div>

        <h1 className="font-bold text-white text-[2rem] md:text-[3rem] capitalize leading-[140%]">
          Building the future with smart,
          <br />
          seamless technology.
        </h1>
        <motion.button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="relative overflow-hidden rounded-md px-4 md:px-6 py-2 flex items-center shadow-[0px_4px_20px_0px_#398FFF66] bg-white"
        >
          {/* Background overlay that turns black on hover */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHover ? "100%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-full bg-black z-0"
          />

          <div
            onClick={() => {
              document
                .getElementById("about-home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative z-10 flex items-center gap-2 cursor-pointer"
          >
            <motion.p
              className="font-poppins text-[0.5rem] md:text-base"
              animate={{ color: isHover ? "#FFFFFF" : "#000000" }}
              transition={{ duration: 0.3 }}
            >
              Explore Now
            </motion.p>
            <motion.img
              src={darrow}
              alt="#"
              className="h-3 md:h-4"
              animate={{
                filter: isHover ? "invert(1)" : "invert(0)", // makes black icon white on hover
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* <div className="hidden h-[20rem] md:h-[22.9rem] lg:flex items-center justify-center font-raleway mt-12 mx-4 ">
        <TextHoverEffect text="IMAGINUM" />
      </div> */}

      <div className="hidden h-[20rem] md:h-[22.9rem] lg:flex items-center justify-center font-raleway mt-12 mx-4">
        <TextHoverEffect text="IMAGINUM" />
      </div>

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
        className="absolute h-28 md:h-40 md:top-[22rem] md:left-6 left-3 top-[26rem] cursor-grab active:cursor-grabbing"
      />

      <motion.img
        style={{ x: img2X, y: img2Y }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.8}
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ zIndex: 50 }}
        onDragEnd={() => {
          animate(img2X, -90, { type: "spring", stiffness: 200 });
          animate(img2Y, -10, { type: "spring", stiffness: 200 });
        }}
        src={element}
        alt="#"
        className="absolute h-24 md:h-28 top-[10rem] md:right-12 right-6 cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};

export default Hero;
