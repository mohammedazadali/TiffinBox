import React from "react";
import { about } from "../assets/data";
import { IoIosArrowForward } from "react-icons/io";
import TextAnimate from "../utils/TextAnimate";

const Aboutus = () => {
  return (
    <>
      <section className="px-[6%] flex lg:flex-row flex-col justify-between items-center py-[100px] gap-[20px]">
        <div className="basis-[50%]">
          <img src={about} alt="aboutus" />
        </div>
        <div className="bg-[#FCB017] basis-[50%] p-[6%] flex flex-col justify-center items-start gap-6 text-[#0A0A0A]">
          <span  className="text-[#000000] head=text font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">
            About Us
          </span>

          <h2 className="text-2xl md:text-5xl head-text font-extralight uppercase text-[#000000] leading-snug max-w-xl">
            <TextAnimate text="Experience Authentic South Indian Flavors at The Tiffin Box" color="#000000"/>
          </h2>

          <button className="mt-2 relative border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold px-6 py-2 overflow-hidden transition-all duration-300 hover:bg-[#B58F42] ">
            <span className="relative z-10 font-light flex justify-center items-center font-sans">
              Know More  <IoIosArrowForward className="ml-1  transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
            </span>

          </button>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
