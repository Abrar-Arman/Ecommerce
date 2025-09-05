import CartProvider from "@/context/CardProvider";
import WishlistProvider from "@/context/WishlistProvider";
import AppLayout from "@/layout/AppLayout";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import ProductDetails from "@/pages/ProductDetails";
import Wishlist from "@/pages/Wishlist";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <AppLayout />
    ),
    children: [
      { index: true, element:<CartProvider><Home /> </CartProvider> },
      { path: "products", element: <Product /> },
      { path: "product-details", element: <WishlistProvider><CartProvider><ProductDetails /></CartProvider></WishlistProvider> },
      { path: "cart", element: <CartProvider><Cart /></CartProvider> },
      { path: "wishlist", element: <WishlistProvider><Wishlist /></WishlistProvider> },
    ],
  },
]);
export default router;
