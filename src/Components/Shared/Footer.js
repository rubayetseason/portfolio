import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer mt-10 footer-center p-10 bg-secondary text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="#homeid" className="link link-hover hover:text-primary">
          Home
        </a>
        <a href="#serviceid" className="link link-hover hover:text-primary">
          Services
        </a>
        <a href="#projectsId" className="link link-hover hover:text-primary">
          Projects
        </a>
        <a href="#contactId" className="link link-hover hover:text-primary">
          Contact
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/rubayet-islam2001/">
            <FiLinkedin className="text-2xl hover:text-primary" />
          </a>
          <a href="https://github.com/rubayetseason">
            <FiGithub className="text-2xl hover:text-primary" />
          </a>
          <a href="https://www.facebook.com/rubayet.islam.sizn">
            <FiFacebook className="text-2xl hover:text-primary" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Rubayet Islam Season</p>
      </div>
    </footer>
  );
};

export default Footer;
