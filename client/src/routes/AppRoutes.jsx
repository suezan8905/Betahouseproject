import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Signup from "../pages/signup/SignUp.jsx";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/login",
      element: <Login />, 
    },
    {
      path: "/auth/signup",
      element: <Signup />, 
    },
    {
      path: "/dashboard",
      element: <Dashboard />, 
    },
  ]);

  return <RouterProvider router={router} />;
}
