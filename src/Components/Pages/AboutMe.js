import React from "react";
import bg from "../../Assets/bg.png";

const AboutMe = () => {
  return (
    <section className="mt-14 md:mt-26 lg:mt-30 w-full">
      <div
        className="p-5 mx-auto sm:p-10 md:p-16 bg-base-100 text-gray-100"
        data-aos="fade-up"
      >
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src={bg} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-secondary">
            <div className="space-y-2">
              <a
                href="/"
                className="inline-block text-3xl font-semibold sm:text-4xl"
              >
                About Me
              </a>
            </div>
            <div className="text-gray-100">
              <p className="text-lg md:text-xl text-justify">
                I am a fullstack web developer with proficiency in NextJS,
                ReactJS, TypeScript and related frameworks, in addition
                to other core front-end skills. I also have background working
                with backend technologies like NodeJS, ExpressJS, and MongoDB,
                PostgreSQL, Mongoose, Prisma & GraphQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
