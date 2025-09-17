import Footer from "@/myComponent/common/Footer";
import Navbar from "@/myComponent/common/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function AppLayout() {
  return (
    <>
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
    </>
  );
}

export default AppLayout;
