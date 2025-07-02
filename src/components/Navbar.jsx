import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
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
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-food">Add Food</NavLink>
          </li>
          <li>
            <NavLink to={`/my-items/${user?.email}`}>My Items</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="navbar max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 h-16 md:h-20">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost p-0">
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold text-green-600">E-Food</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base gap-4 text-slate-700">
            {navLinks}
          </ul>
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
                className="btn btn-sm md:btn-md btn-outline text-green-600 border-green-600 hover:bg-success hover:text-white transition"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="btn btn-outline border-success text-success hover:bg-success hover:text-white btn-sm md:btn-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-success text-white hover:bg-green-600 btn-sm md:btn-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
