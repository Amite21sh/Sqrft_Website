import React from 'react';
import { CheckCircle } from 'lucide-react';

const Overview = () => {
  const features = [
    "Thoughtfully Crafted Rooms and Interiors - Designed for luxury and comfort.",
    "Wide Options in Amenities - Including parks, play space, and other security features.",
    "Strategic Location - Made to easily access major roads and public transportation.",
    "Lush Green Surroundings - Great landscaping and open green areas.",
    "Seamless Connectivity - Easily connected to Delhi and to other regions of the NCR.",
    "Elevated Social Space and Air Lounge - Designed to be community-focused.",
    "Extended Tower Drop Offs - All while providing convenience and accessibility."
  ];

  return (
    <div className="p-6 space-y-6 text-gray-800">
      {/* Overview Header */}
      <h2 className="text-3xl font-semi-bold text-gray-100">Overview of Paras Estate Meerut</h2>

      {/* Overview Details */}
      <div className="space-y-2 text-base">
        <p className='text-gray-400'><span className="font-bold text-gray-100">Type of Property :</span> &nbsp;Residential Plots</p>
        <p className='text-gray-400'><span className="font-bold text-gray-100">Property Units :</span> &nbsp;600</p>
        <p className='text-gray-400'><span className="font-bold text-gray-100">Location Highlights :</span> &nbsp;Near the Meerut Bypass, schools, and healthcare centres.</p>
        <p className='text-gray-400'><span className="font-bold text-gray-100">Real Estate Developer :</span> &nbsp;Paras Builder</p>
        <p className='text-gray-400'><span className="font-bold text-gray-100">Property Highlights :</span> &nbsp;Well planned gated community with the best amenities</p>
      </div>

      {/* Top Reasons */}
      <div>
        <h3 className="text-2xl font-semi-bold text-gray-100 mb-4">Top reasons for property investment:</h3>
        <ul className="space-y-2 pl-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-100 mt-1">➜</span>
              <span className='text-gray-400'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
