import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axiosSecure.get(`/food-details/${id}`);
        setFood(res.data);
      } catch (err) {
        console.error("Failed to load food:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [axiosSecure, id]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNotes = Object.fromEntries(formData.entries());
    newNotes.noteDate = new Date();

    try {
      const res = await axiosSecure.patch(`/notes/${food._id}`, newNotes);
      console.log(res);

      setFood((prev) => ({
        ...prev,
        note: [newNotes.note, ...(prev.note || [])],
      }));

      form.reset();
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

  if (loading) return <div>Loading...</div>;
  if (!food) return <div>No food found.</div>;

  const owner = food?.email === user?.email;

  return (
    <div className="flex flex-col justify-center items-center p-1 lg:p-4">
      <div className="w-full lg:max-w-4xl bg-pink-50 p-1">
        <img
          src={food?.imageUrl}
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="w-full lg:max-w-4xl mt-6 bg-white p-4 rounded shadow space-y-2">
        <h2 className="text-3xl font-bold text-secondary">{food?.foodTitle}</h2>
        <p className="text-gray-700">{food.description}</p>
        <p>
          <span className="font-semibold">Category:</span> {food?.category}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {food?.quantity}
        </p>
        <p>
          <span className="font-semibold">Expire Date:</span>{" "}
          {food?.expireDate?.split("T")[0]}
        </p>
        <p>
          <span className="font-semibold">Expires In:</span>{" "}
          <Countdown date={new Date(food.expireDate)} renderer={countTime} />
        </p>
      </div>

      <div className="w-full lg:max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-secondary">
          Add Your Note
        </h3>
        <form onSubmit={handleAddNote} className="flex flex-col space-y-4">
          <textarea
            name="note"
            placeholder="Write your note here..."
            className="textarea textarea-bordered w-full h-28 p-3 rounded-md"
          ></textarea>
          <div>
            {owner ? (
              <button className="btn btn-secondary px-6 py-2 rounded-md">
                Add Note
              </button>
            ) : (
              <button
                className="btn btn-secondary px-6 py-2 rounded-md"
                disabled
              >
                Add Note
              </button>
            )}
          </div>
        </form>

        {food?.note?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Previous Notes
            </h3>
            <ul className="space-y-2">
              {food?.note?.map((n, i) => (
                <li
                  key={i}
                  className="bg-gray-100 p-3 rounded-md text-sm text-gray-800"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
