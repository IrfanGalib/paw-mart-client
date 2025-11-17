import { Children } from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import PetsSupplies from "../Pages/PetsAndSupplies";
import AddListing from "../Pages/AddListing";
import MyOrders from "../Pages/MyOrders";
import MyListings from "../Pages/MyListings";
import { createBrowserRouter } from "react-router";
import PetsAndSupplies from "../Pages/PetsAndSupplies";

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
        path: "/petsAndSupplies",
        element: <PetsAndSupplies />,
        loader: () => fetch("http://localhost:3000/listing"),
      },
      {
        path: "/addListing",
        element: <AddListing />,
      },
      {
        path: "/myListing",
        element: <MyListings />,
      },
      {
        path: "/myOrders",
        element: <MyOrders />,
      },
    ],
  },
]);
