import React from 'react';

const ReraDetails = ({reraInfo}) => {
  return (
    <section className="my-10 px-4">
      <div style={{ marginBottom: '20px' }}>
        <h2 className="text-xl md:text-3xl font-semi-bold text-gray-100">About the Builder</h2>
        <p className="mt-2 text-gray-400 leading-relaxed">
          {reraInfo.aboutBuilder}
        </p>
      </div>

      
      <h2 className="text-3xl font-semi-bold text-gray-100 mb-4">RERA Details</h2>
      
      <p className="text-gray-400 mb-2">
        {reraInfo.reraDetails}
      </p>

      <p className="text-sm text-gray-400 mb-6">*T&amp;C Apply.</p>

      {/* Disclaimer */}
      <div className="text-lg text-gray-700 pt-4 border-t border-gray-300" style={{ marginBottom: '20px' }}>
        <p className="italic text-gray-100">
          Disclaimer :
        </p>
        <p className="mt-1 text-gray-400">
          {reraInfo.disclaimer}
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-md text-sm italic text-gray-800">
        <p className="font-semibold mb-1">Note: -</p>
        <p>
          If you have any specific query and need further assistance on real estate property like commercial property,
          residential property, and plots for sale and make a promising real estate investment in retail shops, malls,
          multiplex, food courts, 3 BHK apartments, 4 BHK apartments, flat, studio apartments, villa, etc. Contact us now
          on <span className="not-italic font-medium">+91 9732300007</span>.
        </p>
      </div>


      
    </section>
  );
};

export default ReraDetails;
