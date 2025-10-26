import React from "react";
import { book } from "../assets/data";
import TextAnimate from "../utils/TextAnimate";
import { IoIosArrowForward } from "react-icons/io";

const BookTable = () => {
  return (
    <section className="px-4 lg:px-[6%] flex flex-col lg:flex-row items-center justify-between gap-10 py-24">
      {/* Left Column - Image */}
      <div className="lg:basis-1/2 w-full flex justify-center lg:justify-start">
        <img src={book} alt="book a table" className="w-full max-w-md lg:max-w-full" />
      </div>

      {/* Right Column - Text & Button */}
      <div className="lg:basis-1/2 w-full flex flex-col justify-center items-start p-4 lg:p-10 gap-4">
        <span className="text-[#FCB017] head-text font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          Book Table
        </span>

        <h2 className="font-light head-text text-2xl sm:text-3xl lg:text-4xl mb-4">
          <TextAnimate text="Planning a meal at The Tiffin Box?" />
        </h2>

        <p className="head-text font-light text-[16px] leading-[180%] tracking-[2px] text-[#CACACA] max-w-lg">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
        </p>

        <button className="mt-6 relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex items-center gap-2.5 py-2.5 px-6 text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all duration-300 w-full sm:w-auto justify-center">
          <span className="relative z-10 flex items-center">
            Book Table
            <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BookTable;
