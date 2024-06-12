import React from "react";
import profileImage from "../assets/Images/IMG_2186.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={profileImage}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0  bg-white/50 text-[#001b5e]">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  lg:item-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-[#001b5e]">I'm Inaolaji Ridwan</h1>
          <h2 className="flex sm:text-3xl text-2xl  pt-4 text-[]#001b5e">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Ethuatiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", paddingLeft: "5px", color: "#001b5e" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.twitter.com">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="">
              <FaGithub className="cursor-pointer" size={20} />
            </a>

            <a href="">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
