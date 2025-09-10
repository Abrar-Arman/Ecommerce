import CartProvider from "@/context/CardProvider";
import WishlistProvider from "@/context/WishlistProvider";
import Footer from "@/myComponent/common/Footer";
import Navbar from "@/myComponent/common/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function AppLayout() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Navbar />
        <Outlet />
        <ScrollRestoration
          getKey={(location) => {
            const paths = ["/", "/about"];
            return paths.includes(location.pathname)
              ? location.pathname
              : location.key;
          }}
        />
        <Footer />
      </CartProvider>
    </WishlistProvider>
  );
}

export default AppLayout;
