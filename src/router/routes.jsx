import { Children } from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddListing from "../Pages/AddListing";
import MyOrders from "../Pages/MyOrders";
import MyListings from "../Pages/MyListings";
import { createBrowserRouter } from "react-router-dom";
import PetsAndSupplies from "../Pages/PetsAndSupplies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoutes from "../Routes/PrivetRoutes";
import ListingDetails from "../Pages/ListingDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/petsAndSupplies",
        element: <PetsAndSupplies />,
        loader: async () => {
          const res = await fetch("http://localhost:3000/listings");
          if (!res.ok) throw new Error("Failed to fetch listings");
          return res.json();
        },
      },
      {
        path: "/addListing",
        element: (
          <PrivetRoutes>
            <AddListing />
          </PrivetRoutes>
        ),
      },
      {
        path: "/myListing",
        element: (
          <PrivetRoutes>
            <MyListings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/listingDetails/:id",
        element: (
          <PrivetRoutes>
            <ListingDetails />
          </PrivetRoutes>
        ),
      },
      {
        path: "/myOrders",
        element: (
          <PrivetRoutes>
            <MyOrders />
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
