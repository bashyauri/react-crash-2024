import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
