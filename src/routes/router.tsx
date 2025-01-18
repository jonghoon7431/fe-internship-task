import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  //TODO public, private 라우트 설정
  //TODO 404페이지
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },

      {
        path: "my-page",
        element: <ProtectedRoute />,
      },
    ],
  },
]);

export default router;
