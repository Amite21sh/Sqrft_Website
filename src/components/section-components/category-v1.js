import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryV1 extends Component {
    render() {
        return (
            <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
                                <h1 className="section-title">Featured Listings</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
                        {[
                            { icon: "flaticon-car", title: "Parking Space" },
                            { icon: "flaticon-swimming", title: "Swimming Pool" },
                            { icon: "flaticon-secure-shield", title: "Private Security" },
                            { icon: "flaticon-stethoscope", title: "Medical Center" },
                            { icon: "flaticon-book", title: "Library Area" },
                            { icon: "flaticon-bed-1", title: "King Size Beds" },
                            { icon: "flaticon-home-2", title: "Smart Homes" },
                            { icon: "flaticon-slider", title: "Kid’s Playland" },
                        ].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div className="ltn__category-item ltn__category-item-5 text-center">
                                    <Link to="#" className="disabled-link">
                                        <span className="category-icon"><i className={item.icon} /></span>
                                        <span className="category-title">{item.title}</span>
                                        <span className="category-btn"><i className="flaticon-right-arrow" /></span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryV1;
