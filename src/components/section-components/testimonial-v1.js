import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const publicUrl = process.env.PUBLIC_URL + '/';

    useEffect(() => {
        axios.get('https://sqrft-website-backend.onrender.com/api/testimonialUsers')
            .then(response => {
                setTestimonials(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
    }, []);

    return (
        <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={`${publicUrl}assets/img/bg/20.jpg`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2--- text-center">
                            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
                            <h1 className="section-title">Clients Feedback</h1>
                        </div>
                    </div>
                </div>
                <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
                    {testimonials.map((testimonial) => (
                        <div className="col-lg-4" key={testimonial._id}>
                            <div className="ltn__testimonial-item ltn__testimonial-item-7">
                                <div className="ltn__testimoni-info">
                                    <p><i className="flaticon-left-quote-1" /> {testimonial.description}</p>
                                    <div className="ltn__testimoni-info-inner">
                                        <div className="ltn__testimoni-img">
                                            <img src={`https://sqrft-website-backend.onrender.com${testimonial.image}`} alt={testimonial.name} />
                                        </div>
                                        <div className="ltn__testimoni-name-designation">
                                            <h5>{testimonial.name}</h5>
                                            <label>{testimonial.position}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;