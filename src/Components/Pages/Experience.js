const Experience = () => {
  return (
    <div id="experienceid" className="mt-44">
      <h1 className="mb-5 text-3xl md:text-5xl mt-14 font-bold text-center">
        Work Experience
      </h1>
      <div className="px-5 mt-10 grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div className="border-l-[5px] pl-5 border-primary">
          <h1 className="mt-5 text-2xl md:text-3xl font-medium">
            Full Stack Developer
          </h1>
          <a href="https://repsoft.in/" target="_blank" rel="noreferrer">
            <img
              className="mt-5 mb-1"
              src="experience/repsoft.png"
              alt="repsoft"
            />
          </a>
          <a href="https://repsoft.in/" target="_blank" rel="noreferrer">
            <h1 className="mt-3 text-2xl font-medium">
              Repsoft Consultancy Services
            </h1>
          </a>
          <h1 className="mb-5 text-xl font-medium">Telangana, India</h1>
          <h1 className="mt-2 mb-5 text-xl font-medium">
            November 2023 - Present
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
