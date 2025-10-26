import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextAnimate = ({ text, color = "#9A9A9A" }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.h1
      ref={ref}
      style={{ color }}
      className="head-text font-medium md:text-[46px] text-[32px] leading-[150%] tracking-[10px] uppercase mb-8 max-w-4xl"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariant}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextAnimate;
