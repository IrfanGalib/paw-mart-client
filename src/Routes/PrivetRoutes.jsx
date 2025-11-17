import React, { useContext } from "react";

import { useLocation, Navigate } from "react-router-dom"; //
import { AuthContext } from "../Context/AuthContext";

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

  return <Navigate state={location?.pathname} to="/register" replace={true} />;
};

export default PrivetRoutes;
