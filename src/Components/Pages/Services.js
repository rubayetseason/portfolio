import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("Servicesdata.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <section id="serviceid">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Services I Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 mt-10">
        {datas.map((serv) => (
          <Service key={serv.id} servicedata={serv}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
