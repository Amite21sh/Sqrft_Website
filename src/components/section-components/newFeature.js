import React from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react'; // using lucide icons

function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-45">
          Why Choose SQRFT Infratech?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <Heart className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Experience</h3>
            <p className="text-gray-600">
              Years of expertise in real estate consulting and property solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <Users className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Client Focused</h3>
            <p className="text-gray-600">
              Dedicated to providing personalized solutions for every client.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <Lightbulb className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Leveraging technology to provide seamless property solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
