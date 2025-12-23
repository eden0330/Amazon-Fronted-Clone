import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate("/auth", {
        state: { msg, redirect: location.pathname },
        replace: true,
      });
    }
  }, [user, navigate, msg, location.pathname]);

  return user ? children : null;
};

export default ProtectedRoute;
