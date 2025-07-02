import React from "react";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout().then(() => {
      toast.success("You successfully logged out.");
      navigate("/login");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/fridge">Fridge</NavLink>
      </li>
      <li>
        <NavLink to="/add-food">Add Food</NavLink>
      </li>
      <li>
        <NavLink to={`/my-items/${user?.email}`}>My Items</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky shadow-sm bg-slate-50 top-0 z-50 px-6">
      <div className="navbar max-w-[1440px] mx-auto h-16 md:h-20">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-semibold">E-Food</span>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base gap-4">{navLinks}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt="profile"
                title={user?.displayName}
              />
              <button
                className="btn btn-xs sm:btn-sm md:btn-md btn-success btn-outline rounded-sm"
                onClick={handleLogout}
              >
                Signout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink
                to="/login"
                className="btn btn-secondary btn-sm md:btn-md text-sm md:text-base"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-secondary btn-sm md:btn-md text-sm md:text-base"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
