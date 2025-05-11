import React from "react";
import AnimatedText from "../components/AnimatedText.jsx";
import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div>
      <svg
        class="h-24 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          class="text-blue-300 fill-current"
          fill-opacity="0.99"
          d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="h-full grid grid-cols-12 gap-1 w-full bg-blue-300">
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
