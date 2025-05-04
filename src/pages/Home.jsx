import React from "react";
import Navbar from "../components/Navbar.jsx";
import Avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="grid grid-cols-12 gap-1 md:h-[500px] w-full">
          <div className="col-span-12 md:col-span-5 p-6 m-4 flex flex-row items-center justify-center">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full aspect-square rounded object-cover"
            />
          </div>

          <div className="col-span-12 md:col-span-7 p-6 m-4 place-content-center">
            <h1 className="mb-3 text-2xl md:text-3xl font-semibold text-left text-gray-400 drop-shadow-lg mb-0">
              Building my Future,
              <br />
              One Line of Code at a Time
            </h1>
            <h1 className="text-lg text-left text-gray-400 drop-shadow-lg mb-0">
              Hi, I'm John Cannon Matucad, an aspiring full-stack developer
              passionate about creating seamless, dynamic web experiences. Let's
              innovate together.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
