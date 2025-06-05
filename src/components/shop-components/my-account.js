import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MyAccount = () => {
  const [formData, setFormData] = useState({
    category: "Commercial",
    title: "",
    description: "",
    address: "",
    area: "",
    rooms: "",
    baths: "",
    yearBuilt: "",
    lotDimensions: "",
    price: "",
    propertyStatus: "forSale",
    features: [],
    amenities: [],
    floorPlans: [],
    images: [],
  });

  const featuresList = [
    "Living Room",
    "Garage",
    "Dining Area",
    "Bedroom",
    "Bathroom",
    "Gym Area",
    "Garden",
    "Parking",
  ];

  const amenitiesList = [
    "Air Conditioning",
    "Gym",
    "Microwave",
    "Swimming Pool",
    "WiFi",
    "Barbeque",
    "Recreation",
    "Basketball Court",
    "Fireplace",
    "Refrigerator",
    "Window Coverings",
    "Washer",
    "24x7 Security",
    "Indoor Game",
  ];

  const floorPlanTabs = ["1 BHK", "2 BHK", "3 BHK", "Add +"];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], ...files],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [blogs, setBlogs] = useState([]);

  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
    writtenBy: "",
  });

  const [teamMembers, setTeamMembers] = useState([]);

  const [teamForm, setTeamForm] = useState({
    name: "",
    image: null,
    position: "",
  });

  // Testimonial State

  const [testimonials, setTestimonials] = useState([]);

  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    image: null,
    description: "",
    position: "",
  });

  const [media, setMedia] = useState([]);

  const [mediaForm, setMediaForm] = useState({
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchTestimonials();
    fetchTeamMembers();
    fetchBlogs();
    fetchMedia();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend.onrender.com/api/testimonialUsers"
      );
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend-ohqz.onrender.com/api/teamMembers"
      );
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  const fetchMedia = async () => {
    try {
      const response = await axios.get("https://sqrft-website-backend.onrender.com/api/media");
      setMedia(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const submitTeamMemberDetail = async (e) => {
    e.preventDefault();
    if (!teamForm.image) {
      alert("Please select an image.");
      return;
    }
    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("name", teamForm.name);

    formDataObj.append("image", teamForm.image);
    formDataObj.append("position", teamForm.position);
    try {
      await axios.post(
        "https://sqrft-website-backend-ohqz.onrender.com/api/teamMembers",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      fetchTeamMembers();

      setTeamForm({ name: "", image: null, position: "" });
    } catch (error) {
      console.error("Error adding team member:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    if (!blogForm.image) {
      alert("Please select an image.");
      return;
    }
    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("title", blogForm.title);
    formDataObj.append("description", blogForm.description);
    formDataObj.append("image", blogForm.image);
    formDataObj.append("content", blogForm.content);
    formDataObj.append("writtenBy", blogForm.writtenBy);
    try {
      await axios.post(
        "https://sqrft-website-backend-ohqz.onrender.com/api/blogs",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fetchBlogs();
      setBlogForm({
        title: "",
        description: "",
        content: "",
        image: null,
        writtenBy: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend-ohqz.onrender.com/api/blogs"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(
        `https://sqrft-website-backend-ohqz.onrender.com/api/blogs/${id}`
      );
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeleting(null);
    }
  };

  const submitTestimonial = async (e) => {
    e.preventDefault();
    if (!testimonialForm.image) {
      alert("Please select an image.");
      return;
    }
    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("name", testimonialForm.name);
    formDataObj.append("image", testimonialForm.image);
    formDataObj.append("description", testimonialForm.description);
    formDataObj.append("position", testimonialForm.position);

    try {
      await axios.post(
        "https://sqrft-website-backend.onrender.com/api/testimonialUsers",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fetchTestimonials();
      setTestimonialForm({
        name: "",
        image: null,
        description: "",
        position: "",
      });
    } catch (error) {
      console.error("Error adding testimonial:", error);
    } finally {
      setLoading(false);
    }
  };



  const submitMedia = async (e) => {
  e.preventDefault();

  // Check if file is a File object
  if (!(mediaForm.image instanceof File)) {
    alert("Please select a valid image file.");
    return;
  }

  setLoading(true);

  const formDataObj = new FormData();
  formDataObj.append("image", mediaForm.image); // Ensure this is a File

  try {
    await axios.post("https://sqrft-website-backend.onrender.com/api/media", formDataObj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    fetchMedia(); // Refresh media list
    setMediaForm({ image: null }); // Reset form
  } catch (error) {
    console.error("Error adding media:", error.response || error);
    alert("Failed to upload image. Check server or file type.");
  } finally {
    setLoading(false);
  }
};


  const deleteTeamMember = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(
        `https://sqrft-website-backend-ohqz.onrender.com/api/teamMembers/${id}`
      );

      fetchTeamMembers();
    } catch (error) {
      console.error("Error deleting team member:", error);
    } finally {
      setDeleting(null);
    }
  };

  const deleteTestimonial = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(
        `https://sqrft-website-backend.onrender.com/api/testimonialUsers/${id}`
      );
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    } finally {
      setDeleting(null);
    }
  };

  const deleteMedia = async (id) => {
    setDeleting(id);
    try {
      await axios.delete(`https://sqrft-website-backend.onrender.com/api/media/${id}`);
      fetchMedia();
    } catch (error) {
      console.error("Error deleting media:", error);
    } finally {
      setDeleting(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "images" || key === "floorPlans") {
        formData[key].forEach((file) => {
          formDataObj.append(key, file);
        });
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        "https://sqrft-website-backend.onrender.com/api/form/submit",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert("Property submitted successfully!");
      } else {
        console.error("Error submitting form: ", response.statusText);
        alert("Failed to submit property. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form: ", error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  const [uploadedFiles, setUploadedFiles] = useState(
    floorPlanTabs.reduce((acc, tab) => ({ ...acc, [tab]: [] }), {})
  );

  const [properties, setProperties] = useState([]);
  const [careerApplications, setCareerApplications] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 5;

  const fetchProperties = async (page) => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend.onrender.com/api/form"
      );
      const totalProperties = response.data.data || [];

      const startIndex = (page - 1) * itemsPerPage;
      const paginatedData = totalProperties.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setProperties(paginatedData);
      setTotalPages(Math.ceil(totalProperties.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching properties:", error);
      setProperties([]);
    }
  };

  const fetchCareerApplications = async (page) => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend.onrender.com/api/applications"
      );

      console.log("Response from API:", response);

      const totalApplications = response?.data.data || [];
      console.log("Total Application details:", totalApplications);
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedData = totalApplications.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setCareerApplications(paginatedData);
      setTotalPages(Math.ceil(totalApplications.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching career applications:", error);
      setCareerApplications([]);
    }
  };

  const fetchContactDetails = async (page) => {
    try {
      const response = await axios.get(
        "https://sqrft-website-backend.onrender.com/api/contacts"
      );

      console.log("Contact Details API Fetched:", response);

      const totalContact = response?.data || [];
      console.log("Total Contact details:", totalContact);

      // Reverse the array to show the newest data at the top
      const sortedContacts = totalContact.reverse();

      const startIndex = (page - 1) * itemsPerPage;
      const paginatedData = sortedContacts.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setContactDetails(paginatedData);
      setTotalPages(Math.ceil(totalContact.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching contact details:", error);
      setContactDetails([]);
    }
  };

  useEffect(() => {
    fetchProperties(currentPage);
    fetchCareerApplications(currentPage);
    fetchContactDetails(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://sqrft-website-backend.onrender.com/api/form/${id}`
      );
      if (response.status === 200) {
        setProperties(properties.filter((property) => property.id !== id));
        alert(`Property with ID ${id} deleted successfully!`);
      } else {
        alert("Failed to delete property.");
      }
    } catch (error) {
      console.error("Error deleting property:", error.message);
      alert("An error occurred while deleting the property.");
    }
  };

  const handleContactDelete = async (id) => {
    try {
      const response = await axios.delete(
        `hhttps://sqrft-website-backend.onrender.com/api/contacts/${id}`
      );
      if (response.status === 200) {
        alert(`Property with ID ${id} deleted successfully!`);
      } else {
        alert("Failed to delete property.");
      }
    } catch (error) {
      console.error("Error deleting property:", error.message);
      alert("An error occurred while deleting the property.");
    }
  };

  const [activeTab, setActiveTab] = useState("ltn_tab_1_1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (!uploadedFiles[activeTab]) {
      setUploadedFiles((prevFiles) => ({ ...prevFiles, [activeTab]: [] }));
    }
  }, [activeTab]);

  console.log("Contact Data:", contactDetails);
  console.log("Appliaction Data:", careerApplications);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  {/* Sidebar Menu */}

                  <div className="col-lg-4">
                    <div className="ltn__tab-menu-list mb-50">
                      <div className="nav cursor-pointer">
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_1" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_1")}
                        >
                          Dashboard <i className="fas fa-home" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_5" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_5")}
                        >
                          My Properties <i className="fa-solid fa-list" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_7" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_7")}
                        >
                          Add Property{" "}
                          <i className="fa-solid fa-map-location-dot" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_8" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_8")}
                        >
                          Career Application{" "}
                          <i className="fa-solid fa-briefcase" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_9" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_9")}
                        >
                          Contact Form Data{" "}
                          <i className="fa-solid fa-file-alt" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_10" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_10")}
                        >
                          Testimonial <i className="fa-solid fa-comment" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_11" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_11")}
                        >
                          Team Members <i className="fa-solid fa-user" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_13" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_13")}
                        >
                          Media <i className="fa-solid fa-user" />
                        </a>
                        <a
                          className={`nav-link ${
                            activeTab === "ltn_tab_1_12" ? "active" : ""
                          }`}
                          onClick={() => handleTabClick("ltn_tab_1_12")}
                        >
                          Blogs <i className="fa-solid fa-comment" />
                        </a>

                        <Link to="/login" className="nav-link">
                          Logout <i className="fas fa-sign-out-alt" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Tab Content Area */}
                  <div className="col-lg-8">
                    <div className="tab-content">
                      {/* Dashboard */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_1" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_1"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Hello <strong>Admin</strong>, Welcome Back!
                          </p>
                        </div>
                      </div>

                      {/* My Properties */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_5" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_5"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Image</th>
                                  <th scope="col">Property Name</th>
                                  <th scope="col">Date Added</th>
                                  <th scope="col">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {properties.length > 0 ? (
                                  properties.map((property) => (
                                    <tr key={property.id}>
                                      <td className="ltn__my-properties-img">
                                        <Link
                                          to={`/product-details/${property.id}`}
                                        >
                                          <img
                                            src={
                                              property.images[0] ||
                                              "https://via.placeholder.com/100"
                                            }
                                            alt="Property"
                                            width="100"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6>
                                            <Link
                                              to={`/product-details/${property.id}`}
                                            >
                                              {property.title || "No Title"}
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="fas fa-map-marker-alt" />{" "}
                                            {property.address || "No Location"}
                                          </small>
                                        </div>
                                      </td>
                                      <td>{property.createdAt || "No Date"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            handleDelete(property._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash-can" />
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="4" className="text-center">
                                      No properties available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>

                          {/* Pagination */}
                          <div className="ltn__pagination-area text-center">
                            <ul className="pagination justify-content-center">
                              <li
                                className={`page-item ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-left" />
                                </button>
                              </li>
                              {Array.from(
                                { length: totalPages },
                                (_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${
                                      currentPage === index + 1 ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() =>
                                        handlePageChange(index + 1)
                                      }
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                )
                              )}
                              <li
                                className={`page-item ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-right" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Add Property */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_7" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_7"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <form onSubmit={handleSubmit}>
                            <h6>Select Categories</h6>
                            <div className="row">
                              <div className="col-lg-12 col-md-6">
                                <div className="input-item">
                                  <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="nice-select"
                                  >
                                    <option value="Commercial">
                                      Commercial
                                    </option>
                                    <option value="Residential">
                                      Residential
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <h6>Property Description</h6>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <input
                                    type="text"
                                    name="title"
                                    placeholder="*Title (mandatory)"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <h6>Listing Media</h6>
                            <input
                              type="file"
                              name="images"
                              multiple
                              onChange={handleInputChange}
                              className="btn theme-btn-3 mb-10"
                            />
                            <p>
                              <small>
                                * At least 1 image is required. Minimum size is
                                500/500px.
                              </small>
                            </p>

                            <h6>Listing Location</h6>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <input
                                    type="text"
                                    name="address"
                                    placeholder="*Enter complete address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <h6>Property Detail</h6>
                            <div className="row">
                              {[
                                "area",
                                "rooms",
                                "baths",
                                "yearBuilt",
                                "lotDimensions",
                                "price",
                              ].map((field) => (
                                <div className="col-md-6" key={field}>
                                  <div className="input-item input-item-textarea ltn__custom-icon">
                                    <input
                                      type="text"
                                      name={field}
                                      placeholder={field.replace(
                                        /([A-Z])/g,
                                        " $1"
                                      )}
                                      value={formData[field]}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <label>Property Status</label>
                            <select
                              name="propertyStatus"
                              value={formData.propertyStatus}
                              onChange={handleInputChange}
                              className="form-control mb-3"
                            >
                              <option value="forSale">For Sale</option>
                              <option value="forRent">For Rent</option>
                              <option value="sold">Sold</option>
                              <option value="underOffer">Under Offer</option>
                              <option value="offMarket">Off Market</option>
                            </select>

                            <h4 className="title-2">Facts and Features</h4>
                            <ul className="property-detail-feature-list clearfix mb-45">
                              {featuresList.map((feature) => (
                                <li key={feature} className="feature-list-item">
                                  <div className="property-detail-feature-list-item">
                                    <i className="flaticon-double-bed" />
                                    <div>
                                      <h6>{feature}</h6>
                                      <input
                                        type="checkbox"
                                        name="features"
                                        value={feature}
                                        checked={formData.features.includes(
                                          feature
                                        )}
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>

                            <h6>Floor Plans</h6>
                            {/* Tabs Menu */}
                            <div className="ltn__tab-menu ltn__tab-menu-3">
                              <div className="nav">
                                {floorPlanTabs.map((tab, index) => (
                                  <a
                                    key={index}
                                    onClick={() => handleTabClick(tab)}
                                    className={`tab-link ${
                                      activeTab === tab ? "active show" : ""
                                    }`}
                                    style={{
                                      cursor: "pointer",
                                      padding: "10px",
                                      marginRight: "5px",
                                      borderBottom:
                                        activeTab === tab
                                          ? "2px solid #007bff"
                                          : "none",
                                    }}
                                  >
                                    {tab}
                                  </a>
                                ))}
                              </div>
                            </div>

                            {/* File Upload Input */}
                            <input
                              type="file"
                              name="floorPlans"
                              multiple
                              onChange={handleInputChange}
                              className="btn theme-btn-3 mb-10"
                              style={{ margin: "10px 0" }}
                            />

                            {/* Display Uploaded Files */}
                            <div>
                              <h6>Uploaded Files for {activeTab}:</h6>
                              {uploadedFiles[activeTab] &&
                              uploadedFiles[activeTab].length > 0 ? (
                                <ul>
                                  {uploadedFiles[activeTab].map(
                                    (file, index) => (
                                      <li key={index}>{file.name}</li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <p>No files uploaded for this floor plan.</p>
                              )}
                            </div>

                            <h6>Amenities</h6>
                            <div className="row">
                              {amenitiesList.map((amenity) => (
                                <div
                                  className="col-lg-4 col-md-6"
                                  key={amenity}
                                >
                                  <label className="checkbox-item">
                                    {amenity}
                                    <input
                                      type="checkbox"
                                      name="amenities"
                                      value={amenity}
                                      checked={formData.amenities.includes(
                                        amenity
                                      )}
                                      onChange={handleInputChange}
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              ))}
                            </div>

                            <div className="btn-wrapper text-center mt-30">
                              <button
                                type="submit"
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              >
                                Submit Property
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      {/* Career Applications */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_8" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_8"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Role</th>

                                  <th scope="col">Phone Number</th>
                                  <th scope="col">Cover Letter</th>
                                  <th scope="col">Resume</th>

                                  <th scope="col">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {careerApplications.length > 0 ? (
                                  careerApplications.map((property) => (
                                    <tr key={property.id}>
                                      <td className="ltn__my-properties-img">
                                        <Link
                                          to={`/product-details/${property.id}`}
                                        >
                                          <img
                                            src={
                                              property.images[0] ||
                                              "https://via.placeholder.com/100"
                                            }
                                            alt="Property"
                                            width="100"
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <div className="ltn__my-properties-info">
                                          <h6>
                                            <Link
                                              to={`/product-details/${property.id}`}
                                            >
                                              {property.title || "No Title"}
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="fas fa-map-marker-alt" />{" "}
                                            {property.address || "No Location"}
                                          </small>
                                        </div>
                                      </td>
                                      <td>{property.createdAt || "No Date"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            handleDelete(property._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash-can" />
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="6" className="text-center">
                                      No Current Appliaction available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>

                          {/* Pagination */}
                          <div className="ltn__pagination-area text-center">
                            <ul className="pagination justify-content-center">
                              <li
                                className={`page-item ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-left" />
                                </button>
                              </li>
                              {Array.from(
                                { length: totalPages },
                                (_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${
                                      currentPage === index + 1 ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() =>
                                        handlePageChange(index + 1)
                                      }
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                )
                              )}
                              <li
                                className={`page-item ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-right" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Conatct Form Data Applications */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_9" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_9"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Phone Number</th>
                                  <th scope="col">Message</th>
                                  <th scope="col">Property Type</th>
                                  <th scope="col">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {contactDetails?.length > 0 ? (
                                  contactDetails.map((contact) => (
                                    <tr key={contact._id}>
                                      <td>{contact.name || "N/A"}</td>
                                      <td>{contact.email || "N/A"}</td>
                                      <td>{contact.phone || "N/A"}</td>
                                      <td>{contact.message || "N/A"}</td>
                                      <td>{contact.service || "N/A"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            handleContactDelete(contact._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash-can" />
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="6" className="text-center">
                                      No Current Applications available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>

                          {/* Pagination */}
                          <div className="ltn__pagination-area text-center">
                            <ul className="pagination justify-content-center">
                              <li
                                className={`page-item ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-left" />
                                </button>
                              </li>
                              {Array.from(
                                { length: totalPages },
                                (_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${
                                      currentPage === index + 1 ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() =>
                                        handlePageChange(index + 1)
                                      }
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                )
                              )}
                              <li
                                className={`page-item ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                >
                                  <i className="fas fa-angle-double-right" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial details tab */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_10" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_9"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <h2 className="mb-3">Submit Testimonial</h2>

                            {/* Testimonial Form */}
                            <form onSubmit={submitTestimonial} className="mb-4">
                              <input
                                type="text"
                                placeholder="Name"
                                value={testimonialForm.name}
                                onChange={(e) =>
                                  setTestimonialForm({
                                    ...testimonialForm,
                                    name: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  setTestimonialForm({
                                    ...testimonialForm,
                                    image: e.target.files[0],
                                  })
                                }
                                required
                              />
                              <textarea
                                placeholder="Description"
                                value={testimonialForm.description}
                                onChange={(e) =>
                                  setTestimonialForm({
                                    ...testimonialForm,
                                    description: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Position"
                                value={testimonialForm.position}
                                onChange={(e) =>
                                  setTestimonialForm({
                                    ...testimonialForm,
                                    position: e.target.value,
                                  })
                                }
                                required
                              />
                              <button type="submit" disabled={loading}>
                                {loading
                                  ? "Submitting..."
                                  : "Submit Testimonial"}
                              </button>
                            </form>

                            {/* Testimonial Table */}
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Image</th>
                                  <th>Description</th>
                                  <th>Position</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {testimonials.length > 0 ? (
                                  testimonials.map((testimonial) => (
                                    <tr key={testimonial._id}>
                                      <td>{testimonial.name || "N/A"}</td>
                                      <td>
                                        <img
                                          src={`https://sqrft-website-backend.onrender.com${testimonial.image}`}
                                          alt={testimonial.name}
                                          width={50}
                                        />
                                      </td>
                                      <td>
                                        {testimonial.description || "N/A"}
                                      </td>
                                      <td>{testimonial.position || "N/A"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            deleteTestimonial(testimonial._id)
                                          }
                                          disabled={
                                            deleting === testimonial._id
                                          }
                                        >
                                          {deleting === testimonial._id ? (
                                            "Deleting..."
                                          ) : (
                                            <i className="fa-solid fa-trash-can" />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      No Testimonials Available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* TeamMember details tab */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_11" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_11"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <h2 className="mb-3">Add Team Members</h2>

                            {/* Team Member Form */}
                            <form
                              onSubmit={submitTeamMemberDetail}
                              className="mb-4"
                            >
                              <input
                                type="text"
                                placeholder="Name"
                                value={teamForm.name}
                                onChange={(e) =>
                                  setTeamForm({
                                    ...teamForm,
                                    name: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  setTeamForm({
                                    ...teamForm,
                                    image: e.target.files[0],
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Position"
                                value={teamForm.position}
                                onChange={(e) =>
                                  setTeamForm({
                                    ...teamForm,
                                    position: e.target.value,
                                  })
                                }
                                required
                              />
                              <button type="submit" disabled={loading}>
                                {loading
                                  ? "Submitting..."
                                  : "Submit Team Member Detail"}
                              </button>
                            </form>

                            {/* Team Member Table */}
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Image</th>
                                  <th>Position</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {teamMembers.length > 0 ? (
                                  teamMembers.map((teamMember) => (
                                    <tr key={teamMember._id}>
                                      <td>{teamMember.name || "N/A"}</td>
                                      <td>
                                        <img
                                          src={`https://sqrft-website-backend-ohqz.onrender.com${teamMember.image}`}
                                          alt={teamMember.name}
                                          width={50}
                                        />
                                      </td>
                                      <td>{teamMember.position || "N/A"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            deleteTeamMember(teamMember._id)
                                          }
                                          disabled={deleting === teamMember._id}
                                        >
                                          {deleting === teamMember._id ? (
                                            "Deleting..."
                                          ) : (
                                            <i className="fa-solid fa-trash-can" />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      No Team Members Details Available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Media tab */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_13" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_13"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <h2 className="mb-3">Add Media </h2>

                            {/* Media Form */}
                            <form onSubmit={submitMedia} className="mb-4">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  setMediaForm({
                                    ...mediaForm,
                                    image: e.target.files[0],
                                  })
                                }
                              />

                              <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit Media"}
                              </button>
                            </form>

                            {/* Media Table */}
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Image</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {media.length > 0 ? (
                                  media.map((med) => (
                                    <tr key={med._id}>
                                      <td>{med.name || "N/A"}</td>
                                      <td>
                                        <img
                                          src={`https://sqrft-website-backend-ohqz.onrender.com${med.image}`}
                                          alt={med.name}
                                          width={50}
                                        />
                                      </td>

                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() => deleteMedia(med._id)}
                                          disabled={deleting === med._id}
                                        >
                                          {deleting === med._id ? (
                                            "Deleting..."
                                          ) : (
                                            <i className="fa-solid fa-trash-can" />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      No Team Members Details Available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Blog details tab */}
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ltn_tab_1_12" ? "active show" : ""
                        }`}
                        id="ltn_tab_1_12"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <h2 className="mb-3">Add Blogs</h2>

                            {/* Blog Form */}
                            <form onSubmit={submitBlog} className="mb-4">
                              <input
                                type="text"
                                placeholder="Title"
                                value={blogForm.title}
                                onChange={(e) =>
                                  setBlogForm({
                                    ...blogForm,
                                    title: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Description"
                                value={blogForm.description}
                                onChange={(e) =>
                                  setBlogForm({
                                    ...blogForm,
                                    description: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Content"
                                value={blogForm.content}
                                onChange={(e) =>
                                  setBlogForm({
                                    ...blogForm,
                                    content: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  setBlogForm({
                                    ...blogForm,
                                    image: e.target.files[0],
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Written By"
                                value={blogForm.writtenBy}
                                onChange={(e) =>
                                  setBlogForm({
                                    ...blogForm,
                                    writtenBy: e.target.value,
                                  })
                                }
                                required
                              />
                              <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit Blog"}
                              </button>
                            </form>

                            {/* Blog Table */}
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Title</th>
                                  <th>Description</th>
                                  <th>Content</th>
                                  <th>Image</th>
                                  <th>Written By</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {blogs.length > 0 ? (
                                  blogs.map((blog) => (
                                    <tr key={blog._id}>
                                      <td>{blog.title || "N/A"}</td>
                                      <td>{blog.description || "N/A"}</td>
                                      <td>{blog.content || "N/A"}</td>
                                      <td>
                                        <img
                                          src={`https://sqrft-website-backend-ohqz.onrender.com${blog.image}`}
                                          alt={blog.title}
                                          width={50}
                                        />
                                      </td>
                                      <td>{blog.writtenBy || "N/A"}</td>
                                      <td>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() => deleteBlog(blog._id)}
                                          disabled={deleting === blog._id}
                                        >
                                          {deleting === blog._id ? (
                                            "Deleting..."
                                          ) : (
                                            <i className="fa-solid fa-trash-can" />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="5" className="text-center">
                                      No Blogs Details Available.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default MyAccount;
