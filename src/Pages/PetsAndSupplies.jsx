import React from "react";
import { useLoaderData } from "react-router";
import ListingCard from "../Components/ListingCard";

const PetsAndSupplies = () => {
    
    const data = useLoaderData(); 
    console.log(data);

    
    const listings = Array.isArray(data) ? data : []; 

    if (!data && !Array.isArray(data)) {
        return <p className="text-center py-20">Error loading listings or no data received.</p>;
    }
    
    return (
        <div>
            <div className="bg-[#5780B8]">
                <div className="text-center text-4xl font-bold">
                    <h2 className="text-white py-8">Pet & Supplies</h2>
                </div>
            </div>

            <div className="max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 md:pl-12 gap-3 mx-auto my-12">
                {listings.length === 0 ? (
                    <p className="col-span-3 text-center text-xl p-10">No listings found at this time.</p>
                ) : (
                   
                    listings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PetsAndSupplies;