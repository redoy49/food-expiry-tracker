import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaSearch } from "react-icons/fa";

const Fridge = () => {
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const { data } = await axiosSecure.get("/foods", {
          params: {
            search: searchText,
            category: selectedCategory,
          },
        });

        setFoods(data || []);
      } catch (error) {
        console.error("Error fetching foods:", error);
        setFoods([]);
      }
    };

    fetchFoods();
  }, [searchText, selectedCategory, axiosSecure]);

  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-10 max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Your Smart Fridge</h1>
          <p className="text-base md:text-lg text-gray-500 mt-3 leading-relaxed">
            Easily track, search, and manage your fridge items by category. Never let your groceries go to waste again.
          </p>
        </div>

        {/* Filters & Search Section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-4 md:gap-14 lg:gap-24 mb-10">
          {/* Category Filters */}
          <div className="w-full md:w-1/2">
            <div className="flex bg-white rounded-full shadow-md border border-gray-200 overflow-x-auto no-scrollbar text-[10px] lg:text-xs p-1 justify-center md:justify-start">
              {['All', 'Dairy', 'Meat', 'Vegetables', 'Snacks'].map(category => (
                <button
                  key={category}
                  className={`px-4 h-8 lg:h-9 md:px-5 font-medium whitespace-nowrap transition-all duration-300
                    ${selectedCategory === category ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100'}
                    rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50
                    ${selectedCategory === category ? 'focus:ring-gray-500' : 'focus:ring-gray-300'}
                  `}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'All' ? 'All Listings' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full bg-white border border-gray-300 text-gray-700 rounded-full shadow-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xs md:text-sm h-10 lg:h-11.5 pl-5 pr-10"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm lg:text-base pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Foods Grid OUTSIDE max-w-[1440px] */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.length > 0 ? (
            foods.map((food) => (
              <FridgeCard key={food._id} food={food} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full text-sm md:text-base">
              No foods found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fridge;
