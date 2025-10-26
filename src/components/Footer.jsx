import React from "react";
import { logo } from "../assets/data";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black px-6 lg:px-[6%] py-12 flex flex-col items-center gap-6">

      <img src={logo} alt="logo" className="w-20 mb-4" />


      <h2 className="text-[#9A9A9A] text-2xl sm:text-3xl lg:text-[28px] leading-[150%] tracking-[0.2em] font-light uppercase text-center max-w-lg">
        Subscribe to our newsletter
      </h2>


      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your email"
          className="border-b border-[#9A9A9A] text-[#9A9A9A] bg-transparent px-2 py-2 w-full focus:outline-none placeholder:text-[#9A9A9A]"
        />
        <button className="relative border border-[#9A9A9A] hover:border-[#FCB017] hover:bg-[#B58F42] font-medium flex items-center gap-2.5 py-2.5 px-6 text-lg cursor-pointer text-[#9A9A9A] hover:text-black group transition-all duration-300 w-full sm:w-auto justify-center">
          <span className="relative z-10 flex items-center">
           Subscribe
            <IoIosArrowForward className="ml-1 text-[#B58F42] transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
          </span>
        </button>
      </div>


      <div className="text-[#9A9A9A] text-center p-6 rounded-xl flex flex-col gap-1">
        <h3 className="font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          Contact Us
        </h3>
        <p className="font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          0151 245 1500
        </p>
        <p className="font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          Info@tiffinbox.co.uk
        </p>
        <p className="font-normal text-[14px] leading-[180%] tracking-[6px] uppercase">
          Allerton Rd, Liverpool L25 7RE
        </p>
      </div>


      <nav className="text-[#9A9A9A] text-center py-4 flex flex-wrap justify-center gap-2 sm:gap-4 text-[14px] leading-[180%] tracking-[6px] uppercase">
        {[
          { label: "Menu", path: "/menu" },
          { label: "Order Online", path: "/order" },
          { label: "Book a Table", path: "/book" },
          { label: "About Us", path: "/about" },
          { label: "Contact Us", path: "/contact" },
        ].map((link, idx) => (
          <React.Fragment key={link.path}>
            <Link
              to={link.path}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
            {idx < 4 && <span>|</span>}
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
};

export default Footer;
