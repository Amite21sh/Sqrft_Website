import React from "react";
import PropertyCard from "./section-components/propertyCard";
import Navbar from "./global-components/newNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const fetchProjectData = async () => {
    try {
      const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
      console.log("Projects", response.data.data);
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
        projects.filter(
          (project) => project.category?.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] min-h-screen p-10">
      <Navbar />
      <h1 className="text-4xl font-semi-bold text-gray-100 text-center mt-65 mb-20">
        Projects
      </h1>
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
      <div className="grid grid-cols-1 mt-35 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <PropertyCard
            key={index}
            projectData={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
