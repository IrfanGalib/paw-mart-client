import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingCard from "../Components/ListingCard";

const CategoryFilteredProduct = () => {
  const { category } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://paw-mart-server-theta.vercel.app/listings")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setListings(filtered);
      });
  }, [category]);

  return (
    <div>
      <div className="bg-[#5780B8]">
        <h2 className="text-center text-4xl font-bold text-white py-8">
          {category}
        </h2>
      </div>

      <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 md:pl-12 gap-3 mx-auto my-12">
        {listings.length === 0 ? (
          <p className="col-span-3 text-center text-xl p-10">
            No products found in this category.
          </p>
        ) : (
          listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFilteredProduct;
