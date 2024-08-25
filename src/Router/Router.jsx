import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Lazily load pages for better performance
const Home = lazy(() => import("../Pages/Home"));
const Add = lazy(() => import("../Pages/Add"));
const Edit = lazy(() => import("../Pages/Edit"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
