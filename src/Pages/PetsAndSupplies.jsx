import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ListingCard from "../Components/ListingCard";

const PetsAndSupplies = () => {
  const data = useLoaderData();
  const listings = Array.isArray(data) ? data : [];

  const [filter, setFilter] = useState("All");

  const filteredListings =
    filter === "All"
      ? listings
      : listings.filter((item) => item.category === filter);

  return (
    <div>
      <div className="bg-[#5780B8]">
        <div className="text-center text-4xl font-bold">
          <h2 className="text-white py-8">Pet & Supplies</h2>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl  mx-auto mt-6 mb-2 px-12">
        <select
          className="select border-dashed border-[#002855] text-[#002855] w-48"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pets</option>
          <option>Pet Food</option>
          <option>Accessories</option>
          <option>Pet Care Products</option>
        </select>
      </div>

      <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 md:pl-12 gap-3 mx-auto my-12">
        {filteredListings.length === 0 ? (
          <p className="col-span-3 text-center text-xl p-10">
            No listings found for this category.
          </p>
        ) : (
          filteredListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
