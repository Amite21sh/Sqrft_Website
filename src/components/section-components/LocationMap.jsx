import React from 'react';

const LocationMap = ({ mapSrc }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl text-gray-100 font-semi-bold mb-3">Location Map</h2>
      <iframe src={mapSrc} className="w-full h-64 border" title="Location Map"></iframe>
    </div>
  );
};

export default LocationMap;