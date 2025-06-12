import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Home from "../pages/Home/Home";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto min-h-screen">
      <Navbar />

      <main className="flex-grow py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
