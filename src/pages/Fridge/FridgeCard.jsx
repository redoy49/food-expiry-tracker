import React from "react";
import { Link } from "react-router";

const FridgeCard = ({ food }) => {
    const { imageUrl, quantity, category, foodTitle, _id, expireDate } = food;
    const isExpired = new Date(expireDate) < new Date();

    return (
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            {/* Image + Expiry Badge */}
            <div className="relative">
                <img
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={imageUrl}
                    alt={foodTitle}
                />
                {isExpired && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        Expired
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    {foodTitle}
                </h2>

                <div className="flex justify-between items-center mb-4 text-sm md:text-base">
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                        {category}
                    </span>
                    <span className="text-gray-600 font-medium">
                        Qty: {quantity}
                    </span>
                </div>

                <Link to={`/food-details/${_id}`}>
                    <button className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm md:text-base hover:bg-gray-700 transition">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FridgeCard;
