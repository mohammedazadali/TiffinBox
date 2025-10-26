import React from "react";
import TextAnimate from "../utils/TextAnimate";
import { IoIosArrowForward } from "react-icons/io";

const Map = () => {
  return (
    <section className="px-4 lg:px-[6%] py-12 flex flex-col md:flex-row gap-10">
      {/* Left Column */}
      <div className="md:basis-1/3 flex flex-col items-start text-start gap-4">
        <span className="text-[#FCB017] font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          Our Locations
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-snug">
          <TextAnimate text="Find Us at These Convenient Locations" />
        </h2>

        <button className="mt-6 w-full sm:w-auto relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex items-center gap-2.5 py-2.5 px-6 text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all duration-300 justify-center">
          <span className="relative z-10 flex items-center">
            Order Online
            <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </div>

      {/* Right Column */}
      <div className="md:basis-2/3 flex justify-center items-center relative w-full">
        {/* Overlay Card */}
        <div className="absolute right-0 top-0 md:top-10 bg-black/80 text-[#9A9A9A] backdrop-blur-lg rounded-lg z-10 p-4 w-[80%] max-w-[300px] md:w-[40%]">
          <h3 className="text-[12px] leading-[180%] tracking-[6px] head-text font-normal uppercase mb-2">
            Tiffin Box, Allerton Rd, Liverpool L25 7RE
          </h3>
          <a
            href="#"
            className="underline decoration-[#FCB017] underline-offset-2 text-[12px] leading-[180%] tracking-[6px] head-text font-normal uppercase"
          >
            Get Directions
          </a>
        </div>

        {/* Map Circle */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg p-1">
          <div className="w-full h-full rounded-full overflow-hidden p-4 border border-[rgba(255,255,255,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862828187015!2d-122.41941548468106!3d37.77492927975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1cde6ab1%3A0x6b1c9f179f9f9f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sin!4v1698322436935!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-full"
              style={{ border: 0, filter: "grayscale(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
