// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    // <div className="navbar bg-base-100 shadow-sm">
    //   <div className="text-xl font-semibold px-4">JCM</div>
    //   <a className="btn btn-ghost text-md">Home</a>
    //   <a className="btn btn-ghost text-md">About</a>
    //   <a className="btn btn-ghost text-md">Projects</a>
    //   <a className="btn btn-ghost text-md">Contact</a>
    //   <a href=""> <i className="fa fa-bars"></i> </a>
    // </div>
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="text-xl font-semibold px-4">JCM</div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost text-md">Home</a>
        <a className="btn btn-ghost text-md">About</a>
        <a className="btn btn-ghost text-md">Projects</a>
        <a className="btn btn-ghost text-md">Contact</a>
      </div>

      <div className="navbar-end px-3">
        <div className="hidden lg:flex">
          <i className="mx-2 fab fa-facebook-square text-[25px]"></i>
          <i className="mx-2 fab fa-linkedin text-[25px]"></i>
          <i className="mx-2 fab fab fa-github-square text-[25px]"></i>
        </div>
        <div className="dropdown dropdown-end relative lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <i className="fas fa-hamburger"></i>
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
              <a>Facebook</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
