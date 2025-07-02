import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    newFood.email = user?.email;
    newFood.addDate = new Date();

    // Convert quantity to a number
    newFood.quantity = parseInt(newFood.quantity, 10);

    // Basic validation (can be expanded)
    if (!newFood.foodTitle || !newFood.category || !newFood.quantity || !newFood.expireDate) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const res = await axiosSecure.post("/foods", newFood);
      if (res.data.insertedId) {
        toast.success("Food added successfully!");
        form.reset();
      }
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error("Failed to add food. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-2xl"> {/* Increased max-w for two columns */}
        <h2 className="text-4xl text-gray-800 mb-8 font-extrabold text-center">
          Add New Food Item
        </h2>
        <form onSubmit={handleAddFood} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid for two columns */}
            {/* Column 1 */}
            <div>
              <div>
                <label htmlFor="foodTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Food Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="foodTitle"
                  name="foodTitle"
                  placeholder="e.g., Organic Apples"
                  className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>

              <div className="mt-6"> {/* Added margin top for spacing */}
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  className="select select-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  <option>Fruits</option>
                  <option>Vegetables</option>
                  <option>Dairy</option>
                  <option>Grains</option>
                  <option>Meat</option>
                  <option>Beverages</option>
                  <option>Snacks</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="e.g., 50"
                  min="1"
                  className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Food Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://example.com/food.jpg"
                  className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="expireDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="expireDate"
                  name="expireDate"
                  className="input input-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>

              <div className="mt-6">
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed px-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Description (full width) */}
          <div className="pt-6"> {/* Added padding top to separate from columns */}
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Brief description of the food item..."
              rows="3"
              className="textarea textarea-bordered w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;