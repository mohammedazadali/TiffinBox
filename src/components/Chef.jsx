import React from "react";
import TextAnimate from "../utils/TextAnimate";
import { chef_1, chef_2, chef_name } from "../assets/data";

const Chef = () => {
  return (
    <section className="px-4 lg:px-[6%] py-20 flex flex-col justify-center items-center">
      {/* Section Title */}
      <span className="text-[#FCB017] head-text font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">
        Chef
      </span>
      <h2 className="text-center font-light head-text mb-10 text-3xl sm:text-4xl lg:text-5xl">
        <TextAnimate text="Our brand chef" />
      </h2>

      {/* Chef Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-16">
        {/* Left Column - Image */}
        <div className="relative lg:basis-1/2 flex flex-col items-center lg:items-start">
          <img src={chef_2} alt="Chef Jomon" className="z-10 w-3/4 lg:w-full mx-auto" />
          <img
            src={chef_name}
            alt="Name Tag"
            className="absolute z-10 -bottom-10 lg:-bottom-12 right-0 w-[120px] lg:w-[150px]"
          />
        </div>

        {/* Right Column - Info */}
        <div className="lg:basis-1/2 w-full">
          <div className="text-[#9A9A9A] p-4">
            <h3 className="head-text font-medium text-[24px] leading-[150%] tracking-[2px] uppercase mb-2">
              Chef Jomon
            </h3>
            <span className="head-text font-medium text-[16px] leading-[150%] tracking-[1px]">
              Senior chef at Tiffin Box
            </span>
          </div>

          <p className="text-[#CACACA] head-text font-light text-[16px] leading-[180%] tracking-[2px] p-4">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chef;
