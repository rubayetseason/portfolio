import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const SocialBar = () => {
  return (
    <div className="px-10 my-auto text-xl flex flex-col gap-5">
      <div className="text-accent hover:text-primary">
        <FiLinkedin />
      </div>
      <div className="text-white hover:text-primary">
        {" "}
        <FiGithub />
      </div>
      <div className="text-accent hover:text-primary">
        {" "}
        <FiFacebook />
      </div>
      <div className="text-accent hover:text-primary">
        {" "}
        <SiGmail />
      </div>
    </div>
  );
};

export default SocialBar;
