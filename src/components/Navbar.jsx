import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { logo } from "../assets/data";
import { Link } from "react-router-dom";
import { menuItems } from "../constant";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: { x: "100%", transition: { ease: "easeInOut", duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95, skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      skewY: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-[6%] transition-all duration-300 z-50
    ${
      open
        ? "bg-black py-4 shadow-lg"
        : scrolled
        ? "bg-[#000000] py-4 shadow-lg"
        : "bg-transparent py-[2%]"
    }
  `}
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

      <AnimatePresence>
        {open && (
          <motion.ul
            className="fixed  z-9999 right-0 top-20 h-full w-full md:w-1/2 bg-linear-to-b bg-black text-white flex flex-col items-center justify-center gap-12  shadow-2xl p-6 head-text"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          >
            {menuItems.map((item, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={itemVariants}
                className="relative group text-2xl md:text-4xl font-medium uppercase tracking-wider cursor-pointer"
              >
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#FCB017] transition-all duration-300"
                >
                  {item.label}
                </Link>
                {/* Glowing underline on hover */}
                <span className="absolute left-0 -bottom-2 w-0 h-1 bg-[#FCB017] transition-all duration-300 group-hover:w-full"></span>
                {/* Optional glowing text shadow on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute inset-0 text-[#FCB017]/30 blur-xl"></span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
