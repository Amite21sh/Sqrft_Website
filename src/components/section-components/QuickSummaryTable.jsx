import React from 'react';

const QuickSummary = () => {
  const summaryData = [
    {
      label1: 'Address',
      value1: 'Near Meerut Bypass, Meerut, Uttar Pradesh',
      label2: 'Property Category',
      value2: 'Residential Plots',
      label3: 'Builder Name',
      value3: 'Paras Group',
    },
    {
      label1: 'Property Status',
      value1: 'Under Development',
      label2: 'Possession by',
      value2: '**',
      label3: 'RERA Details',
      value3: 'UPRERAPRJ297873',
    },
    {
      label1: 'Pincode',
      value1: '250001',
      label2: 'Starting Price*',
      value2: 'On Request',
      label3: 'Strategic Location',
      value3: 'Close to big highways and educational institutions',
    },
  ];

  return (
    <section className="my-0 p-4">
      <h2 className="text-3xl font-semi-bold text-gray-100 mb-6">
        Quick Summary of Paras Estate Meerut
      </h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 text-lg font-semibold text-gray-700 text-center">Address</th>
              <th className="py-4 px-6 text-lg font-semibold text-gray-700 text-center">Property Category</th>
              <th className="py-4 px-6 text-lg font-semibold text-gray-700 text-center">Builder Name</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 px-6 text-center">{row.value1}</td>
                <td className="py-4 px-6 text-center">{row.value2}</td>
                <td className="py-4 px-6 text-center">{row.value3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default QuickSummary;
