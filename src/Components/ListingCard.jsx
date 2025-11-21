import React from "react";
import { Link } from "react-router-dom";

export const ListingCard = ({ listing }) => {
  const { _id, name, category, Price, location, description, image } = listing;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt={name} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge bg-[#002855] text-white text-xs py-5 border-[#002855]">
              {category}
            </div>
          </h2>

          <p>{description}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline text-[#002855]">{location}</div>
            <div className="badge badge-outline text-[#002855]">${Price}</div>
          </div>
        </div>

        
        <Link to={`/listingDetails/${_id}`} className="w-full px-5 mb-5">
          <button className="btn w-full bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
