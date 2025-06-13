import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Fridge from "../pages/Fridge/Fridge";
import AddFood from "../pages/AddFood/AddFood";
import MyItems from "../pages/MyItems/MyItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/fridge",
        element: <Fridge />,
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/my-items",
        element: <MyItems />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
