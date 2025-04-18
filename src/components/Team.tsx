import linkedin from "/link-black.svg";
import x from "/xblack.svg";
import sarthak from "/sarthak.png";
import kamal from "/kamal.png";
import anurag from "/anurag.png";
import utkarsh from "/utkarsh.png";
import square from "/square.svg";

export default function Team() {
  return (
    <>
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[6rem] flex flex-col gap-4 mt-36 mb-10">
        <div className="flex items-center">
          <img src={square} alt="image" className="size-9" />
          <h1 className="pl-4 md:pl-[1rem]">Our Team</h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
      </div>

      <div className="flex flex-col gap-2 lg:gap-12 items-center justify-center md:flex-row pl-20 pr-20">
        {/* Sarthak Card */}
        <div className="w-full lg:w-[18vw] md:w-[50vw] rounded-xl flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="h-[35vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden ">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-1 pt-3 h-[8vh] absolute top-0 right-2 z-[2]">
              <a href="#">
                <img
                  src={x}
                  alt="Twitter"
                  className="size-9 rounded-full p-1"
                />
              </a>

              <a href="">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="size-9 rounded-full p-1"
                />
              </a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex items-end justify-center pt-2 md:pb-4 h-[8vh]">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={sarthak}
                alt="Sarthak"
                className="min-h-[15vh] md:min-h-[25vh] w-auto object-cover absolute lg:top-1"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pl-6 pt-4 flex flex-col  gap-2  pb-5  ">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl text-white font-['Geist'] tracking-wide">
                Sarthak Krishak
              </h1>
              <h2 className="text-[#ADCC00] text-md font-['Geist'] tracking-wide">
                Co-founder | CEO
              </h2>
            </div>
            <p className="text-[#a2a2a2] text-md font-semibold md:text-base">
              Driven CEO and development expert, leading the company to create
              innovative, user-focused solutions.
            </p>
          </div>
        </div>

        {/* Kamal Card */}
        <div className="w-full lg:w-[18vw] md:w-[50vw] rounded-xl flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="h-[35vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden ">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-1 pt-3 h-[8vh] absolute top-0 right-2 z-[2]">
              <a href="#">
                <img
                  src={x}
                  alt="Twitter"
                  className="size-9 rounded-full p-1"
                />
              </a>

              <a href="">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="size-9 rounded-full p-1"
                />
              </a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex items-end justify-center pt-2 md:pb-4 h-[8vh]">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={kamal}
                alt="image"
                className="min-h-[15vh] md:min-h-[25vh] w-auto object-cover absolute lg:top-0"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pl-6 pt-4 flex flex-col  gap-2  pb-5  ">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl text-white font-['Geist'] tracking-wide">
                Kamal Sinha
              </h1>
              <h2 className="text-[#ADCC00] text-md font-['Geist'] tracking-wide">
                Co-founder | CTO
              </h2>
            </div>
            <p className="text-[#a2a2a2] text-md font-semibold md:text-base lg:mr-5">
              Innovative CTO with expertise in tech development, driving
              user-centered, cutting-edge solutions.
            </p>
          </div>
        </div>
        {/* Anurag Card */}
        <div className="w-full lg:w-[18vw] md:w-[50vw] rounded-xl flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="h-[35vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden ">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-1 pt-3 h-[8vh] absolute top-0 right-2 z-[2]">
              <a href="#">
                <img
                  src={x}
                  alt="Twitter"
                  className="size-9 rounded-full p-1"
                />
              </a>

              <a href="">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="size-9 rounded-full p-1"
                />
              </a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex items-end justify-center pt-2 md:pb-4 h-[8vh]">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={anurag}
                alt="image"
                className="min-h-[15vh] md:min-h-[25vh] w-auto object-cover absolute lg:top-9"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pl-6 pt-4 flex flex-col  gap-2  pb-5  ">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl text-white font-['Geist'] tracking-wide">
                Anurag Adarsh
              </h1>
              <h2 className="text-[#ADCC00] text-md font-['Geist'] tracking-wide">
                CPO | Head of Design
              </h2>
            </div>
            <p className="text-[#a2a2a2] text-md font-semibold md:text-base lg:pr-2">
              Creative CPO and Head of Design, shaping product vision and user
              experiences to drive innovation.
            </p>
          </div>
        </div>
        {/* Utkarsh Card */}
        <div className="w-full lg:w-[18vw] md:w-[50vw] rounded-xl flex flex-col justify-between bg-gradient-to-tl from-[#000000] to-[#002774] overflow-hidden border-[#575757] border">
          {/* Top Section */}
          <div className="h-[35vh] flex flex-col px-4 rounded-tr-md rounded-tl-md bg-[#f1f1f1] relative overflow-hidden ">
            {/* Social icons */}
            <div className="flex justify-end w-full gap-1 pt-3 h-[8vh] absolute top-0 right-2 z-[2]">
              <a href="#">
                <img
                  src={x}
                  alt="Twitter"
                  className="size-9 rounded-full p-1"
                />
              </a>

              <a href="">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="size-9 rounded-full p-1"
                />
              </a>
            </div>

            {/* Image container - responsive positioning */}
            <div className="flex items-end justify-center pt-2 md:pb-4 h-[8vh]">
              <div className="absolute bottom-0 w-full bg-gradient-to-r from-transparent via-[#1f2937] to-transparent"></div>
              <img
                src={utkarsh}
                alt="image"
                className="min-h-[15vh] md:min-h-[25vh] object-cover absolute lg:top-[-2vh] lg:size-[22vw]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pl-6 pt-4 flex flex-col  gap-2  pb-5  ">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl text-white font-['Geist'] tracking-wide">
                Utkarsh
              </h1>
              <h2 className="text-[#ADCC00] text-md font-['Geist'] tracking-wide">
                Head of Development
              </h2>
            </div>
            <p className="text-[#a2a2a2] text-md font-semibold md:text-base lg:pr-2">
              Visionary Head of Development, leading teams to build innovative
              and scalable technology solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
