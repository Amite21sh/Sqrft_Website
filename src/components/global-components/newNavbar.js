import React from "react";
import { NavLink } from "react-router-dom";
// import logo from '../../../public/assets/img/logo.png'; // Adjust the path as necessary

function Navbar() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={publicUrl + "assets/img/logo.png"}
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-white font-medium">
          <NavLink to="/" className="hover:text-orange-400 transition">
            Home
          </NavLink>
          <NavLink
            to="/shop-left-sidebar"
            className="hover:text-orange-400 transition"
          >
            Projects
          </NavLink>
          <NavLink to="/about" className="hover:text-orange-400 transition">
            About Us
          </NavLink>
          <NavLink
            to="/testimonials"
            className="hover:text-orange-400 transition"
          >
            Testimonials
          </NavLink>
          <NavLink to="/blog" className="hover:text-orange-400 transition">
            Blog
          </NavLink>
          <NavLink to="/career" className="hover:text-orange-400 transition">
            Career
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
