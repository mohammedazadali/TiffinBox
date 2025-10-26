import React from "react";
import { menu } from "../assets/data";
import { featureMenu } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MenuItems from "./MenuItems";
import { IoIosArrowForward } from "react-icons/io";
import TextAnimate from "../utils/TextAnimate";

const Menu = () => {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center px-[6%] py-[50px] min-h-screen relative"
        style={{
          backgroundImage: `url(${menu})`,
          backgroundSize: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "brightness(1.2)", // make background bright
        }}
      >
        <span  className="text-[#FCB017] head=text font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">Featured Menu</span>
        <h2 className="text-center font-light head-text mb-10"><TextAnimate text="Discover our most popular dishes" /></h2>
        {/* Menu slider */}
        <div className="relative z-10 w-full max-w-6xl overflow-x-hidden overflow-y-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="menu-swiper"
          >
            {featureMenu.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center">
                  <MenuItems items={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex items-center gap-2.5 py-2.5 px-6 font-mont text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all duration-300 mt-[50px]">
          <span className="relative z-10 flex items-center">
            Explore Full Menu
            <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </section>

      {/* Custom Swiper styling */}
      <style jsx>{`
        .menu-swiper .swiper-slide {
          transform: scale(0.9);
          transition: all 0.5s ease-in-out;
          opacity: 0.6;
        }
        .menu-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
        }
        .menu-swiper {
          overflow: visible;
        }
      `}</style>
    </>
  );
};

export default Menu;
