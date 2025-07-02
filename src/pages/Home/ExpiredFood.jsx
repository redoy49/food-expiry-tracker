import React from "react";
import { Link } from "react-router";
import CountUp from "react-countup";

const ExpiredFood = ({ expired }) => {
  return (
    <section className="px-4 md:px-6 lg:px-10 max-w-[1440px] mx-auto pb-14">
      <header className="text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
          Total Expired Foods -
          <span className="text-green-600">
            <CountUp duration={3} start={0} end={expired.length} />
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Track your expired items at a glance and take action before it's too
          late.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expired.map((item) => (
          <div key={item._id} className="shadow-sm rounded-xl bg-white">
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.foodTitle}
                className="w-full h-48 object-contain rounded-t-xl p-6 pb-0"
              />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Expired
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{item.foodTitle}</h3>
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="bg-pink-100 px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span className="font-medium">Qty: {item.quantity}</span>
              </div>

              <Link to={`/food-details/${item._id}`}>
                <button className="btn w-full bg-green-700 text-white hover:bg-green-600 transition rounded-md text-sm md:text-base">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpiredFood;
