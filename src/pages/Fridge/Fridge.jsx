import React, { useEffect, useState } from "react";
// import apiUrl from "../../utils/apiUrl";
import FridgeCard from "./FridgeCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

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
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoods();
  }, [searchText, selectedCategory, axiosSecure]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FridgeCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Fridge;
