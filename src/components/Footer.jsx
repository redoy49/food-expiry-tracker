import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg flex items-center font-semibold mb-4">
              <img
                className="w-12 h-12 object-contain"
                src={logo}
                alt="E-Food Logo"
              />
              <span className="ml-2 font-bold text-2xl text-green-600">
                E-Food
              </span>
            </h3>
            <p className="text-sm text-slate-600">
              Empowering smarter food management and sustainable living.
            </p>
          </div>

          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Contact </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy and Policy</a>
              </li>
              <li>
                <a href="/faq">Email - info@efood.com</a>
              </li>
              <li>
                <a href="/contact">Phone - 0163003804</a>
              </li>
            </ul>
          </div>

          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/fridge">Fridge</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="text-blue-600 hover:scale-110 transition"
                  size={26}
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="text-red-600 hover:scale-110 transition"
                  size={28}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-pink-500 hover:scale-110 transition"
                  size={26}
                />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest
                  className="text-red-500 hover:scale-110 transition"
                  size={26}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} E-Food. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
