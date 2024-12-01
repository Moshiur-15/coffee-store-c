import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
export default function UpdateCoffee() {
  const data = useLoaderData();
  const { Photo, name, chef, _id, Category, Taste, Details, Supplier } = data;
  console.log(data);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const Supplier = form.Supplier.value;
    const Category = form.Category.value;
    const Chef = form.Chef.value;
    const Taste = form.Taste.value;
    const Details = form.Details.value;
    const Photo = form.Photo.value;
    const newCoffee = { name, Supplier, Category, Chef, Taste, Details, Photo };
    
    fetch(`http://localhost:3000/addCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee)
    })

    .then((res) => res.json())
    
    .then((data) => {
      console.log(data)
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Coffee Updated",
          text: "Your coffee has been updated successfully!",
          icon: "success",
          confirmButtonText: "Close",
        })
      }
    })
  };
  return (
    <div>
      <div>
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Espresso Emporium</h1>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            &larr; Back to home
          </a>
        </header>

        <section className="container mx-auto p-6 mt-6">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
              Update Coffee
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <form onSubmit={handleForm} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  defaultValue={name}
                  name="Name"
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter coffee name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Supplier
                </label>
                <input
                  defaultValue={Supplier}
                  name="Supplier"
                  type="text"
                  id="supplier"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter coffee supplier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  defaultValue={Category}
                  name="Category"
                  type="text"
                  id="category"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter coffee category"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chef
                </label>
                <input
                  defaultValue={chef}
                  name="Chef"
                  type="text"
                  id="chef"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter coffee chef"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Taste
                </label>
                <input
                  defaultValue={Taste}
                  name="Taste"
                  type="text"
                  id="taste"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter coffee taste"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Details
                </label>
                <textarea
                  defaultValue={Details}
                  name="Details"
                  id="details"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  rows="4"
                  placeholder="Enter coffee details"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input
                  defaultValue={Photo}
                  name="Photo"
                  type="text"
                  id="photo"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter photo URL"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 btn btn-primary w-full py-2 text-white bg-brown-500 hover:bg-brown-600 rounded-lg"
                >
                  Add Coffee
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
