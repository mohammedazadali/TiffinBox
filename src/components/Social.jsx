import React from "react";
import TextAnimate from "../utils/TextAnimate";
import { social1, social2, social3, social4 } from "../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Social = () => {
  const socialImages = [social1, social2, social3, social4];

  return (
    <section className="px-[6%] py-[50px] flex justify-center items-center flex-col">
      <span className="text-[#FCB017] font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">
        Instagram
      </span>
      <h2 className="font-light text-center head-text mb-10">
        <TextAnimate text="JOIN our community" />
      </h2>

      {/* Swiper carousel */}
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {socialImages.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`social-${index}`}
                className="rounded-lg object-cover w-full h-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Social;
