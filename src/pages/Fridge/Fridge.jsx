import React, { useEffect, useState } from "react";
import apiUrl from "../../utils/apiUrl";
import FridgeCard from "./FridgeCard";

const Fridge = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const { data } = await apiUrl.get("/foods");
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-secondary font-medium text-center mb-6">
        Fridge Page All Foods Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FridgeCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Fridge;
