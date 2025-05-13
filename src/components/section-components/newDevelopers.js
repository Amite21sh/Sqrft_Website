import React from 'react';

function OurDevelopers() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-45">
          Our Developers
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Developer Card 1 */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
              alt="Development Team"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-left">
              <h3 className="text-white text-2xl font-bold mb-2">
                Development Team
              </h3>
              <p className="text-white text-sm">
                Our expert developers bring over 20 years of combined experience in real estate development.
              </p>
            </div>
          </div>

          {/* Developer Card 2 */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3862376/pexels-photo-3862376.jpeg"
              alt="Design Team"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-left">
              <h3 className="text-white text-2xl font-bold mb-2">
                Design Team
              </h3>
              <p className="text-white text-sm">
                Award-winning architects and designers creating spaces that inspire.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurDevelopers;
