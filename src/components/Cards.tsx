import React from "react";
import right from "/right.svg";
import toast from 'react-hot-toast';

interface CardProps {
  image: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl: string;
  buttonText?: string;
  imagePosition?: "left" | "right";
  statuss  :string// new prop
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  subtitle,
  description,
  tags,
  liveUrl,
  buttonText = "View Website",
  imagePosition = "left",
  statuss// default is left
}) => {
  const layoutDirection =
    imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={`
      rounded-xl p-5 shadow-xl flex flex-col ${layoutDirection} 
      gap-6 w-[90vw] mx-auto md:mt-20 mt-12 text-white origin-top-left bg-gradient-to-l from-blue-900 to-black rounded-[30px] outline outline-2 outline-offset-[-2px] outline-zinc-600/50 backdrop-blur-[10px]`}
    >
      {image ? (
        <img
          src={image}
          alt="project"
          className="w-full md:w-[42%] rounded-lg object-cover"
        />
      ) : (
        <div className="text-3xl font-semibold font-figtree w-full md:w-2/3 md:h-[60vh] rounded-xl bg-stone-950">
          <h1 className="w-full h-full flex justify-center items-center ">
            Coming soon!!
          </h1>
        </div>
      )}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="lg:text-5xl text-2xl font-semibold font-figtree pl-7 lg:pt-5 flex flex-col gap-2">
            <h2>{name}</h2>
            <span className="text-[#6683C1] font-normal">{subtitle}</span>
          </div>

          <p className="md:text-2xl text-white font-sora font-light mt-9 tracking-wide pl-7">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mt-10 pl-7 shrink-0">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-[0.8vh] text-base rounded-2xl outline outline-[0.58px] outline-offset-[-0.58px] outline-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4 pl-7">
          <a
            href={liveUrl}
            onClick={(e) => {
              if (!liveUrl) {
                e.preventDefault(); // prevent navigation
                toast("Coming Soon...");
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[linear-gradient(180deg,_rgba(0,0,0,0)_-40.91%,_#002094_132.95%)] px-6 py-3 font-sans rounded-lg text-sm font-medium transition border-[#ffffff] border-opacity-20 border-2   shadow-[inset_0px_14.04px_42.12px_0px_#497BFFB2,_0px_14.04px_56.16px_0px_#3F4AAF80] 
  backdrop-blur-[28.07938575744629px]"
          >
            <div className="flex justify-center items-center gap-2">
              {buttonText}

              <img src={right} alt="#" className="h-4" />
            </div>
          </a>
          <span className="text-white text-base">
            <span className="text-[#D4FA00] text-xl">●</span> {statuss}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
