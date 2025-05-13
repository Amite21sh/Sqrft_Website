import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Consultation Section */}
      <div className="bg-gradient-to-r from-orange-500 via-gray-500 to-blue-500 text-white text-center py-16 px-4">
        <h2 className="text-3xl text-white font-bold mb-4">Get Free Consultation</h2>
        <p className="text-lg text-white mb-6">Connect with our expert agents for the best property deals</p>
        <button 
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Contact Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl p-8 relative">
            <button 
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 pl-4 border-red-500">Get NavLink Quote</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                  <span className="absolute right-4 top-4 text-red-500">
                    <i className="fas fa-user"></i>
                  </span>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input type="email" placeholder="Enter email address" className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                  <span className="absolute right-4 top-4 text-red-500">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>

                {/* Select Field */}
                <div className="relative">
                  <select className="w-full border border-gray-300 p-4 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400">
                    <option>Commercial</option>
                    <option>Residential</option>
                  </select>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input type="text" placeholder="Enter phone number" className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
                  <span className="absolute right-4 top-4 text-red-500">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea rows="4" placeholder="Enter message" className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"></textarea>
                <span className="absolute right-4 top-4 text-red-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-gray-600 text-sm">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded">
                  SUBMIT REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-gray-400 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <p>Leading real estate solutions provider with years of expertise in property consultation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/shop-left-sidebar" className="hover:underline">Properties</NavLink></li>
              <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-white font-bold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li><NavLink to="#" className="hover:underline">Residential</NavLink></li>
              <li><NavLink to="#" className="hover:underline">Commercial</NavLink></li>
              <li><NavLink to="#" className="hover:underline">Land</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@sqrft.com</li>
              <li>+91 123 456 7890</li>
              <li>Noida, Uttar Pradesh</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
