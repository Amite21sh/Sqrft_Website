import React from 'react';

function ConsultationSection() {
  return (
    <section className="p-10 text-center bg-white">
      <h2 className="text-2xl font-bold">Free Consultation</h2>
      <p className="mt-4 mb-6">Ready to get started? Request your free consultation now!</p>
      <form className="max-w-md mx-auto text-left">
        <input type="text" placeholder="Your Name" className="w-full mb-3 p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full mb-3 p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full mb-3 p-2 border rounded"></textarea>
        <button type="submit" className="bg-orange-500 text-white p-2 w-full rounded">Submit</button>
      </form>
    </section>
  );
}

export default ConsultationSection;
