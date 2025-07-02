import React from "react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import food from "../../assets/food.jpg";
import food2 from "../../assets/food2.jpg";

const bannerData = [
  {
    id: 1,
    image: food2,
    alt: "Fresh produce and ingredients",
    title: "Waste Less, Save More",
    description:
      "Track your food expiry dates with ease and say goodbye to wasted groceries.",
  },
  {
    id: 2,
    image: food,
    alt: "Organized pantry with food items",
    title: "Expiry Dates, Simplified",
    description:
      "Intuitive tracking to keep your pantry fresh and your wallet happy.",
  },
  {
    id: 3,
    image: food2,
    alt: "Delicious healthy meal",
    title: "Smart Food, Zero Waste",
    description: "Track, manage, and enjoy your food to its last bite.",
  },
];

const Banner = () => {
  return (
    <div className="mx-auto max-w-full xl:max-w-[1440px]">
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        className="h-[35vh] md:h-[60vh]"
      >
        {bannerData.map(({ id, image, alt, title, description }) => (
          <SwiperSlide key={id}>
            <div className="relative h-full w-full">
              <img
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-base md:text-lg lg:text-xl max-w-2xl"
                >
                  {description}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
