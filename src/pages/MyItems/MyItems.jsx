import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyItems = () => {
  const { email } = useParams();
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axiosSecure.get(`/my-items/${email}`);
        setFoods(res.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        Swal.fire("Error", "Failed to load your items.", "error");
      }
    };

    if (email) {
      fetchItems();
    }
  }, [axiosSecure, email]);

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());

    try {
      const res = await axiosSecure.patch(
        `/update-food/${selectedFood._id}`,
        newFood
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Your food was updated successfully.", "success");

        const updatedList = foods.map((item) =>
          item._id === selectedFood._id ? { ...item, ...newFood } : item
        );
        setFoods(updatedList);
        setSelectedFood(null);
        document.getElementById("update_modal").close(); // Close modal on success
      } else {
        Swal.fire("No Changes", "No changes were made to the food item.", "info");
      }
    } catch (err) {
      console.error("Update failed", err);
      Swal.fire("Error", "Failed to update item. Please try again.", "error");
    }
  };

  const handleDeleteFood = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/delete-food/${_id}`);
          if (res.data.deletedCount) {
            const deleteFood = foods.filter((food) => food._id !== _id);
            setFoods(deleteFood);
            Swal.fire("Deleted!", "Your food item has been deleted.", "success");
          } else {
            Swal.fire("Failed", "Could not delete the food item.", "error");
          }
        } catch (error) {
          console.error("Delete failed:", error);
          Swal.fire("Error!", "Something went wrong while deleting.", "error");
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Food Items</h2>
      <div className="overflow-x-auto bg-base-100 shadow-xl rounded-box">
        <table className="table table-zebra w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Expire Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">No food items found.</td>
              </tr>
            ) : (
              foods?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.imageUrl} alt={item.foodTitle} />
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{item.foodTitle}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{new Date(item.expireDate).toLocaleDateString()}</td>
                  <td>{item.description.substring(0, 50)}...</td> {/* Truncate description */}
                  <td className="flex justify-center items-center space-x-2 h-full">
                    <button
                      className="btn btn-sm btn-info text-white"
                      onClick={() => {
                        setSelectedFood(item);
                        document.getElementById("update_modal").showModal();
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteFood(item._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      <dialog id="update_modal" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center mb-6">Update Food Item</h3>
          <form onSubmit={handleUpdateFood} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="input input-bordered w-full"
                defaultValue={selectedFood?.imageUrl}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Food Title</span>
              </label>
              <input
                type="text"
                name="foodTitle"
                placeholder="Food Title"
                className="input input-bordered w-full"
                defaultValue={selectedFood?.foodTitle}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                defaultValue={selectedFood?.category || "Select a category"}
              >
                <option disabled>Select a category</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
                <option>Emerald</option> {/* Added more options for completeness */}
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
                placeholder="Quantity"
                className="input input-bordered w-full"
                defaultValue={selectedFood?.quantity}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Expire Date</span>
              </label>
              <input
                type="date"
                name="expireDate"
                className="input input-bordered w-full"
                defaultValue={selectedFood?.expireDate ? new Date(selectedFood.expireDate).toISOString().split('T')[0] : ''} // Format date for input
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-24"
                name="description"
                placeholder="Description"
                defaultValue={selectedFood?.description}
              ></textarea>
            </div>
            <div className="modal-action flex justify-between">
              <button type="submit" className="btn btn-primary">
                Update Info
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById("update_modal").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyItems;