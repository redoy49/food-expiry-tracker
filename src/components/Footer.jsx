import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 dark:bg-amber-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg flex items-center font-semibold mb-4">
              <img className="w-12 h-12 object-contain" src={logo} alt="" />
              <span className="font-bold">E-Food</span>
            </h3>
            <p className="text-sm">
              Empowering smarter food management and sustainable living.
            </p>
          </div>
          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy and Policy</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/fridge">Fridge</a>
              </li>
              <li>
                <a href="/add-food">Add Food</a>
              </li>
              <li>
                <a href="/my-items">My Items</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="flex space-x-5">
              <a target="_blank" href="https://www.facebook.com">
                <FaFacebook className="text-blue-500" size={28} />
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <FaYoutube className="text-red-500" size={30} />
              </a>

              <a target="_blank" href="https://www.instagram.com">
                <FaInstagram className="text-pink-500" size={28} />
              </a>
              <a target="_blank" href="https://www.pinterest.com">
                <FaPinterest className="text-red-500" size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-gray-500">
          &copy; E-Food All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
