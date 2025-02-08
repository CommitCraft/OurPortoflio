import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/Sidebar.png";
import "swiper/css"
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
