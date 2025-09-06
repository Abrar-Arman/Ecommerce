import {lazy, Suspense} from 'react';
import { createBrowserRouter } from "react-router-dom";

import CartProvider from "@/context/CardProvider";
import WishlistProvider from "@/context/WishlistProvider";
import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/Home";
import Spinner from '@/myComponent/common/Spinner';
const Cart=lazy(()=>import('@/pages/Cart'));
const Wishlist=lazy(()=>import('@/pages/Wishlist'));
const Product=lazy(()=>import('@/pages/Product'));
const ProductDetails=lazy(()=>import('@/pages/ProductDetails'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <AppLayout />
    ),
    children: [
      { index: true, element:<CartProvider><Home /> </CartProvider> },
      { path: "products", element:<Suspense fallback={<Spinner />}> <Product /></Suspense> },
      { path: "product-details", element: <Suspense fallback={<Spinner />}><WishlistProvider><CartProvider><ProductDetails /></CartProvider></WishlistProvider></Suspense> },
      { path: "cart", element:<Suspense fallback={<Spinner />}> <CartProvider><Cart /></CartProvider></Suspense>},
      { path: "wishlist", element:<Suspense fallback={<Spinner />}><CartProvider><WishlistProvider><Wishlist /></WishlistProvider></CartProvider> </Suspense> },
    ],
  },
]);
export default router;
