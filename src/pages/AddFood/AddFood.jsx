import React from "react";
import useAuth from "../../hooks/useAuth";

const AddFood = () => {
  const {user} = useAuth()

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-red-50 min-w-sm p-4 rounded-lg">
        <h2 className="text-3xl text-secondary mb-10 font-bold text-center">
          Add Food
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Food image url"
              className="input w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Food Title"
              className="input w-full"
            />
          </div>
          <select defaultValue="Select a color" className="select w-full">
            <option disabled={true}>Select a category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <div>
            <input
              type="text"
              placeholder="Quantity"
              className="input w-full"
            />
          </div>
          <div>
            <input type="date" className="input w-full" />
          </div>
          <textarea className="textarea w-full" placeholder="Description"></textarea>
          <div>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
