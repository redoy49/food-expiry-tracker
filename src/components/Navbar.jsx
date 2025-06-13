import React from "react";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../assets/logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout().then(() => {
      toast.success('You successfully logout.')
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
        <NavLink to="/my-items">My Items</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="w-12 h-12">
          <img className="w-full h-full object-contain" src={logo} alt="" /> 
        </div>
        <span className="font-bold">E-Food</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu md:text-base menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end z-10">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt=""
              id="my-anchor-element"
              title={user.displayName}
            />
            <button
              className="btn text-base md:px-6 md:py-5 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-6">
            <NavLink
              to="/login"
              className="btn text-base md:px-6 md:py-5 rounded-md"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn text-base md:px-6 md:py-5 rounded-md"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
