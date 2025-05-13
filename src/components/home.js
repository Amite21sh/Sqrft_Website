import React from 'react';
import Navbar from './global-components/newNavbar';
import HeroSection from './section-components/newHeroSection';
import ProjectsSection from './section-components/newProjects';
import TeamSection from './section-components/newTeam';
import TestimonialsSection from './section-components/newTestimonials';
import DevelopersSection from './section-components/newDevelopers';
import NewsSection from './section-components/newNews';
import FeaturesSection from './section-components/newFeature';
// import ConsultationSection from './section-components/newConsultation';
import Footer from './global-components/newFooter';
// import axios from 'axios';

// import { useEffect, useState } from 'react';

function HomePage() {

  // const [projects, setProjects] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5247/api/form/');
  //     console.log(response.data);
  //     setProjects(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };



  // useEffect(() => {
  //   fetchData();
  // }, []);
    


  return (
    <div className="font-roboto">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      {/* <DevelopersSection /> */}
      <NewsSection />
      <FeaturesSection />
      {/* <ConsultationSection /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
