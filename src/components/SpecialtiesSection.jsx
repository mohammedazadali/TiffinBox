import React from "react";
import { motion } from "framer-motion";
import { service, services } from "../assets/data";
import TextAnimate from "../utils/TextAnimate";

const specialtiesData = [
  {
    title: "AUTHENTIC SOUTH INDIAN CUISINE",
    description:
      "Our dishes are prepared using traditional recipes to bring you the true flavors of South India.",
    position: "left",
  },
  {
    title: "EXPERT CHEFS",
    description:
      "Our chefs have years of experience creating exquisite South Indian dishes, ensuring every bite is a delight.",
    position: "left",
  },
  {
    title: "FRESH, QUALITY INGREDIENTS",
    description:
      "We use only the finest, fresh ingredients to ensure the highest quality and authentic taste.",
    position: "left",
  },
  {
    title: "COMFORTABLE DINING EXPERIENCE",
    description:
      "Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.",
    position: "right",
  },
  {
    title: "HEALTH-CONSCIOUS OPTIONS",
    description:
      "From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.",
    position: "right",
  },
  {
    title: "SEAMLESS ONLINE ORDERING & DELIVERY",
    description:
      "Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.",
    position: "right",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8 } },
});

const SpecialtiesSection = () => {
  const leftData = specialtiesData.filter((item) => item.position === "left");
  const rightData = specialtiesData.filter((item) => item.position === "right");

  return (
    <section className="relative text-gray-300 px-4 lg:px-[6%] py-24 flex flex-col items-center overflow-hidden">
      <span className="text-[#FCB017] head-text font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">
        why tiffin box
      </span>
      <h2 className="text-center font-light head-text mb-10 text-3xl sm:text-4xl lg:text-5xl">
        <TextAnimate text="Our Specialties" />
      </h2>
      <div className="flex flex-col w-full lg:hidden gap-6">

        {leftData.map((item, idx) => (
          <div key={idx} className="bg-black/20 p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        ))}


        <motion.img
          src={services}
          alt="South Indian Dish"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1, transition: { duration: 1 } }}
          className="w-full max-w-md mx-auto mt-6 mb-6"
        />


        {rightData.map((item, idx) => (
          <div key={idx} className="bg-black/20 p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>


      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        className="relative hidden lg:flex w-[650px] aspect-square items-center justify-center rounded-full border border-[#2b2b2b] bg-[radial-gradient(circle,rgba(29,29,29,0.4)_0%,rgba(0,0,0,0.9)_80%)]"
      >
        <motion.img
          src={services}
          alt="South Indian Dish"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1, transition: { duration: 1 } }}
          className=" z-0"
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
          className="absolute bottom-10 bg-white/10 backdrop-blur-3xl text-black font-semibold p-2 rounded-full shadow-md flex items-center space-x-2"
        >
          <span className="head-text font-light text-[14px] leading-[180%] tracking-[4px] text-center flex items-center gap-2">
            <img src={service} alt="" className="bg-[#FCB017] w-10 p-2.5 rounded-full" />
            OUR SPECIALTIES
          </span>
        </motion.button>


        {specialtiesData.map((item, idx) => {
          let positionClasses = "";
          switch (item.position) {
            case "left":
              positionClasses = ["-top-6 -left-10", "left-[-260px] top-1/2 -translate-y-1/2", "-bottom-6 -left-10"][idx % 3];
              break;
            case "right":
              positionClasses = ["-top-6 -right-10", "right-[-260px] top-1/2 -translate-y-1/2", "-bottom-6 -right-10"][idx % 3];
              break;
            default:
              break;
          }
          return (
            <motion.div
              key={idx}
              variants={fadeUp(0.3 + idx * 0.2)}
              initial="hidden"
              whileInView="visible"
              className={`absolute ${positionClasses} text-${item.position === "left" ? "right" : "left"}-0 w-56`}
            >
              <div
                className={`absolute ${
                  item.position === "left" ? "right-[-20px]" : "left-[-20px]"
                } top-[50%] w-2.5 h-2.5 bg-gray-500 rounded-full`}
              ></div>
              <h3 className="font-semibold text-white text-[13px]">{item.title}</h3>
              <p className="text-sm mt-2 text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SpecialtiesSection;
