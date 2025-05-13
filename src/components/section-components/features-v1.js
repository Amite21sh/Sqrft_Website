import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturesV1 extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let customClass = this.props.customClass ? this.props.customClass : '';

        return (
            <div className={customClass}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                <h1 className="section-title">Our Main Focus</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ltn__custom-gutter--- justify-content-center go-top">
                        {[
                            { img: "21.png", title: "Safety of Capital", text: "Ensuring the safety of your capital is our top priority, with robust risk management strategies and a track record of preserving and safeguarding our clients' investments." },
                            { img: "22.png", title: "Income", text: "We strive to maximize your income potential through strategic investment opportunities & tailored income generation strategies, providing you with a reliable and steady stream of earnings." },
                            { img: "23.png", title: "Growth", text: "With a focus on long-term growth, we identify and capitalize on opportunities that drive sustainable returns, helping you achieve your financial goals and build wealth over time." }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-sm-6 col-12">
                                <div className={`ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 ${index === 1 ? 'active' : ''}`}>
                                    <div className="ltn__feature-icon">
                                        <img src={`${publicUrl}assets/img/icons/icon-img/${item.img}`} alt={item.title} />
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="#" className="disabled-link">{item.title}</Link></h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturesV1;