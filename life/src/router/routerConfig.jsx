import { createBrowserRouter, redirect } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import App from "../App";
import Products from "../pages/Products/Products";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/",
        element: <App />,

        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/category/:categoryId",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
