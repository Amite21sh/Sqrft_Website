import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');

    const handleSearch = () => {
        navigate('/shop-left-sidebar', {
            state: { location, propertyType },
        });
    };

    return (
        <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__car-dealer-form-tab">
                            <div className="tab-content bg-white box-shadow-1 position-relative pb-10 mt-40">
                                <div className="tab-pane fade active show">
                                    <div className="car-dealer-form-inner">
                                        <form className="ltn__car-dealer-form-box row">
                                            <div className="col-lg-4 col-md-6">
                                                <select
                                                    className="nice-select"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                >
                                                    <option value="">Property Location</option>
                                                    <option value="Noida">Noida</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <select
                                                    className="nice-select"
                                                    value={propertyType}
                                                    onChange={(e) => setPropertyType(e.target.value)}
                                                >
                                                    <option value="">Property Type</option>
                                                    <option value="Commercial">Commercial</option>
                                                    <option value="Residential">Residential</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="btn-wrapper text-center mt-0 go-top">
                                                    <button
                                                        type="button"
                                                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                        onClick={handleSearch}
                                                    >
                                                        Find Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;