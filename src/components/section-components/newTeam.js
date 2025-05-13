import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5247/api/teamMembers/"
      );
      console.log("Team Members", response.data);
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-30">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <>
              <div
                key={member.id} // Assuming each team member has a unique ID
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <img
                    src={`http://localhost:5247${member.image}`} // Replace with your image path
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mt-2">{member.position}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
