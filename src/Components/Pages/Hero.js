import pic from "../../Assets/bnw.jpeg";

const Hero = () => {
  return (
   <div>
     <div data-aos='fade-up' id="homeid" className="hero bg-base-100 text-accent mt-24 md:px-3">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={pic}
          className="max-w-sm w-11/12 md:w-full rounded-lg shadow-2xl"
          alt=""
        />
        <div className="md:w-1/2 mt-5 md:mt-1">
          <h1 className="text-4xl md:text-5xl font-bold">Hello There</h1>
          <p className="py-5 text-5xl md:text-6xl font-bold">
            I'm{" "}
            <span className="text-primary underline">
              Rubayet Islam Season!
            </span>
          </p>
          <p className="text-xl">A Front-End Web Developer</p>
          <button className="btn btn-primary mt-3">Let's Explore</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
