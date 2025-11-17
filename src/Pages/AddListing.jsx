import React, { useState } from "react";
import Swal from "sweetalert2";

const saveListingToDatabase = async (data) => {
  console.log("Saving to DB:", data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Listing added successfully!" };
};

const AddListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [price, setPrice] = useState("");

  // Categories data
  const categories = ["Pets", "Pet Food", "Accessories", "Pet Care Products"];

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
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
      email: form.email.value,
    };

    fetch("http://localhost:3000/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Submitted Data:", listingData);

    try {
      const response = await saveListingToDatabase(listingData);

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Listing Added!",
          text: "Your new listing has been successfully saved to the database.",
          showConfirmButton: false,
          timer: 3000,
        });

        form.reset();
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "There was an issue saving your listing.",
      });
    }
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
                placeholder="Enter Your Product/Pet name"
                required
              />

              {/* Categories Dropdown */}
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
                  required={selectedCategory !== "Pets"}
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
                placeholder="City, e.g., Dhaka"
                required
              />

              {/* Description */}
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Friendly 2-month-old puppy available for adoption..."
                required
              ></textarea>

              {/* Image URL */}
              <label className="label">Image URL</label>
              <input
                type="url"
                name="image"
                className="input input-bordered"
                placeholder="https://example.com/pet.jpg"
                required
              />

              {/* Date */}
              <label className="label">Date (Available From/Pick Up)</label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />

              {/* Email (Read-only) */}
              <label className="label">Contact Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered bg-gray-100"
                value="user@example.com"
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
