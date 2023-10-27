import React from "react";
import { HiDownload } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="navbar bg-secondary top-0 fixed z-50 max-w-[1440px] mx-auto"
      data-aos="fade-down"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#homeid">Home</a>
            </li>
            <li>
              <a href="#serviceid">Services</a>
            </li>
            <li>
              <a href="#ProjectsID">Projects</a>
            </li>
            <li>
              <a href="#contactId">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl rubayet" href="/">
          Rubayet Islam
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-lg px-1">
          <li>
            <a href="#homeid">Home</a>
          </li>
          <li>
            <a href="#serviceid">Services</a>
          </li>
          <li>
            <a href="#ProjectsID">Projects</a>
          </li>
          <li>
            <a href="#contactId">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-primary"
          href="https://drive.google.com/file/d/1yi07gyUr-06kc16pEXsUxSIG4u1sTlBP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <HiDownload className="text-xl" /> &nbsp; Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
