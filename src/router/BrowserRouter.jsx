import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/home/home";
import Catalog from "../pages/catalog/catalog";
import Sales from "../pages/sales/sales";
import Login from "../pages/account/login";
import Registration from "../pages/account/registration";
import ProductPage from "../pages/productPage/productPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:_id", element: <ProductPage /> },
      { path: "sales", element: <Sales /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
    ],
  },
]);

export default router