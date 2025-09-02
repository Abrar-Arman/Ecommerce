import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import ProductDetails from "@/pages/ProductDetails";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "product-details", element: <ProductDetails /> },
    ],
  },
]);
export default router;
