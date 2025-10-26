import React from "react";

const MenuItems = ({ items }) => {
  const { id, name, price, img } = items;

  return (
    <div
      key={id}
      className="relative flex flex-col items-center justify-center 
                 w-[300px] h-[420px] back-blur mx-auto rounded-full border border-white/20"
      style={{
        boxShadow: "none",
      }}
    >
      {/* Dish Image */}
      <div className="relative w-60 h-60 overflow-hidden z-10 rounded-full ">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Text */}
      <div className="z-10 text-center mt-6">
        <h3 className="text-white text-lg head-font font-light tracking-widest uppercase">{name}</h3>
        <p className="text-gray-400 text-sm mt-2">£{price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
