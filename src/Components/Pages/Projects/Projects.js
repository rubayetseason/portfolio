import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Project from "./Project";
import ProjectModal from "../../Shared/ProjectModal";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch("ProjectsData.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  return (
    <section id="proejctsId" className="mt-24 md:mt-44" data-aos="fade-up">
      <h1 className="text-3xl md:text-5xl mt-14 font-bold text-center">
        My Projects
      </h1>

      <div className="px-5">
        <Swiper
          className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          autoplay={true}
          navigation
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {projectsData.map((project, i) => (
            <SwiperSlide key={i}>
              <Project
                key={i}
                project={project}
                setModalData={setModalData}
              ></Project>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {modalData && <ProjectModal modalData={modalData} setModalData={setModalData}></ProjectModal>}
    </section>
  );
};

export default Projects;
