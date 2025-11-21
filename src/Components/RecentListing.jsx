import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from "react-tooltip";

const RecentListing = () => {
  const [recentListings, setRecentListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings/recent") // your backend route
      .then((res) => res.json())
      .then((data) => setRecentListings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" max-w-7xl mx-auto mt-16 lg:pl-0 pl-8">
      <h2 className="text-3xl font-bold text-[#002855] mb-8 text-center ">
        Recent{" "}
        <span className="text-blue-500">
          <Typewriter words={["Listings"]} loop={500} typeSpeed={500} />
          <a id="clickable">◕‿‿◕</a>
          <Tooltip anchorSelect="#clickable" clickable>
            <button>Yay! Listings!!!</button>
          </Tooltip>
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentListings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
