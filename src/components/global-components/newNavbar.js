import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  ];
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="fixed top-[40%] left-0 z-50 flex flex-col gap-3 pl-0">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 bg-gray-700 hover:bg-gray-700 text-white flex items-center justify-center rounded-r-full shadow-md transition-all duration-300 ease-in-out hover:pl-2"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={publicUrl + "assets/img/logo.png"}
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-white font-medium">
            <NavLink
              to="/"
              className="hover:text-orange-400 transition text-lg"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-orange-400 transition text-lg"
            >
              About
            </NavLink>
            <NavLink
              to="/shop-left-sidebar"
              className="hover:text-orange-400 transition text-lg"
            >
              Projects
            </NavLink>
            <NavLink
              to="/testimonials"
              className="hover:text-orange-400 transition text-lg"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/media"
              className="hover:text-orange-400 transition text-lg"
            >
              Media
            </NavLink>
            <NavLink
              to="/blog"
              className="hover:text-orange-400 transition text-lg"
            >
              Blog
            </NavLink>
            <NavLink
              to="/career"
              className="hover:text-orange-400 transition text-lg"
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-orange-400 transition text-lg"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 px-6 pb-4 text-white font-medium space-y-3">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop-left-sidebar"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              About Us
            </NavLink>
            <NavLink
              to="/testimonials"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Blog
            </NavLink>
            <NavLink
              to="/career"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-orange-400"
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
