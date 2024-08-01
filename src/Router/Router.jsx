import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Add from "../Pages/Add";
import Edit from "../Pages/Edit";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
    path: "/Edit/:id",
    element: <Edit />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

export default router;
