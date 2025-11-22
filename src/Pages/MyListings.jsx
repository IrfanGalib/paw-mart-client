import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!user?.email) {
      setListings([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `http://localhost:3000/listings?email=${encodeURIComponent(user.email)}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setListings(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load user listings:", err);
        Swal.fire("Error", "Failed to load your listings.", "error");
      })
      .finally(() => setLoading(false));
  }, [user?.email, token]);

  const openEdit = (listing) => {
    setEditing({ ...listing });
  };

  const closeEdit = () => {
    setEditing(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditing((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);

    try {
      const res = await fetch(
        `http://localhost:3000/listings/${editing._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: editing.name,
            category: editing.category,
            Price: editing.Price,
            location: editing.location,
            description: editing.description,
            image: editing.image,
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire("Saved", "Listing updated successfully.", "success");

        setListings((prev) =>
          prev.map((l) =>
            l._id === editing._id ? { ...l, ...editing } : l
          )
        );

        closeEdit();
      } else {
        Swal.fire(
          "Failed",
          result.message || "Failed to update listing.",
          "error"
        );
      }
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error", "Something went wrong while updating.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete listing?",
      text: "This will permanently delete the listing.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      setDeletingId(id);

      try {
        const res = await fetch(
          `http://localhost:3000/listings/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (data.success) {
          Swal.fire("Deleted", "Listing removed.", "success");
          setListings((prev) => prev.filter((l) => l._id !== id));
        } else {
          Swal.fire(
            "Failed",
            data.message || "Failed to delete listing.",
            "error"
          );
        }
      } catch (err) {
        console.error("Delete error:", err);
        Swal.fire("Error", "Failed to delete listing.", "error");
      } finally {
        setDeletingId(null);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <h2 className="text-3xl text-[#002855] font-bold mb-6">
        My Listings
      </h2>

      {loading ? (
        <p className="text-center py-10">Loading your listings...</p>
      ) : listings.length === 0 ? (
        <p className="text-center py-10">
          You don't have any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {listings.map((l) => (
                <tr key={l._id}>
                  <td>
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td>{l.name}</td>
                  <td>{l.category}</td>
                  <td>{l.Price ? `$${l.Price}` : "Free for Adoption"}</td>
                  <td>{l.location}</td>

                  <td className="text-right">
                    <button
                      onClick={() => openEdit(l)}
                      className="btn btn-sm bg-white border-dashed border-[#002855] text-[#002855] mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(l._id)}
                      className="btn btn-sm bg-white border-dashed border-red-500 text-red-500"
                      disabled={deletingId === l._id}
                    >
                      {deletingId === l._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editing && (
        <dialog open className="modal">
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-lg mb-3">Update Listing</h3>

            <form onSubmit={submitEdit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={editing.name}
                  onChange={handleEditChange}
                  className="input input-bordered w-full"
                  placeholder="Listing name"
                  required
                />
                <input
                  name="category"
                  value={editing.category}
                  onChange={handleEditChange}
                  className="input input-bordered w-full"
                  placeholder="Category"
                  required
                />
                <input
                  name="Price"
                  value={editing.Price}
                  onChange={handleEditChange}
                  className="input input-bordered w-full"
                  placeholder="Price"
                />
                <input
                  name="location"
                  value={editing.location}
                  onChange={handleEditChange}
                  className="input input-bordered w-full"
                  placeholder="Location"
                />
              </div>

              <input
                name="image"
                value={editing.image}
                onChange={handleEditChange}
                className="input input-bordered w-full"
                placeholder="Image URL"
              />

              <textarea
                name="description"
                value={editing.description}
                onChange={handleEditChange}
                className="textarea textarea-bordered w-full"
                rows={4}
                placeholder="Description"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="btn"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="btn bg-white border-dashed border-[#002855] text-[#002855]"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default MyListings;
