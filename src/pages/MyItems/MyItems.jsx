import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateFoodModal from "./UpdateFoodModal";

const MyItems = () => {
  const { email } = useParams();
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/my-items/${email}`);
        setFoods(res.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        Swal.fire("Error", "Failed to load your items.", "error");
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchItems();
    }
  }, [axiosSecure, email]);

  const handleUpdateFood = async (updatedData) => {
    try {
      const res = await axiosSecure.patch(`/update-food/${selectedFood._id}`, updatedData);

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Your food was updated successfully.", "success");

        const updatedList = foods.map((item) =>
          item._id === selectedFood._id ? { ...item, ...updatedData } : item
        );
        setFoods(updatedList);
        setIsModalOpen(false);
        setSelectedFood(null);
      } else {
        Swal.fire("No Changes", "No changes were made to the food item.", "info");
      }
    } catch (err) {
      console.error("Update failed", err);
      Swal.fire("Error", "Failed to update item. Please try again.", "error");
    }
  };

  const handleDeleteFood = useCallback(
    (_id) => {
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
    },
    [foods, axiosSecure]
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Food Items</h2>

      {loading ? (
        <div className="text-center my-10">Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-base-100 shadow-xl rounded-box">
          <table className="table table-zebra w-full text-center">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Expire Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No food items found.
                  </td>
                </tr>
              ) : (
                foods.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12">
                          <img src={item.imageUrl} alt={item.foodTitle} />
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{item.foodTitle}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>{new Date(item.expireDate).toLocaleDateString()}</td>
                    <td className="flex justify-center items-center space-x-2 h-full">
                      <button
                        className="btn btn-sm btn-info text-white"
                        onClick={() => {
                          setSelectedFood(item);
                          setIsModalOpen(true);
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
      )}

      {/* Update Modal */}
      {isModalOpen && selectedFood && (
        <UpdateFoodModal
          food={selectedFood}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedFood(null);
          }}
          onSubmit={handleUpdateFood}
        />
      )}
    </div>
  );
};

export default MyItems;
