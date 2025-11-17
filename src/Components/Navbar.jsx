import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiPawPrint } from "react-icons/pi";

import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const userLinks = (
    <>
      <Link to="/addListing">
        <li>
          <a>Add Listing</a>
        </li>
      </Link>
      <Link to="/myListing">
        <li>
          <a>My Listing</a>
        </li>
      </Link>
      <Link to="/myOrders">
        <li>
          <a>My Orders</a>
        </li>
      </Link>
    </>
  );

  const baseLinks = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/petsAndSupplies">
        <li>
          <a>Pets & Supplies</a>
        </li>
      </Link>

      {user && userLinks}
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have been successfully signed out.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message || "An error occurred during logout.",
        });
      });
  };

  return (
    <div className="bg-[#002855]">
      <div className="navbar mx-auto max-w-7xl shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-gray-800"
            >
              {baseLinks}
              {!user && (
                <>
                  <Link to="/login">
                    <li>
                      <a>Login</a>
                    </li>
                  </Link>
                  <Link to="/register">
                    <li>
                      <a>Register</a>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-2xl text-white font-bold">
              <PiPawPrint className="text-3xl" />
              PawMart
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 font-bold">
            {baseLinks}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border-2 border-white">
                    <img
                      alt="User Avatar"
                      src={
                        user?.photoURL ||
                        "https://via.placeholder.com/150/002855/FFFFFF?text=P"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-800"
                >
                  <li>
                    <a className="font-semibold">
                      {user?.displayName || "Profile"}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handleLogout}
                      className="text-red-500 font-semibold"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/login">
                <button className="btn btn-sm text-[#002855] bg-white hover:bg-gray-100 border-none font-bold">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm text-white bg-transparent border-white hover:bg-white hover:text-[#002855] font-bold">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
