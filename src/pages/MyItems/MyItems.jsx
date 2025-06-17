import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyItems = () => {
  const { email } = useParams();
  console.log(email);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
    const axiosSecure = useAxiosSecure()

useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axiosSecure.get(`/my-items/${email}`);
        setFoods(res.data);
      } catch (error) {
        console.error("Error fetching items:", error);
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
        Swal.fire("Updated!", "Your food was updated.", "success");

        const updatedList = foods.map((item) =>
          item._id === selectedFood._id ? { ...item, ...newFood } : item
        );
        setFoods(updatedList);
        setSelectedFood(null);
      }
    } catch (err) {
      console.error("Update failed", err);
      Swal.fire("Error", "Failed to update item", "error");
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
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        } catch (error) {
          console.error("Delete failed:", error);
          Swal.fire("Error!", "Something went wrong while deleting.", "error");
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foods?.map((item) => (
            <tr key={item._id}>
              <td className="text-base">{item.foodTitle}</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setSelectedFood(item);
                    document.getElementById("update_modal").showModal();
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteFood(item._id)}
                  className="btn btn-sm btn-secondary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleUpdateFood}>
            <h3 className="font-bold text-lg">Update Your Food</h3>
            <input
              type="text"
              name="imageUrl"
              className="input input-bordered w-full my-4"
              defaultValue={selectedFood?.imageUrl}
            />
            <input
              type="text"
              name="foodTitle"
              className="input input-bordered w-full my-4"
              defaultValue={selectedFood?.foodTitle}
            />
            <select
              defaultValue={"Select a category"}
              name="category"
              className="select w-full"
            >
              <option disabled={true}>Select a category</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
            <input
              type="text"
              name="quantity"
              className="input input-bordered w-full my-4"
              defaultValue={selectedFood?.quantity}
            />
            <input type="date" name="expireDate" className="input w-full" />
            <textarea
              className="textarea w-full mt-4"
              name="description"
              defaultValue={selectedFood?.description}
            ></textarea>
            <div className="modal-action justify-between">
              <button type="submit" className="btn btn-sm btn-secondary">
                Update Info
              </button>
              <button
                type="button"
                className="btn btn-sm btn-error text-white"
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
