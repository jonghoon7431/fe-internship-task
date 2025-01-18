import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Layout from "./Layout";

const ProtectedRoute = () => {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    alert("로그인 후 이용 가능합니다");
    return <Navigate to={"/log-in"} replace />;
  }
  return <Layout />;
};

export default ProtectedRoute;
