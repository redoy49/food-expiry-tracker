import React from "react";

const UpdateFoodModal = ({ food, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    onSubmit(updatedData);
  };

  return (
    <dialog open className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-center mb-6">Update Food Item</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={food.imageUrl}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Food Title</span>
            </label>
            <input
              type="text"
              name="foodTitle"
              defaultValue={food.foodTitle}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              defaultValue={food.category}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
              <option>Emerald</option>
              <option>Sapphire</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={food.quantity}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Expire Date</span>
            </label>
            <input
              type="date"
              name="expireDate"
              defaultValue={new Date(food.expireDate).toISOString().split("T")[0]}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={food.description}
              className="textarea textarea-bordered w-full h-24"
            ></textarea>
          </div>

          <div className="modal-action flex justify-between">
            <button type="submit" className="btn bg-green-600 text-white">
              Update Info
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateFoodModal;
