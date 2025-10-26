import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to Home
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center text-center px-6">
      <div className="absolute inset-0 bg-linear-to-br from-[#1C1C1C] via-[#0A0A0A] to-black opacity-95"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full border border-[#FCB017] bg-black/40 mb-6">
          <Clock className="text-[#FCB017]" size={36} />
        </div>

        <h1 className="head-text text-[42px] tracking-[12px] uppercase text-[#FCB017] font-light mb-4">
          Coming Soon
        </h1>

        <p className="head-text text-[#9A9A9A] text-[16px] leading-[180%] tracking-[4px] max-w-xl">
          Our new digital experience is almost ready. Stay tuned for something
          extraordinary.
        </p>

        <div className="w-[120px] h-px bg-linear-to-r from-transparent via-[#FCB017] to-transparent mt-8"></div>

        <button
          onClick={handleClick}
          className="mt-10 px-8 py-3 border border-[#FCB017] text-[#FCB017] uppercase tracking-[4px] text-sm rounded-full hover:bg-[#FCB017] hover:text-black transition-all duration-300"
        >
          Home Page
        </button>
      </motion.div>

      <footer className="absolute bottom-6 text-[#6B6B6B] text-xs tracking-[4px] uppercase font-light">
        © 2025 The Tiffin Box | All Rights Reserved
      </footer>
    </div>
  );
};

export default UnderConstruction;
