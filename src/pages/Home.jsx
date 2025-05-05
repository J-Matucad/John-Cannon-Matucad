import React from "react";
import Navbar from "../components/Navbar.jsx";
import Avatar from "../assets/avatar.png";
import AnimatedText from "../components/AnimatedText.jsx";
import About from "../components/About.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-1 w-full">
        <div className="col-span-12 md:col-span-5 p-6 m-4 flex flex-row items-center justify-center">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full aspect-square rounded object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-7 p-6 m-4 place-content-center">
          <AnimatedText
            speed={30}
            scrambleSpeed={30}
            className="text-2xl md:text-3xl font-semibold text-left text-gray-400 drop-shadow-lg mb-3"
            text={`Building my Future,\nOne Line of Code at a Time`}
          />

          <AnimatedText
            speed={30}
            scrambleSpeed={30}
            className="text-lg text-left text-gray-400 drop-shadow-lg mb-0"
            text={`Hi, I'm John Cannon Matucad, a full-stack desktop and web developer
              passionate about creating seamless, dynamic web experiences. Let's
              innovate together.`}
          />
        </div>
      </div>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
