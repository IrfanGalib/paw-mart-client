import React from "react";
import { PiPawPrint } from "react-icons/pi";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#002855]">
      <div className="navbar mx-auto shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
            >
              <Link to="/">
                {" "}
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/petsAndSupplies">
                {" "}
                <li>
                  <a>Pets & Supplies</a>
                </li>
              </Link>
              <Link to="/addListing">
                {" "}
                <li>
                  <a>Add Listing</a>
                </li>
              </Link>
              <Link to="/myListing">
                {" "}
                <li>
                  <a>My Listing</a>
                </li>
              </Link>
              <Link to="/myOrders">
                {" "}
                <li>
                  <a>My Orders</a>
                </li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-2xl text-white font-bold">
              <PiPawPrint />
              PawMart
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 font-bold">
            <Link to="/">
              {" "}
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/petsAndSupplies">
              {" "}
              <li>
                <a>Pets & Supplies</a>
              </li>
            </Link>
            <Link to="/addListing">
              {" "}
              <li>
                <a>Add Listing</a>
              </li>
            </Link>
            <Link to="/myListing">
              {" "}
              <li>
                <a>My Listing</a>
              </li>
            </Link>
            <Link to="/myOrders">
              {" "}
              <li>
                <a>My Orders</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
