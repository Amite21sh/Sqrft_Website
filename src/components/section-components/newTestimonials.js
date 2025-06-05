import React, { useEffect, useState } from "react";
import axios from "axios";

function Testimonials() {
  const [testimonialUsers, setTestimonialUsers] = useState([]);

  const fetchTestimonials = () => {
    // Fetch testimonials from the API when the component mounts

    axios
      .get("https://sqrft-website-backend-ohqz.onrender.com/api/testimonialUsers") // Replace with your API endpoint
      .then((response) => {
        console.log(response.data); // Handle the response data
        // You can set the state here to display the testimonials dynamically
        setTestimonialUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the testimonials!", error);
      });
  };

  useEffect(() => {
    fetchTestimonials(); // Fetch testimonials when the component mounts
  }, []);

  console.log("testimonials", testimonialUsers); // Log the fetched testimonials to the console
  return (
    <section className="py-16 bg-gradient-to-r from-[#2d2323] to-[#1f3447]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-45">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {
            testimonialUsers.map((user) => (
              <div
                key={user.id} // Assuming each testimonial has a unique ID
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://sqrft-website-backend-ohqz.onrender.com${user.image}`} 
                    alt={user.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {user.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{user.position}</p>
                  </div>
                </div>
                <p className="text-gray-700">{user.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
