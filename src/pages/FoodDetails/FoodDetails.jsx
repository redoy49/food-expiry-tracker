import React from "react";
import { useLoaderData } from "react-router";
import Countdown from "react-countdown";

const FoodDetails = () => {
  const food = useLoaderData();
  const countTime = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="font-bold text-secondary">Expired</span>;
    }
    return (
      <span>
        {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  };
  console.log(food);

  return (
    <div className="flex flex-col justify-center items-center p-1 lg:p-4">
      <div className="w-full lg:max-w-4xl bg-pink-50 p-1">
        <img src={food.imageUrl} className="w-full aspect-video object-cover" />
      </div>
      <div>
        <h2 className="text-4xl text-secondary font-bold ">{food.foodTitle}</h2>
        <p>{food.description}</p>
        <p>Category: {food.category}</p>
        <p>Quantity: {food.quantity}</p>
        <p>Expire Date: {food.expireDate.split("T")[0]}</p>
        <p>
          Expire In:{" "}
          <Countdown date={new Date(food.expireDate)} renderer={countTime} />
        </p>
      </div>
    </div>
  );
};

export default FoodDetails;
