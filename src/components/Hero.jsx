import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { herobg, logo } from "../assets/data";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import TextAnimate from "../utils/TextAnimate";

const Hero = () => {
  return (
    <section className="relative w-full  min-h-screen  px-4 lg:px-[6%] overflow-hidden flex items-center">
      
      <div className="fixed bottom-10 left-4 w-[5px] bg-[#282828] h-[300px] lg:h-[400px] rounded-full">
        <div className="bg-[#FCB017] w-full h-[50px] rounded-full"></div>
      </div>

      <div className="fixed top-1/2 right-4 lg:right-[6%] z-10 -translate-y-1/2 flex flex-col items-center gap-4 text-2xl">
        {[FaInstagram, CiFacebook, CiTwitter].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-lg text-white/30 transition-all duration-300 hover:text-[#FCB017] hover:bg-white/20"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 py-20 lg:py-20">
        {/* Left Column */}
        <div className="z-20 lg:basis-2/5 w-full flex flex-col items-center lg:items-start gap-4 lg:gap-6">
          <img src={logo} alt="logo" className="w-20 mb-4 lg:mb-6" />

          <h1 className="text-[#9A9A9A] head-text tracking-[0.4em] text-2xl sm:text-3xl lg:text-5xl leading-snug max-w-lg uppercase text-center lg:text-left mb-4 lg:mb-6">
            <TextAnimate text="Authentic South Indian Cuisine" />
          </h1>

          <button className="w-full sm:w-auto text-center relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex justify-center items-center gap-2.5 py-2.5 px-6 font-mont text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all duration-300">
            <span className="relative z-10 flex items-center">
              Order Now
              <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
            </span>
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:basis-3/5 w-full md:block hidden">
          <img
            src={herobg}
            alt="Hero Dish"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
