import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Add from "../Pages/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

export default router;
