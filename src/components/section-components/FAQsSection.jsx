import React from "react";

const faqs = [
  {
    question:
      "What types of property units are available at Paras Estate Meerut?",
    answer:
      "A variety of residential plots with different sizes are available as a purchase option.",
  },
  {
    question:
      "What are some of the amenities available at Paras Estate Meerut?",
    answer:
      "The development provides a gated residential area with parks together with a clubhouse and fitness facilities and additional amenities.",
  },
  {
    question: "What is the location of Paras Estate Meerut?",
    answer:
      "The residential area is located close to Meerut Bypass within Meerut city boundaries of Uttar Pradesh.",
  },
  {
    question: "What is the RERA number of Paras Estate Meerut?",
    answer: "The RERA registration number is UPRERAPRJ297873.",
  },
  {
    question: "What is the starting price range of Paras Estate Meerut?",
    answer: "You can contact us on +91 9732300007.",
  },
  {
    question: "What is Paras Estate Meerut Pin Code?",
    answer: "The particular postal code used for this region stands at 250001.",
  },
  {
    question: "Is Paras Estate Meerut bookings open?",
    answer:
      "The bookings for Paras Estate Meerut are open now. Contact us now on +91 9732300007.",
  },
];

const BuilderAndFAQ = () => {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      {/* About the Builder */}
      <div>
        <h2 className="text-xl md:text-3xl font-semi-bold text-gray-100">
          About the Builder
        </h2>
        <p className="mt-2 text-gray-400 leading-relaxed">
          Paras Group is a respected property developer known for its values of
          quality and prompt delivery. With an emphasis on high end residential
          and commercial projects, the builder strives to enhance the overall
          living experience through design and sustainability. Their values of
          excellence have earned them a reputable image in the property
          development market.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="text-lg text-gray-700 pt-4 border-t border-gray-300">
        <p className="italic text-gray-100">Disclaimer :</p>
        <p className="mt-1 text-gray-400">
          This article <strong>‘Paras Estate Meerut’</strong> is provided for
          informational purposes only. While every effort is made to ensure the
          accuracy and timeliness of the information with extensive research and
          duly analysis, readers are advised to conduct their own due diligence
          with professionals before making any investment decision. The
          responsibility for the application of the information provided above
          rests solely on the reader. Proceed with caution and take decisions
          based on your real estate ventures.
        </p>
      </div>
    </div>
  );
};

export default BuilderAndFAQ;
