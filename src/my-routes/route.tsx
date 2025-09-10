import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/Home";
import Spinner from "@/myComponent/common/Spinner";
import About from "@/pages/About";
import Checkout from "@/pages/checkout";
const Cart = lazy(() => import("@/pages/Cart"));
const Wishlist = lazy(() => import("@/pages/Wishlist"));
const Product = lazy(() => import("@/pages/Product"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: (
          <Suspense fallback={<Spinner />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "product-details",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Spinner />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<Spinner />}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Spinner />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
