import React from "react";
import TextAnimate from "../utils/TextAnimate";
import { TestimonialsData } from "../constant";
import { Star, StarHalf, StarOff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++)
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-5 h-5 text-yellow-400"
        fill="#facc15"
      />
    );
  if (hasHalf)
    stars.push(
      <StarHalf key="half" className="w-5 h-5 text-yellow-400" fill="#facc15" />
    );
  for (let i = stars.length; i < 5; i++)
    stars.push(<StarOff key={`off-${i}`} className="w-5 h-5 text-gray-500" />);

  return <div className="flex">{stars}</div>;
};

const formatDate = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30)
    return `${Math.floor(diffDays / 7)} week${
      Math.floor(diffDays / 7) > 1 ? "s" : ""
    } ago`;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const TestimonialCard = ({ name, rate, review, date }) => (
  <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 h-[300px] flex flex-col justify-between">
    <div className="flex flex-col gap-5 mb-3">
      <div>{renderStars(parseFloat(rate))}</div>

      <p className="head-text font-light text-[16px] leading-[180%] tracking-[2px] text-[#CACACA]">
        {review}
      </p>
    </div>

    <div className="w-full h-px bg-[#CACACA]/40 my-3"></div>

    <div className="flex flex-col">
      <h3 className="head-text font-medium text-lg text-white">{name}</h3>
      <span className="head-text text-xs text-gray-400">
        {formatDate(date)}
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="px-[6%] py-[50px] flex flex-col justify-center items-center bg-[#0b0b0b]">
      <span className="text-[#FCB017] font-normal text-[14px] leading-[180%] tracking-[6px] text-center uppercase">
        testimonial
      </span>
      <h2 className="text-center font-light mb-10 head-text">
        <TextAnimate text="What Our Customers Say" />
      </h2>
      <div className="w-full  overflow-hidden">
        {/* ✅ Swiper replacing grid */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
          className="max-w-6xl mx-auto"
        >
          {TestimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
