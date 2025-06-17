import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Fridge from "../pages/Fridge/Fridge";
import AddFood from "../pages/AddFood/AddFood";
import MyItems from "../pages/MyItems/MyItems";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/expire-soon"),
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
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/food-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/food-details/${params.id}`),
        element: <FoodDetails />,
      },
      {
        path: "/my-items/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my-items/${params.email}`),
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
