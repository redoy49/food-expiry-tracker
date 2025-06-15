import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { MdDelete, MdUpdate } from "react-icons/md";

const MyItems = () => {
  const myItems = useLoaderData()
  console.log(myItems);
  // const handleDelete = (_id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://roommate-finder-server-xi.vercel.app/lists/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount) {
  //             const newLists = lists.filter((list) => list._id !== _id);
  //             setLists(newLists);
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //     }
  //   });
  // };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myItems.map((item) => (
            <tr key={item._id}>
              <td>{item.foodTitle}</td>
              <td>
                <Link to={`/update/${item._id}`}>
                  {/* <MdUpdate className="cursor-pointer" size={20} /> */}
                  <button className="btn btn-sm btn-secondary">Update</button>
                </Link>
              </td>
              <td>
                {/* <MdDelete
                  // onClick={() => handleDelete(item._id)}
                  className="cursor-pointer"
                  size={20}
                /> */}
                  <button className="btn btn-sm btn-secondary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;