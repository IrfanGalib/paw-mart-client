import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!user?.email) {
      setOrders([]);
      setLoading(false);
      return;
    }

    fetch(
      `https://paw-mart-server-theta.vercel.app/orders?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load orders:", err);
      })
      .finally(() => setLoading(false));
  }, [user?.email, token]);

  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <h2 className="text-3xl text-[#002855] font-bold mb-6">My Orders</h2>

      {loading ? (
        <p className="text-center py-10">Loading your orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center py-10">You have no orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Buyer Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o._id}>
                  <td>{o.listingName}</td>
                  <td>{o.buyerName}</td>
                  <td>${o.price}</td>
                  <td>{o.quantity}</td>
                  <td>{o.address}</td>
                  <td>{o.phone}</td>
                  <td>{new Date(o.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
