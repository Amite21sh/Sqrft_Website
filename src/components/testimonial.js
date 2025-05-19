import React from "react";
import Navbar from "./global-components/newNavbar";
import PageHeader from "./global-components/page-header";
import Testimonial from "./section-components/newTestimonials";

import Footer from "./global-components/newFooter";

const TestimonialPage = () => {
    return (
        <div>
        <Navbar />
        <PageHeader headertitle="Testimonials" subheader="Testimonials" />
        <Testimonial />
        <Footer />
        </div>
    );
    }

export default TestimonialPage;