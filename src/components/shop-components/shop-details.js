import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShopDetails = () => {
	const params = useParams();
	const id = params.id;

	const [propertyDetails, setPropertyDetails] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`https://sqrft-website-backend.onrender.com/api/form/view/${id}`);
				console.log("Data fetched successfully:", response.data.data);
				setPropertyDetails(response.data.data);
			} catch (err) {
				console.error("Error fetching data:", err); 
			}
		};

		fetchData();
	}, [id]);

	const [activeFloor, setActiveFloor] = useState("First Floor");
	let publicUrl = process.env.PUBLIC_URL + '/';

	return (
		<div className="ltn__shop-details-area pb-10">
			<div className="container">

				<div className="row">
					{/* Left Content */}
					<div className="col-lg-8 col-md-12">
						<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
							{/* Meta */}
							<div className="ltn__blog-meta">
								<ul>
									<li className="ltn__blog-date">
										<i className="far fa-calendar-alt" />
										{new Date(propertyDetails?.createdAt).toLocaleString()}
									</li>
								</ul>
							</div>
							{/* Title */}
							<h1>{propertyDetails?.title || "Loading..."}</h1>
							<label>
								<span className="ltn__secondary-color">
									<i className="flaticon-pin" />
								</span>{" "}
								{propertyDetails?.address || "Location not available"}
							</label>

							{/* Description */}
							<h4 className="title-2">Description</h4>
							{Array.isArray(propertyDetails?.description) ? (
								propertyDetails.description.map((text, idx) => <p key={idx}>{text}</p>)
							) : (
								<p>{propertyDetails?.description || "Description not available"}</p>
							)}

							{/* Property Detail */}
							<h4 className="title-2">Property Detail</h4>
							<div className="property-detail-info-list section-bg-1 clearfix mb-60">
							<ul>
								<li>
									<label>Area: </label>
									<span>{propertyDetails?.area}</span>
								</li>
								<li>
									<label>Rooms: </label>
									<span>{propertyDetails?.rooms}</span>
								</li>
								<li>
									<label>Baths: </label>
									<span>{propertyDetails?.baths}</span>
								</li>
								<li>
									<label>Year built: </label>
									<span>{propertyDetails?.yearBuilt}</span>
								</li>
							</ul>
							<ul>
								<li>
									<label>Lot dimensions: </label>
									<span>{propertyDetails?.lotDimensions}</span>
								</li>
								<li>
									<label>Price: </label>
									<span>{propertyDetails?.price}</span>
								</li>
								<li>
									<label>Property Status: </label>
									<span>{propertyDetails?.propertyStatus}</span>
								</li>
							</ul>
						</div>

							{/* Features */}
							<h4 className="title-2">Facts and Features</h4>
							<div className="property-detail-feature-list clearfix mb-45">
								<ul>
									{propertyDetails?.features?.[0]?.split(',').map((feature, idx) => (
										<li key={idx}>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>{feature.trim()}</h6>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>

							{/* Amenities */}
							<h4 className="title-2 mb-10">Amenities</h4>
							<div className="property-details-amenities mb-60">
								<div className="row">
									{propertyDetails?.amenities?.[0]?.split(',').map((amenity, idx) => (
										<div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
											<div className="ltn__menu-widget">
												<ul>
													<li>
														<label className="checkbox-item">
															{amenity.trim()}
															<input type="checkbox" defaultChecked={true} />
															<span className="checkmark" />
														</label>
													</li>
												</ul>
											</div>
										</div>
									))}
								</div>
							</div>

						</div>
					</div>

					{/* Sidebar */}
					<div className="col-lg-4">
						<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
							<div className="widget ltn__form-widget">
								<h4 className="ltn__widget-title ltn__widget-title-border-2">
									Drop Message For Book
								</h4>
								<form>
									<input type="text" placeholder="Your Name*" />
									<input type="email" placeholder="Your Email*" />
									<textarea placeholder="Write Message..." />
									<button type="submit" className="btn theme-btn-1">
										Send Message
									</button>
								</form>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopDetails;