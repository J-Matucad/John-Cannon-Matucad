import React from "react";
import AnimatedText from "../components/AnimatedText.jsx";
import Avatar from "../assets/avatar.png";
import TopDivider from "../components/TopDivider";

const About = () => {
  return (
    <div>
      <TopDivider />
      <div className="h-full grid grid-cols-12 gap-1 w-full bg-primary">
        <div className="col-span-12 md:col-span-12 px-6 mx-7 w-fit">
          <h1 className="text-2xl md:text-3xl font-semibold text-left text-black-400 drop-shadow-lg">
            About Me
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 p-6 m-4 flex flex-row items-center justify-center">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full aspect-square rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
