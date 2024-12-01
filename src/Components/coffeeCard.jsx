import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoffeeCard({ cof, setCoffee, coffee}) {
  const { Photo, name, chef, _id, Taste, Category } = cof;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/addCoffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const updatedCoffees = coffee.filter((cof) => cof._id !== id);
              setCoffee(updatedCoffees);
            }
            else {
              Swal.fire({
                title: "susses!",
                text: "Failed to delete the coffee.",
                icon: "susses",
              });
            }
          });
      }
    });
  };

  return (
    <div 
      className="flex items-center bg-gray-50 border border-blue-300 rounded-lg p-4 shadow-md"
    >
      {/* Coffee Image */}
      <div className="flex-shrink-0">
        <img
          src={Photo}
          alt={name}
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      {/* Coffee Details */}
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">Name: {name}</h3>
        <p className="text-gray-600">Chef: {chef}</p>
        <p className="text-gray-600">category: {Category}</p>
        <p className="text-gray-600">Taste: {Taste}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        {/* View Button */}
        <button
          className="p-2 bg-blue-200 hover:bg-blue-300 text-black rounded-full"
          title="View"
        >
          View
        </button>

        {/* Edit Button */}
        <Link to={`/updateCoffee/${_id}`}>
        <button
          className="p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
          title="Edit"
        >
          Edit
        </button>
        </Link>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          title="Delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
