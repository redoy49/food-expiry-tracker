import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Countdown from "react-countdown";
import apiUrl from "../../utils/apiUrl";
import useAuth from "../../hooks/useAuth";

const FoodDetails = () => {
  const loadedFood = useLoaderData();
  const { user } = useAuth();
  const owner = loadedFood?.email === user?.email;

  const [food, setFood] = useState(loadedFood); 

  const handleAddNote = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNotes = Object.fromEntries(formData.entries());
    newNotes.noteDate = new Date();

    try {
      const res = await apiUrl.patch(`/notes/${food._id}`, newNotes);
      console.log(res);

      // Update note in state manually
      setFood((prev) => ({
        ...prev,
        note: [newNotes.note, ...(prev.note || [])], // prepend new note
      }));

      form.reset(); // optionally clear the form
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

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

      <div>
        <form onSubmit={handleAddNote}>
          <h3 className="text-xl font-semibold mb-2">Add your note</h3>
          <textarea
            placeholder="Your note here"
            className="textarea textarea-secondary"
            name="note"
          ></textarea>
          {owner ? (
            <button className="btn btn-secondary">Add Note</button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Add Note
            </button>
          )}
        </form>

        <div className="mt-4">
          <h3 className="font-semibold">Notes:</h3>
          <ul>
            {food?.note?.map((n, i) => (
              <li key={i} className="border-b py-1">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
