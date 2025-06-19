import React from 'react';
import Navbar from './global-components/newNavbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from "react-router-dom";


const BlogDetailsPage = () => {

    const location = useLocation();
    const { data } = location.state || {}; 
// Log the blog details data to the console
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details" />
        <BlogDetails blog={data} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogDetailsPage

