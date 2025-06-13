import React from "react";

const FridgeCard = ({ food }) => {
  const { imageUrl, quantity, category, foodTitle } = food;

  return (
    <div className="w-full bg-slate-50 rounded-xl">
      <div>
        <img
          className="w-full h-48 object-cover rounded-lg p-6 pb-0"
          src={imageUrl}
          alt={foodTitle}
        />
        {/* {expired && ( 
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center justify-center">
            Expire
          </div>
        )} */}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{foodTitle}</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-pink-100 px-4 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="font-medium">Quantity: {quantity}</span>
        </div>
        <button className="btn btn-secondary w-full">See Details</button>
      </div>
    </div>
  );
};

export default FridgeCard;
