import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contactId" className="mt-24 md:mt-36" data-aos="fade-up">
      <div className="px-5 flex flex-col md:flex-row items-center">
        <div className="text-center w-full md:w-1/2 lg:text-left col-span-5 lg:col-span-2">
          <div className="mb-5">
            <h1 className="text-3xl md:text-5xl font-semibold mb-5">
              Contact Me
            </h1>
            <p className="text-xl leading-relaxed">
              Send me an email if you think we can connect with each other and
              may work together in the near future and I'll reach out to you.
            </p>
          </div>
          <div className="mb-5 lg:mb-0">
            <h1 className="text-3xl font-semibold mb-5">My Socials</h1>
            <div className="flex justify-center md:justify-start">
              <div className="text-3xl hover:text-primary mr-4">
                {" "}
                <a href="https://github.com/rubayetseason">
                  <FiGithub />
                </a>
              </div>
              <div className="text-3xl hover:text-primary mx-4">
                <a href="https://www.linkedin.com/in/rubayet-islam2001/">
                  <FiLinkedin />
                </a>
              </div>
              <div className="text-3xl hover:text-primary ml-4">
                <a href="https://www.facebook.com/rubayet.islam.sizn">
                  <FiFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card  w-full md:w-1/2 shadow-2xl bg-base-100 col-span-5 lg:col-span-3">
          <form
            action="https://formsubmit.co/rubayetislamseason5@gmail.com"
            method="POST"
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="input input-bordered rounded-none p-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="input input-bordered rounded-none p-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Type your message here"
                name="message"
                className="input input-bordered rounded-none p-2 resize-none h-24"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary rounded-none"
                value="Send Email"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
