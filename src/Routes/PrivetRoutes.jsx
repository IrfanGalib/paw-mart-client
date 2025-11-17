import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigator state={location?.pathname} to="/register"></Navigator>;
};

export default PrivetRoutes;
