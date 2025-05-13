import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import Careerforms from './section-components/career-forms';
import Map from './section-components/map';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Career = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Career" subheader="Career" />
        <Careerforms />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Career

