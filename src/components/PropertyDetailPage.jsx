// import React from 'react';
// import QuickSummaryTable from '../components/QuickSummaryTable';
// import OverviewSection from '../components/OverviewSection';
// import GalleryCarousel from '../components/GalleryCarousel';
// import DescriptionSection from '../components/DescriptionSection';
// import AmenitiesSection from '../components/AmenitiesSection';
// import LocationMap from '../components/LocationMap';
// import FAQsSection from '../components/FAQsSection';
// import RERASection from '../components/RERASection';

// const PropertyDetailPage = () => {
//   const summaryData = [
//     { attribute: 'Location', detail: 'Near Meerut Bypass, Meerut-250001' },
//     { attribute: 'Price', detail: 'On Request' },
//     { attribute: 'Property Type', detail: 'Residential Plot' },
//   ];

//   const overview = "Paras Estate Meerut is a premium plotted development offering luxurious plots in a green environment...";

//   const images = [
//     'https://via.placeholder.com/400x300',
//     'https://via.placeholder.com/400x300',
//   ];

//   const description = "Paras Estate Meerut is a premium residential plotted development project...";

//   const amenities = ['Swimming Pool', 'Club House', 'Gym', 'Jogging Track'];

//   const mapSrc = "https://maps.google.com/maps?q=Meerut&t=&z=13&ie=UTF8&iwloc=&output=embed";

//   const faqs = [
//     { question: 'What is the starting price?', answer: 'On request.' },
//     { question: 'What amenities are available?', answer: 'Clubhouse, Swimming Pool, etc.' },
//   ];

//   const reraInfo = "RERA ID: UPRERAPRJ123456";

//   return (
//     <div className="max-w-6xl mx-auto p-4 space-y-6">
//       <QuickSummaryTable summaryData={summaryData} />
//       <OverviewSection overview={overview} />
//       <GalleryCarousel images={images} />
//       <DescriptionSection description={description} />
//       <AmenitiesSection amenities={amenities} />
//       <LocationMap mapSrc={mapSrc} />
//       <FAQsSection faqs={faqs} />
//       <RERASection reraInfo={reraInfo} />
//     </div>
//   );
// };

// export default PropertyDetailPage;