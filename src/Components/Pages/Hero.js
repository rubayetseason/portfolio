import React from "react";
import pic from "../../Assets/bnw.jpeg";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 text-accent px-3">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={pic} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Hello There</h1>
          <p className="py-5 text-6xl font-bold">
            I'm{" "}
            <span className="text-primary underline">
              Rubayet Islam Season!
            </span>
          </p>
          <p className="text-lg">A Front-End Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
