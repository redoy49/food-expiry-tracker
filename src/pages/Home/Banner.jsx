import React from "react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import your images
import food from "../../assets/food.jpg";
import food2 from "../../assets/food2.jpg";

// Define your banner data
const bannerData = [
  {
    id: 1,
    image: food2,
    alt: "Fresh produce and ingredients",
    title: "Waste Less, Save More",
    description: "Track your food expiry dates with ease and say goodbye to wasted groceries.",
  },
  {
    id: 2,
    image: food,
    alt: "Organized pantry with food items",
    title: "Expiry Dates, Simplified",
    description: "Intuitive tracking to keep your pantry fresh and your wallet happy.",
  },
  {
    id: 3,
    image: food2, // You might want to use a different image here for variety
    alt: "Delicious healthy meal",
    title: "Smart Food, Zero Waste",
    description: "Track, manage, and enjoy your food to its last bite.",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[60vh]" // Apply height directly to Swiper for better control
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div> 
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }} // Start slightly above and faded
                  animate={{ opacity: 1, y: 0 }}   // Animate to visible and normal position
                  transition={{
                    duration: 0.8, // Slightly longer duration for smoother entry
                    ease: "easeOut",
                  }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} // Start slightly below and faded
                  animate={{ opacity: 1, y: 0 }}  // Animate to visible and normal position
                  transition={{
                    duration: 0.8,
                    delay: 0.2, // Delay description animation slightly
                    ease: "easeOut",
                  }}
                  className="text-base md:text-lg lg:text-xl max-w-2xl"
                >
                  {slide.description}
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