import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Commercial', // Default value for the dropdown
        phone: '',
        message: '',
        agree: false,
    });
    const [formMessage, setFormMessage] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Ensure required fields are filled
        if (!formData.name || !formData.email || !formData.service) {
            setFormMessage('Please fill out all required fields.');
            return;
        }

        try {
            // Notify external handler if provided
            if (onSubmit) {
                await onSubmit(formData);
            }

            // Submit the form to the backend API
            const response = await fetch('https://sqrft-website-backend.onrender.com/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setFormMessage('');
                setFormData({
                    name: '',
                    email: '',
                    service: 'Commercial', // Reset to default value
                    phone: '',
                    message: '',
                    agree: false,
                });
                setShowModal(true); // Show modal on successful submission
            } else {
                setFormMessage(data.message || 'Failed to submit the request.');
            }
        } catch (error) {
            setFormMessage('An error occurred. Please try again.');
        }
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <div className="ltn__contact-message-area mb--100 mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__form-box contact-form-box white-bg">
                            <h4 className="title-2">Get A Quote</h4>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input
                                                type="text"
                                                required
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email ltn__custom-icon">
                                            <input
                                                type="email"
                                                required
                                                name="email"
                                                placeholder="Enter email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item">
                                            <select
                                                className="nice-select"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange} // Updates formData.service correctly
                                            >
                                                <option value="Commercial">Commercial</option>
                                                <option value="Residential">Residential</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-phone ltn__custom-icon">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Enter phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                    <textarea
                                        name="message"
                                        placeholder="Enter message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>
                                    <label className="input-info-save mb-0">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleChange}
                                        />{' '}
                                        Save my name, email, and website in this browser for the next
                                        time I comment.
                                    </label>
                                </p>
                                <div className="btn-wrapper mt-0">
                                    <button
                                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                        type="submit"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                                {formMessage && (
                                    <p className="form-messege mb-0 mt-20">{formMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal" style={modalStyles}>
                    <div className="modal-content" style={modalContentStyles}>
                        <h3>Thank You!</h3>
                        <p>Thank you for reaching out to us. We will contact you shortly.</p>
                        <button
                            style={closeButtonStyles}
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Modal styles
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyles = {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
};

const closeButtonStyles = {
    marginTop: '20px',
    padding: '10px 20px',
    background: '#ff5a3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default ContactForm;
