import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const SocialBar = () => {
  return (
    <div className="hidden md:flex px-10 my-auto text-xl flex-col gap-5">
      <div className="text-accent hover:text-primary">
        <a href="https://www.linkedin.com/in/rubayet-islam2001/">
          <FiLinkedin />
        </a>
      </div>
      <div className="text-white hover:text-primary">
        {" "}
        <a href="https://github.com/rubayetseason">
          <FiGithub />
        </a>
      </div>
      <div className="text-accent hover:text-primary">
        {" "}
        <a href="https://www.facebook.com/rubayet.islam.sizn">
          <FiFacebook />
        </a>
      </div>
      <div className="text-accent hover:text-primary">
        {" "}
        <a href="mailto:rubayetislamseason5@gmail.com">
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
