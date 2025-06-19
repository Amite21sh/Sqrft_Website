import React from 'react';
import { 
  FaUtensils, FaPowerOff, FaBuilding, FaLock, FaTruckMoving, FaParking,
  FaDumbbell, FaHandHoldingWater, FaSnowflake, FaHardHat, FaFingerprint,
  FaTree, FaDoorOpen, FaChild, FaCalendarAlt, FaFireExtinguisher
} from 'react-icons/fa';

const amenity = [
  { icon: <FaUtensils size={24} />, title: 'Cafeteria/Food Court' },
  { icon: <FaPowerOff size={24} />, title: 'Power Backup' },
  { icon: <FaBuilding size={24} />, title: 'Lift' },
  { icon: <FaLock size={24} />, title: 'Security' },
  { icon: <FaTruckMoving size={24} />, title: 'Service/Good Lift' },
  { icon: <FaParking size={24} />, title: 'Visitor Parking' },
  { icon: <FaDumbbell size={24} />, title: 'Gymnasium' },
  { icon: <FaHandHoldingWater size={24} />, title: 'Rain Water Harvesting' },
  { icon: <FaSnowflake size={24} />, title: 'Air Conditioned' },
  { icon: <FaHardHat size={24} />, title: 'Earthquake Resistant' },
  { icon: <FaFingerprint size={24} />, title: 'Tier 3 Security System' },
  { icon: <FaTree size={24} />, title: 'Large Open Space' },
  { icon: <FaDoorOpen size={24} />, title: 'Grand Entrance Lobby' },
  { icon: <FaChild size={24} />, title: 'Kid Play Area' },
  { icon: <FaCalendarAlt size={24} />, title: 'Event Space & Amphitheatre' },
  { icon: <FaFireExtinguisher size={24} />, title: 'Fire Fighting Equipment' },
];

const Amenities = ({amenities}) => {

  const amenity = amenities[0].split(",");
  
  return (
    <section className="my-10 p-4">
      <h2 className="text-3xl font-semi-bold text-gray-100 mb-6">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-transparent rounded-lg">
        {amenity.map((amenity, index) => (
          <div
            key={index}
          >
            <div className="flex items-center gap-4 p-4 bg-white rounded-md shadow hover:shadow-lg transition duration-300 text-teal-600" >{amenity}</div>
            {/* <span className="text-gray-700 font-medium">{amenity.title}</span> */}
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Amenities;
