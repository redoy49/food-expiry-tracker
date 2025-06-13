import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import apiUrl from "../../utils/apiUrl";

const AddFood = () => {
  const { user } = useAuth();

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    newFood.email = user?.email;
    newFood.addDate = new Date().toISOString().split("T")[0];

    console.log(newFood);

    apiUrl
      .post("/foods", newFood)
      .then((res) => {
        const data = res.data;

        if (data.insertedId) {
          toast.success("Add food successfull.");
          form.reset();
        }
      })
      .catch(() => {
        toast.error("Add food failed.");
      });
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-red-50 min-w-sm p-4 rounded-lg">
        <h2 className="text-3xl text-secondary mb-10 font-bold text-center">
          Add Food
        </h2>
        <form onSubmit={handleAddFood} className="space-y-4">
          <div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Food image url"
              className="input w-full"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="foodTitle"
              placeholder="Food Title"
              className="input w-full"
            />
          </div>
          <select
            defaultValue="Select a color"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>Select a category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <div>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input w-full"
            />
          </div>
          <div>
            <input type="date" name="expireDate" className="input w-full" />
          </div>
          <textarea
            className="textarea w-full"
            placeholder="Description"
          ></textarea>
          <div>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-secondary  text-white font-semibold rounded-lg"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
