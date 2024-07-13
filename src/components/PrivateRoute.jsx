import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { client } = useSelector((state) => state.client);
  return Object.keys(client).length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/client/" />
  );
};