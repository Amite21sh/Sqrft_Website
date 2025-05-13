import React from "react";
import Navbar from "./global-components/newNavbar";
import QuickSummaryTable from "./section-components/QuickSummaryTable";
import OverviewSection from "./section-components/OverviewSection";
import GalleryCarousel from "./section-components/GalleryCarousel";
import DescriptionSection from "./section-components/DescriptionSection";
import AmenitiesSection from "./section-components/AmenitiesSection";
import LocationMap from "./section-components/LocationMap";
import FAQsSection from "./section-components/FAQsSection";
import RERASection from "./section-components/RERASection";
import Footer from "./global-components/newFooter";
import { useLocation } from "react-router-dom";

const PropertyDetailPage = () => {

  const location = useLocation();
  const { projectData } = location.state || {}; // Get the project data from the location state

  const summaryData = [
    { attribute: "Location", detail: "Near Meerut Bypass, Meerut-250001" },
    { attribute: "Price", detail: "On Request" },
    { attribute: "Property Type", detail: "Residential Plot" },
  ];

  const overview =
    "Paras Estate Meerut is a premium plotted development offering luxurious plots in a green environment...";

  const images = [
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
  ];

  const description =
    "Paras Estate Meerut is a premium residential plotted development project...";

  const amenities = ["Swimming Pool", "Club House", "Gym", "Jogging Track"];

  const mapSrc =
    "https://maps.google.com/maps?q=Meerut&t=&z=13&ie=UTF8&iwloc=&output=embed";

  const faqs = [
    { question: "What is the starting price?", answer: "On request." },
    {
      question: "What amenities are available?",
      answer: "Clubhouse, Swimming Pool, etc.",
    },
  ];

  const reraInfo = "RERA ID: UPRERAPRJ123456";

  console.log("Project Data:", projectData); // Log the project data to the console

  return (
    <>
    <div className="bg-gradient-to-r from-[#362d2a] via-[#27323e] to-[#1e3a5c] min-h-screen p-20">
      <Navbar />
      {/* <QuickSummaryTable summaryData={summaryData} /> */}
      {/* <OverviewSection overview={overview} /> */}
      <DescriptionSection projectData={projectData} />
      <GalleryCarousel images={projectData.images} />
      <AmenitiesSection amenities={projectData.amenities} />
      <LocationMap mapSrc={mapSrc} />
      <FAQsSection faqs={faqs} />
      <RERASection reraInfo={reraInfo} />
    </div>
    <Footer />
    </>
  );
};

export default PropertyDetailPage;
