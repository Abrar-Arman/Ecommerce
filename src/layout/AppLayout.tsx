import Footer from "@/myComponent/common/Footer";
import Navbar from "@/myComponent/common/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
