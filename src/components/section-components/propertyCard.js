import React from "react";
import { useNavigate } from "react-router-dom";
import Amenities from "./AmenitiesSection";

const PropertyCard = ({ projectData}) => {

  const navigate = useNavigate();
  const handleViewDetails = () => {
    // Handle the view details action here, e.g., navigate to a details page
    navigate("/project-details", { state: { projectData } });
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={projectData.images} alt={projectData.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{projectData.title}</h3>

        <p className="text-gray-900 mb-3">
          <span className="font-bold">Location:</span> {projectData.address}
        </p>
        <p className="text-gray-900 mb-2">
          <span className="font-bold">Price:</span> {projectData.price}
        </p>

        <div className="mt-2 mb-3">
          <span className="font-bold">Type:</span> {projectData.category}
          {/* {types.map((type, index) => (
            <span
              key={index}
              className="border border-gray-400 text-gray-600 text-sm px-2 py-1 rounded-full ml-2"
            >
              {type}
            </span>
          ))} */}
        </div>

        <div className="mb-3">
          <span className="font-bold">Property type:</span> {projectData.category}
          {/* <div className="inline-flex flex-wrap gap-2 ml-2 mt-1">
            {propertyTypes.map((ptype, index) => (
              <span
                key={index}
                className="border border-gray-400 text-gray-600 text-sm px-2 py-1 rounded-full"
              >
                {ptype}
              </span>
            ))}
          </div> */}
        </div>

        <div className="mt-auto">
          <button className="bg-gray-900 text-white py-2 px-5 rounded hover:bg-gray-800" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
