import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router";

const NearlyExpire = ({ data }) => {
  return (
    <div className="p-1">
      <h2 className="text-3xl text-secondary text-center font-bold py-16">
        Total Nearly Expire Foods :{" "}
        <CountUp duration={5} start={0} end={data.length} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="w-full bg-slate-50 rounded-xl">
            <div className="relative">
              <img
                className="w-full h-48 object-cover rounded-lg p-6 pb-0"
                src={item.imageUrl}
                alt={item.foodTitle}
              />
              <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center justify-center">
                {item.expireDate.split("T")[0]}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3">{item.foodTitle}</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-pink-100 px-4 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span className="font-medium">Quantity: {item.quantity}</span>
              </div>
              <Link to={`/food-details/${item._id}`}>
                <button className="btn btn-secondary w-full">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearlyExpire;
