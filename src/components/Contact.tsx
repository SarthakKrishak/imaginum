import box from "/box.svg";
import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import insta from "/insta.svg";
import contactbg from "/contactbg.svg";

const Contact = () => {
  return (
    <div
      id="contact-home"
      className="min-h-[70vh] flex items-center justify-center px-4 mt-36 mb-10"
    >
      <div
        className="rounded-2xl px-8 py-16 md:p-24 mx-[2rem] md:mx-[6rem] text-center w-full text-white shadow-2xl flex flex-col gap-2"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            Want to Build something
            <span className="text-lime-400"> Amazing?</span> Let's discuss.
          </h1>
          <p className="text-sm md:text-lg font-medium text-gray-300 mb-6 max-w-2xl mx-auto font-['Figtree'] tracking-wide">
            Let's collaborate and bring your vision to life with our <br />
            technical expertise and creative approach.
          </p>
        </div>

        <div className="flex justify-center mb-6 mt-4">
          <img src={box} alt="logo" className="w-8 h-8" />
        </div>

        <p className="text-white text-lg tracking-widest mb-6">Get in Touch</p>

        <div className="flex flex-col lg:flex-row lg:pl-18 lg:pr-18 gap-2 justify-evenly">
          <a
            href="mailto:Imaginum.org@gmail.com"
            className="flex items-center gap-2 bg-black/60 px-10 py-4 font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700 hover:outline-2 hover:outline-neutral-600 duration-100 ease-linear"
          >
            <img src={mail} alt="mail" className="w-5 h-5" />
            Imaginum.org@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/company/imaginumorgg/"
            target="_blank"
            className="flex items-center gap-2 bg-black/60 px-10 py-4 font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700 hover:outline-2 hover:outline-neutral-600 duration-100 ease-linear"
          >
            <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            /imaginumorgg
          </a>
          <a
            href="https://www.instagram.com/ima.ginum/"
            target="_blank"
            className="flex items-center gap-2 bg-black/60 px-10 py-4 font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700 hover:outline-2 hover:outline-neutral-600 duration-100 ease-linear"
          >
            <img src={insta} alt="whatsapp" className="w-6 h-6" />
            /ima.ginum
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
