import React from "react";
import Navbar from "../components/Navbar.jsx";
import AnimatedText from "../components/AnimatedText.jsx";
import About from "../components/About.jsx";
import TypewriterText from "../components/TypewriterText.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <div className="h-full md:h-screen grid grid-cols-12 gap-1 w-full">
          <div className="col-span-12 md:col-span-12 p-6 mx-7 md:place-content-center md:my-0 my-12">
            <h1 className="text-2xl md:text-3xl font-semibold text-left text-black-400 drop-shadow-lg mb-3">
              What's up?
            </h1>
            <h1 className="text-2xl md:text-5xl font-semibold text-left text-black-400 drop-shadow-lg mb-3">
              I'm John Cannon Matucad
            </h1>

            <TypewriterText
              speed={100}
              pause={1500}
              className="text-2xl md:text-5xl font-semibold text-left text-gray-400 drop-shadow-lg mb-3"
            />

            <h1 className="text-sm md:text-lg w-full md:w-200 font-semibold text-left text-gray-400 drop-shadow-lg mb-3">
              Information Technology Graduate from Polytechnic University of the
              Philippines Biñan Campus who loves building tools to solve
              real-world problems. I enjoy taking on challenges that push me to
              learn new skills while creating solutions that matter.
            </h1>
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
