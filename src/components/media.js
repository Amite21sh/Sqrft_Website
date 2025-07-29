import React from "react";
import Navbar from "./global-components/newNavbar";
import { useState, useEffect } from "react";

const MediaGallery = () => {
  const galleryImages = [
    "https://source.unsplash.com/random/800x600?architecture",
    "https://source.unsplash.com/random/800x600?interior",
    "https://source.unsplash.com/random/800x600?building",
    "https://source.unsplash.com/random/800x600?home",
    "https://source.unsplash.com/random/800x600?office",
    "https://source.unsplash.com/random/800x600?realestate",
  ];

  const [media, setMedia] = useState([]);

  const fetchMedia = async () => {
    try {
      const response = await fetch(
        "http://localhost:5247/api/media"
      );
      const data = await response.json();
      setMedia(data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

    console.log("media", media); // Log the fetched testimonials to the console


  return (
    <div className="bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] min-h-screen mt-24 text-white p-10">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-white  mb-20">
        Media Gallery
      </h1>

      {/* Intro Video */}
      <div className="flex justify-center mb-12">
        <video
          className="w-full max-w-4xl rounded-lg shadow-lg"
          controls
          poster="https://source.unsplash.com/random/800x450?video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {media.map((med, index) => (
          <img
            key={index}
            src={`https://res.cloudinary.com/drvphnwxq/image/upload/v1753277068/${med.image}`}
            alt={med._id}
            className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
