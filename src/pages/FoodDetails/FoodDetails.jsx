import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useParams } from "react-router"; // Keeping original import as requested
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// Optional: import toast for better notifications if you decide to add it later
// import { toast } from "react-hot-toast";

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
        // Optional: toast.error("Failed to load food details. Please try again.");
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
    newNotes.noteDate = new Date(); // Keeping original date handling

    try {
      const res = await axiosSecure.patch(`/notes/${food._id}`, newNotes);
      console.log(res); // Keeping original console log

      setFood((prev) => ({
        ...prev,
        note: [newNotes.note, ...(prev.note || [])],
      }));

      form.reset();
      // Optional: toast.success("Note added successfully!");
    } catch (err) {
      console.error("Error adding note:", err);
      // Optional: toast.error("Error adding note. Please try again.");
    }
  };

  const countTime = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="font-bold text-red-500">Expired</span>; // Changed to red for emphasis
    }
    return (
      <span>
        {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  if (!food)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-700">
        No food found.
      </div>
    );

  const owner = food?.email === user?.email;

  return (
    <div className="flex flex-col items-center p-4 min-h-screen pb-14">
      {/* Food Image Section */}
      <div className="w-full max-w-3xl mb-8 rounded-lg overflow-hidden">
        <img
          src={food?.imageUrl}
          alt={food?.foodTitle}
          className="w-full aspect-video object-contain p-4" // Maintained object-contain
        />
      </div>

      {/* Food Details Section */}
      <div className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-sm space-y-4 mb-8">
        {" "}
        {/* Maintained max-w-7xl */}
        <h2 className="text-4xl font-extrabold text-green-700 mb-2">
          {food?.foodTitle}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {food.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-base">
          <p>
            <span className="font-semibold text-gray-800">Category:</span>{" "}
            {food?.category}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Quantity:</span>{" "}
            {food?.quantity}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Expire Date:</span>{" "}
            {food?.expireDate?.split("T")[0]}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Expires In:</span>{" "}
            <Countdown date={new Date(food.expireDate)} renderer={countTime} />
          </p>
        </div>
      </div>

      {/* Add Note Section */}
      <div className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-sm">
        {" "}
        {/* Maintained max-w-7xl */}
        <h3 className="text-3xl font-bold mb-6 text-green-700 border-b pb-4">
          Add Your Note
        </h3>
        <form onSubmit={handleAddNote} className="flex flex-col space-y-5">
          <textarea
            name="note"
            placeholder="Write your note here..."
            className="textarea textarea-bordered w-full h-32 p-4 rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-700"
          ></textarea>
          <div>
            {owner ? (
              <button className="btn bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300">
                Add Note
              </button>
            ) : (
              <button
                className="btn bg-gray-300 text-gray-600 font-semibold px-8 py-3 rounded-lg cursor-not-allowed shadow-md"
                disabled // Ensure it's explicitly disabled
              >
                Add Note (Owner Only)
              </button>
            )}
          </div>
        </form>

        {/* Previous Notes Section */}
        {food?.note?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-3">
              Previous Notes
            </h3>
            <ul className="space-y-3">
              {food?.note?.map((n, i) => (
                <li
                  key={i}
                  className="bg-gray-100 p-4 rounded-lg text-base text-gray-800 border border-gray-200 shadow-sm"
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