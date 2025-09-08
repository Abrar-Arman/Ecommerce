import CartProvider from "@/context/CardProvider";
import WishlistProvider from "@/context/WishlistProvider";
import Footer from "@/myComponent/common/Footer";
import Navbar from "@/myComponent/common/navbar/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </WishlistProvider>
  );
}

export default AppLayout;

