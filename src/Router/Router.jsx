import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Add from "../Pages/Add";
import Edit from "../Pages/Edit"

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
    element: <Edit/>,
  },
]);

export default router;
