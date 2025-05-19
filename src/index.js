import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import { HashRouter, Route, Routes } from "react-router-dom";

// Importing CSS


// import HomeV1 from './components/home-v1';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import ProjectDetails from './components/projectDetail';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error from './components/404';
import Location from './components/location';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';
import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Career from './components/career';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';
import WhyChooseUs from './components/whychoose';
import Testimonials from './components/testimonial';

// Class Component for Routes
class Root extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Routes>
                    {/* <Route path="/testing" element={<HomeV1 />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/service-details" element={<ServiceDetails />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio-v2" element={<PortfolioV2 />} />
                    <Route path="/portfolio-details" element={<PortfolioDetails />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/team-details" element={<TeamDetails />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop-grid" element={<ShopGrid />} />
                    <Route path="/shop-left-sidebar" element={<Projects />} />
                    <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} />
                    <Route path="/testimonials" element={<Testimonials />} />

                    <Route path="/product-details/:id" element={<ProdductDetails />} />

                    <Route path="/blog-grid" element={<BlogGrid />} />
                    <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
                    <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/whychooseus" element={<WhyChooseUs />} />
                    <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/add-listing" element={<AddListing />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/order-tracking" element={<OrderTracking />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/project-details" element={<ProjectDetails />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default Root;

// React 18+ rendering method
const rootElement = document.getElementById('quarter'); // Ensure this matches your HTML ID
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
} else {
    console.error('Root element with ID "quarter" not found.');
}