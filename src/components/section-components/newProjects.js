import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const fetchProjectData = async () => {
    try {
      const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
      setProjects(response.data.data);
      setFilteredProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);
  
  const handleFilter = (category) => {
  setActiveFilter(category);
  if (category === "All") {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(
      projects.filter((project) => project.category?.toLowerCase() === category.toLowerCase())
    );
  }
};

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">Our Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['All', 'Commercial', 'Residential', 'Studio'].map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-md font-semibold ${
                activeFilter === category ? 'bg-orange-500' : 'bg-[#4b3b34]'
              } text-white`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden relative text-black shadow-lg"
          >
            <img
              src={project.images}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {project.tag}
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 flex items-center gap-2 mb-2 text-sm sm:text-base">
                <span>📍</span> {project.address}
              </p>
              <p className="text-orange-500 font-semibold text-sm sm:text-base">
                ₹{project.price} onwards
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
