import React from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import food from "../../assets/food.jpg";
import food2 from "../../assets/food2.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center max-h-[450px] relative bg-slate-100">
            <img className="w-full" src={food2} alt="" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center p-4">
              <motion.h2
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl font-bold mb-4"
              >
                Waste Less, Save More
              </motion.h2>
              <p className="text-xl">
                Track your food expiry dates with ease and say goodbye to wasted
                groceries.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center max-h-[450px] relative bg-slate-100">
            <img className="w-full" src={food} alt="" />
              <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center p-4">
              <h2 className="text-6xl font-bold mb-4">
                Expiry Dates, Simplified
              </h2>
              <p className="text-xl">
                Intuitive tracking to keep your pantry fresh and your wallet
                happy.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center max-h-[450px] relative bg-slate-100">
            <img className="w-full" src={food2} alt="" />
              <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center p-4">
              <h2 className="text-6xl font-bold mb-4">
                Smart Food, Zero Waste
              </h2>
              <p className="text-xl">
                Track, manage, and enjoy your food to its last bite.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
