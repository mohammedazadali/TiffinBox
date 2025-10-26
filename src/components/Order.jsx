import React from "react";
import { order, order_Food } from "../assets/data";
import TextAnimate from "../utils/TextAnimate";
import { IoIosArrowForward } from "react-icons/io";

const Order = () => {
  return (
    <section
      className="relative px-4 lg:px-[6%] py-16 flex flex-col lg:flex-row items-start justify-between overflow-hidden bg-no-repeat bg-bottom-right"
      style={{
        backgroundImage: `url(${order})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 70%",
      }}
    >

      <div className="relative z-10 basis-full lg:basis-2/3 flex flex-col gap-6">
        <span className="text-[#FCB017] head-text font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          ONLINE ORDER
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light head-text leading-snug">
          <TextAnimate text="Fresh South Indian Flavors Delivered!" />
        </h2>

        <p className="head-text font-light text-[16px] leading-[180%] tracking-[2px] text-[#CACACA] max-w-xl">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic
          flavors of The Tiffin Box from the comfort of your home. Order online
          for a quick and easy delivery straight to your doorstep. Our dishes
          are prepared fresh and delivered fast, ensuring a delicious experience
          every time.
        </p>

        <button className="relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex items-center gap-2.5 py-2.5 px-6 font-mont text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all w-fit duration-300 mt-6 sm:mt-8sm:w-auto justify-center">
          <span className="relative z-10 flex items-center">
            Order Online
            <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </div>


      <div className="relative w-full lg:basis-1/3 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img
          src={order_Food}
          alt="order food"
          className="w-48 sm:w-56 lg:w-60 p-4 rounded-full border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(90deg,rgba(17,17,17,0.1)_50%,rgba(68,68,68,0.1)_179%)]"
        />
      </div>

 <div className="absolute inset-0 bg-linear-to-l from-black/40 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Order;
