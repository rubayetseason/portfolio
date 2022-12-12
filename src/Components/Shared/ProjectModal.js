import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ProjectModal = ({ modalData, setModalData }) => {
  const {
    name,
    project_info,
    detail,
    client,
    server,
    slide1,
    slide2,
    slide3,
    live,
  } = modalData;
  const handleclick = () => {
    setModalData(null);
  };
  return (
    <div className="mdd">
      <input type="checkbox" id="project-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-1/2 max-w-5xl z-[99]">
          <label
            onClick={handleclick}
            htmlFor="project-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <Swiper
              className="grid grid-cols-3 w-11/12"
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              autoplay={true}
              navigation
              loop
              slidesPerView={"1"}
            >
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <h3 className="text-2xl font-bold mt-2">{name}</h3>
          <h3 className="text-lg font-bold">{project_info}</h3>
          <p className="pt-2 pb-4">{detail}</p>
          <div className="flex gap-2">
            <a href={live}>
              <button className="btn btn-sm btn-outline rounded-none">
                Live Site
              </button>
            </a>
            <a href={client}>
              <button className="btn btn-sm btn-outline rounded-none">
                Client Side Repository
              </button>
            </a>
            {server && (
              <a href={server}>
                <button className="btn btn-sm btn-outline rounded-none">
                  Server Side Repository
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
