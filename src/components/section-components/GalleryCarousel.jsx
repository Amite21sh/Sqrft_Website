import React, { useState } from 'react';

// const images = [
//   '/images/gallery1.jpg',
//   '/images/gallery2.jpg',
//   '/images/gallery3.jpg',
// ];

const Gallery = ({images}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <section className="my-10 px-4">
      <h2 className="text-3xl font-semi-bold text-gray-100 mb-4">Gallery</h2>
      
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          // src={images[current]}
          src={images[0]}
          alt={`Gallery ${current + 1}`}
          className="w-full h-[450px] object-cover"
        />

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? 'bg-white' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
