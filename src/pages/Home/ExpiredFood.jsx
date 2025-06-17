import React from "react";
import { Link } from "react-router";
import CountUp from "react-countup";

const ExpiredFood = ({ expired }) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-secondary text-center font-bold py-16">
          Total Expired Foods :{" "}
          <CountUp duration={5} start={0} end={expired.length} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expired.map((expiredItem) => (
            <div
              key={expiredItem._id}
              className="w-full bg-slate-50 rounded-xl"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover rounded-lg p-6 pb-0"
                  src={expiredItem.imageUrl}
                  alt={expiredItem.foodTitle}
                />
                <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center justify-center">
                  Expired
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">
                  {expiredItem.foodTitle}
                </h2>
                <div className="flex justify-between expiredItems-center mb-4">
                  <span className="bg-pink-100 px-4 py-1 rounded-full font-medium">
                    {expiredItem.category}
                  </span>
                  <span className="font-medium">
                    Quantity: {expiredItem.quantity}
                  </span>
                </div>
                <Link to={`/food-details/${expiredItem._id}`}>
                  <button className="btn btn-secondary w-full">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpiredFood;
