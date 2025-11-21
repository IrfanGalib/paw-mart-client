import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");

  // Categories
  const categories = ["Pets", "Pet Food", "Accessories", "Pet Care Products"];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    let priceValue = form.price.value;
    if (selectedCategory === "Pets") {
      priceValue = 0;
    }

    const listingData = {
      name: form.name.value,
      category: form.category.value,
      price: Number(priceValue),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: user?.email,
    };

    console.log("Sending Data:", listingData);

    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(listingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("MongoDB Response:", data);

        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Listing Added!",
            text: "Your listing has been saved.",
            showConfirmButton: false,
            timer: 2000,
          });

          form.reset();
          setSelectedCategory("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: data.message || "Could not save listing.",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Submission Error",
          text: "Failed to submit listing.",
        });
      });
  };

  return (
    <div>
      <div className="hero bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-15">
          <form onSubmit={handleSubmit} className="card-body ">
            <fieldset className="fieldset">
              <h1 className="text-5xl font-bold mb-6 text-center">
                Add Listing
              </h1>

              {/* Name */}
              <label className="label">Product/Pet Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="Your Product/Pet Name"
                required
              />

              {/* Category */}
              <label className="label">Category</label>
              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                name="category"
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Price */}
              <label className="label">Price (USD)</label>

              {selectedCategory !== "Pets" ? (
                <input
                  type="number"
                  name="price"
                  className="input input-bordered"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              ) : (
                <>
                  <input
                    type="number"
                    name="price"
                    className="input input-bordered"
                    value={0}
                    disabled
                  />
                  <p className="text-xs text-red-500 mt-1">
                    Price is set to 0 (Free for Adoption).
                  </p>
                </>
              )}

              {/* Location */}
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered"
                placeholder="Your Product/Pet Location"
                required
              />

              {/* Description */}
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Please Write a Vivid Description, About Your Product/Pet."
                required
              ></textarea>

              {/* Image */}
              <label className="label">Image URL</label>
              <input
                type="url"
                name="image"
                className="input input-bordered"
                placeholder="www.https//YourImageUrl.com/"
                required
              />

              {/* Date */}
              <label className="label">Date (Pick Up)</label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />

              {/* Email */}
              <label className="label">Contact Email</label>
              <input
                type="email"
                className="input input-bordered bg-gray-100"
                value={user?.email || ""}
                readOnly
              />

              <button
                type="submit"
                className="btn btn-neutral mt-6 bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white"
              >
                Add Listing
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
