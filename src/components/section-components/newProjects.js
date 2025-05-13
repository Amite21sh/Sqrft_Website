import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjectData = async () => {
    try {
      const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white font-bold mb-50">Our Projects</h2>
        <div className="flex justify-center mb-35 gap-4">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold">
            All
          </button>
          <button className="bg-[#4b3b34] text-white px-5 py-2 rounded-md font-semibold">
            Commercial
          </button>
          <button className="bg-[#4b3b34] text-white px-5 py-2 rounded-md font-semibold">
            Residential
          </button>
          <button className="bg-[#4b3b34] text-white px-5 py-2 rounded-md font-semibold">
            Studio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden relative text-black"
          >
            <img
              src={project.images}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {project.tag}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <span>📍</span> {project.address}
              </p>
              <p className="text-orange-500 font-semibold">
                ₹{project.price} onwards
              </p>
            </div>
          </div>
        ))}

        {/* Project 1 */}
        {/* <div className="bg-white rounded-lg overflow-hidden relative text-black">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Villa"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            Exclusive
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Luxury Villa Complex</h3>
            <p className="text-gray-600 flex items-center gap-2 mb-2">
              <span>📍</span> Greater Noida West
            </p>
            <p className="text-orange-500 font-semibold">₹2.5 Cr onwards</p>
          </div>
        </div> */}

        {/* Project 2 */}
        {/* <div className="bg-white rounded-lg overflow-hidden text-black">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
            alt="Modern Office"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Modern Office Space</h3>
            <p className="text-gray-600 flex items-center gap-2 mb-2">
              <span>📍</span> Sector 62, Noida
            </p>
            <p className="text-orange-500 font-semibold">₹1.8 Cr</p>
          </div>
        </div> */}

        {/* Project 3 */}
        {/* <div className="bg-white rounded-lg overflow-hidden text-black">
          <img
            src="https://images.unsplash.com/photo-1598928506311-5b4213b19205"
            alt="Studio Apartments"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Studio Apartments</h3>
            <p className="text-gray-600 flex items-center gap-2 mb-2">
              <span>📍</span> Sector 150, Noida
            </p>
            <p className="text-orange-500 font-semibold">₹45L onwards</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
