import React, { useEffect, useState } from "react";
import apiUrl from "../../utils/apiUrl";
import FridgeCard from "./FridgeCard";

const Fridge = () => {
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const { data } = await apiUrl.get("/foods", {
          params: {
            search: searchText,
            category: selectedCategory,
          },
        });
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoods();
  }, [searchText, selectedCategory]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by title or category"
          className="input input-bordered w-full md:w-1/2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>

      <h2 className="text-3xl text-secondary font-medium text-center mb-6">
        Fridge Page All Foods Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FridgeCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Fridge;
