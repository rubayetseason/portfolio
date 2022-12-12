import React from "react";

const Project = ({ project, setModalData }) => {
  const { name, project_info, image, short_detail, live } = project;

  return (
    <div className="card bg-secondary rounded-none shadow-xl h-full">
      <img src={image} alt="projectImage" />
      <div className="card-body">
        <div className="mb-5">
          <h2 className="card-title text-3xl mb-5">{name}</h2>
          <p className="text-lg">{project_info}</p>
        </div>
        <p className="leading-relaxed mb-2">{short_detail}</p>
        <label
          onClick={() => setModalData(project)}
          htmlFor="project-modal"
          className="btn btn-sm btn-outline rounded-none"
        >
          Project Detail
        </label>
        <a
          className="btn btn-sm btn-outline rounded-none"
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          <p>Live Site</p>
        </a>
      </div>
    </div>
  );
};

export default Project;
