import React from "react";

const Service = ({ servicedata }) => {
  const { name, image, detail, tech } = servicedata;

  return (
    <div className="w-full rounded-none cursor-pointer serv shadow-md bg-secondary text-gray-100">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">{detail}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <button key={i} className="btn glass btn-sm">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
