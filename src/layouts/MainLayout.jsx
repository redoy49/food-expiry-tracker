// import React from "react";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router";
// import Home from "../pages/Home/Home";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";

// const MainLayout = () => {
//   return (
//     <div className="max-w-[1280px] mx-auto min-h-screen">
//       <Navbar />

//       <main className="flex-grow py-8">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width Navbar background */}
      <div className="sticky top-0 z-50 bg-success w-full">
        <div className="max-w-[1600px] mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-grow py-8 max-w-[1600px] mx-auto">
        <Outlet />
      </main>

      {/* Full-width Footer background */}
      <div className="bg-success text-success-content w-full">
        <div className="max-w-[1600px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
