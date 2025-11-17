import { Children } from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddListing from "../Pages/AddListing";
import MyOrders from "../Pages/MyOrders";
import MyListings from "../Pages/MyListings";
import { createBrowserRouter } from "react-router";
import PetsAndSupplies from "../Pages/PetsAndSupplies";
import login from "../Pages/login";
import register from "../Pages/register";
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
        Component: login,
      },
      {
        path: "/register",
        Component: register,
      },
      {
        path: "/petsAndSupplies",
        element: <PetsAndSupplies />,
        loader: () => fetch("http://localhost:3000/listing"),
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
