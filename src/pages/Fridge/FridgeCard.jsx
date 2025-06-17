import React from "react";
import { Link } from "react-router";

const FridgeCard = ({ food }) => {
  const { imageUrl, quantity, category, foodTitle, _id, expireDate } = food;
 const isExpired = new Date(expireDate) < new Date();

  return (
    <div className="w-full bg-slate-50 rounded-xl">
      <div  className="relative">
        <img
          className="w-full h-48 object-cover rounded-lg p-6 pb-0"
          src={imageUrl}
          alt={foodTitle}
        />
        {isExpired && ( 
          <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center justify-center">
            Expire
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{foodTitle}</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-pink-100 px-4 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="font-medium">Quantity: {quantity}</span>
        </div>
        <Link to={`/food-details/${food._id}`}>
          <button className="btn btn-secondary w-full">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FridgeCard;
