import React, { useState } from 'react';

const CareerForms = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: '',
        phone: '',
        coverLetter: '',
        resume: null,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => form.append(key, formData[key]));

        try {
            const response = await fetch('https://sqrft-website-backend.onrender.com/api/applications', {
                method: 'POST',
                body: form,
            });

            if (response.ok) {
                setIsModalOpen(true); // Open modal on success
                setFormData({
                    fullName: '',
                    email: '',
                    role: '',
                    phone: '',
                    coverLetter: '',
                    resume: null,
                });
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            alert('Submission failed. Please try again.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="career-form-container mb-100 p-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-box career-form-box white-bg">
                            <h4 className="title-2 mt-8">Apply for a Job</h4>
                            <form id="career-form" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            required
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            required
                                            name="role"
                                            value={formData.role}
                                            onChange={handleInputChange}
                                            placeholder="Role You Are Applying For"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="coverLetter"
                                            rows="3"
                                            value={formData.coverLetter}
                                            onChange={handleInputChange}
                                            placeholder="Cover Letter (Optional)"
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column' }} className="col-12 btn-wrapper">
                                        <label>Upload Resume</label>
                                        <input
                                            type="file"
                                            required
                                            name="resume"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                    </div>
                                </div>

                                <div className="btn-wrapper">
                                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Application Submitted Successfully!</h3>
                        <p>Thank you for applying. We will review your application and get back to you shortly.</p>
                        <button className="btn theme-btn-1 btn-effect-1" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .modal-content h3 {
                    margin-bottom: 1rem;
                }
                .modal-content p {
                    margin-bottom: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default CareerForms;