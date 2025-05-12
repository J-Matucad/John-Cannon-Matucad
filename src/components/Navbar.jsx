// src/components/Navbar.jsx
import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="text-xl font-semibold px-4">JCM</div>
      </div>

      <div className="navbar-end px-3">
        <a className="btn btn-ghost text-md" href="#home">
          Home
        </a>
        <a className="btn btn-ghost text-md" href="#about">
          About
        </a>
        <a className="btn btn-ghost text-md">Projects</a>
        <a className="btn btn-ghost text-md">Contact</a>
        <div className="hidden lg:flex">
          <ThemeToggleButton />
        </div>

        <div className="dropdown dropdown-end relative lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <i class="fas fa-bars text-[25px]"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg absolute right-0"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a href="https://www.facebook.com/xenon28">Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/john-cannon-matucad-a37b782b4">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/J-Matucad">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
