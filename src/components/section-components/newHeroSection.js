import React from "react";
import { Search } from "lucide-react"; // You can also use any icon library you like

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-r from-sky-500 via-gray-400 to-orange-500 px-4">
      <h1 className="text-5xl font-bold text-white mb-4">
        Find Your Dream Property
      </h1>
      <p className="text-xl text-white mb-10">
        Search properties for sale, rent, or lease across top locations.
      </p>

      <div className="flex items-center rounded-md overflow-hidden w-full max-w-3xl">
        <input
          type="text"
          placeholder="Enter City, Location, or Project Name"
          className="flex-1 py-9 mt-4 text-gray-600 focus:outline-none"
        />
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-6 font-semibold">
          <Search size={20} />
          Search
        </button>
      </div>


    </section>
  );
}

export default HeroSection;
