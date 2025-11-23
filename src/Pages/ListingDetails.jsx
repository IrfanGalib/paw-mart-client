import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const ListingDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [listing, setListing] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/listings`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((l) => l._id === id);
        setListing(item);
      })
      .catch((err) => {
        console.error("Failed to fetch listing:", err);
      });
  }, [id]);

  if (!listing) return <p className="text-center py-20">Loading...</p>;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const order = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      listingId: id,
      listingName: listing.name,
      price: listing.Price,
      quantity:
        listing.category === "Pets" ? 1 : Number(form.quantity?.value ?? 1),
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      notes: form.notes.value,
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Order Placed!",
            text: "Your order has been submitted.",
            timer: 1500,
            showConfirmButton: false,
          });
          setOpen(false);
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: data.message || "Failed to place order",
          });
        }
      })
      .catch((err) => {
        console.error("Order submit error:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while placing order.",
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-12">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={listing.image}
            alt={listing.name}
            className="rounded-lg border-dashed border-2 border-[#002855]"
          />
        </div>

        <div>
          <h1 className="text-4xl text-[#002855] font-bold mt-6">
            {listing.name}
          </h1>

          <div className="border-dashed border-1 border-[#002855] my-5"></div>

          <p className="mt-2 text-gray-700">{listing.description}</p>

          <div className="border-dashed border-1 border-[#002855] my-5"></div>

          <div className="text-lg mt-4 space-y-1">
            <p>
              <strong className="text-[#002855]">Category:</strong>{" "}
              {listing.category}
            </p>
            <p>
              <strong className="text-[#002855]">Owner Email:</strong>{" "}
              {listing.email}
            </p>
            <p>
              <strong className="text-[#002855]">Location:</strong>{" "}
              {listing.location}
            </p>
            <p>
              <strong className="text-[#002855]">Price:</strong> $
              {listing.Price}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="btn w-full bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white mt-6"
      >
        Adopt / Order Now
      </button>

      <div>
        {open && (
          <dialog open className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-3">Place Your Order</h3>

              <form onSubmit={handleOrderSubmit} className="space-y-3">
                {/* Name */}
                <input
                  className="input input-bordered w-full"
                  value={user?.displayName || ""}
                  placeholder="Name"
                  readOnly
                />

                {/* Email */}
                <input
                  className="input input-bordered w-full"
                  value={user?.email || ""}
                  readOnly
                />
                {/* Email */}
                <input
                  className="input input-bordered w-full"
                  value={user?.email || ""}
                  readOnly
                />

                {/* Id */}
                <input
                  className="input input-bordered w-full"
                  value={listing._id}
                  readOnly
                />

                {/* Listing Name */}
                <input
                  className="input input-bordered w-full"
                  value={listing.name}
                  readOnly
                />

                {/* Listing Price */}
                <input
                  className="input input-bordered w-full"
                  value={listing.price}
                  placeholder="Listing Price"
                  readOnly
                />

                {/* Quantity */}
                {listing.category !== "Pets" && (
                  <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    required
                  />
                )}

                {/* Address */}
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                  required
                />

                {/* Date */}
                <input
                  name="date"
                  type="date"
                  className="input input-bordered w-full"
                  required
                />

                {/* Phone Number */}
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  required
                />

                {/* Additional Note */}
                <textarea
                  name="notes"
                  className="textarea textarea-bordered w-full"
                  placeholder="Additional Notes"
                ></textarea>

                {/* Button */}
                <button className="btn w-full  bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white">
                  Submit Order
                </button>
              </form>

              <div className="modal-action">
                <button
                  onClick={() => setOpen(false)}
                  className="btn  bg-white border-dashed border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default ListingDetails;
