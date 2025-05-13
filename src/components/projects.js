import React from "react";
import PropertyCard from "./section-components/propertyCard";
import Navbar from "./global-components/newNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjectData = async () => {
    try {
      const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
      console.log("Projects", response.data.data);
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] min-h-screen p-20">
      <Navbar />
      <h1 className="text-4xl font-semi-bold text-gray-100 text-center mt-35">
        Projects
      </h1>
      <div className="grid grid-cols-1 mt-35 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
