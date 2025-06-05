// import React from "react";
// import PropertyCard from "./section-components/propertyCard";
// import Navbar from "./global-components/newNavbar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   const fetchProjectData = async () => {
//     try {
//       const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
//       console.log("Projects", response.data.data);
//       setProjects(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProjectData();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] min-h-screen p-10">
//       <Navbar />
//       <h1 className="text-4xl font-semi-bold text-gray-100 text-center mt-65 mb-20">
//         Projects
//       </h1>
//       <div className="flex flex-wrap justify-center gap-4">
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold">
//             All
//           </button>
//           <button className="bg-[#4b3b34] text-white px-4 py-2 rounded-md font-semibold">
//             Commercial
//           </button>
//           <button className="bg-[#4b3b34] text-white px-4 py-2 rounded-md font-semibold">
//             Residential
//           </button>
//           <button className="bg-[#4b3b34] text-white px-4 py-2 rounded-md font-semibold">
//             Studio
//           </button>
//         </div>
//       <div className="grid grid-cols-1 mt-35 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <PropertyCard
//             key={index}
//             projectData={project}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("All");

//   const fetchProjectData = async () => {
//     try {
//       const response = await axios.get("https://sqrft-website-backend-ohqz.onrender.com/api/form");
//       setProjects(response.data.data);
//       setFilteredProjects(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProjectData();
//   }, []);

//   const handleFilter = (category) => {
//     setActiveFilter(category);
//     if (category === "All") {
//       setFilteredProjects(projects);
//     } else {
//       setFilteredProjects(
//         projects.filter(
//           (project) => project.category?.toLowerCase() === category.toLowerCase()
//         )
//       );
//     }
//   };

//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] text-white">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6">Our Projects</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["All", "Commercial", "Residential", "Studio"].map((category) => (
//             <button
//               key={category}
//               onClick={() => handleFilter(category)}
//               className={`px-4 py-2 rounded-md font-semibold ${
//                 activeFilter === category ? "bg-orange-500" : "bg-[#4b3b34]"
//               } text-white`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-lg overflow-hidden relative text-black shadow-lg"
//           >
//             <img
//               src={project.images}
//               alt={project.title}
//               className="w-full h-48 sm:h-56 object-cover"
//             />
//             <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
//               {project.tag}
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 flex items-center gap-2 mb-2 text-sm sm:text-base">
//                 <span>📍</span> {project.address}
//               </p>
//               <p className="text-orange-500 font-semibold text-sm sm:text-base">
//                 ₹{project.price} onwards
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;

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
