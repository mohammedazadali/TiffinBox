import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { logo } from "../assets/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-[6%]   transition-all duration-300 z-50 ${
        scrolled ? "py-4 shadow-lg bg-[#090909]" : "py-[2%] bg-transparent"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#0D0D0D] transition-all duration-300 p-2.5"
      >
        <span
          className={`absolute w-6 h-[2.5px] bg-[#E8B756] rounded-full transition-all duration-300 ease-in-out ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>

        <span
          className={`absolute w-6 h-[2.5px] bg-[#E8B756] rounded-full transition-all duration-300 ease-in-out ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>
      <button className="relative overflow-hidden border border-[#FCB017] font-medium flex items-center gap-2.5 p-2.5 px-5 text-[#FCB017] group transition-all duration-300 hover:text-black cursor-pointer font-heading">
        <span className="relative z-10 flex items-center">
          View Menu{" "}
          <IoIosArrowForward className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        <span className="absolute inset-0 bg-[#FCB017] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      </button>
    </nav>
  );
};

export default Navbar;
