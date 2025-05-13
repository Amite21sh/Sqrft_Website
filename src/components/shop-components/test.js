import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const propertyDetails = {
	title: "Diamond Manor Apartment",
	location: "Belmont Gardens, Chicago",
	description: [
	  "Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec.",
	  "To the left is the modern kitchen with central island, leading through to the unique breakfast family room."
	],
	details: [
	  { label: "Area", value: "120 sqft" },
	  { label: "Rooms", value: "7" },
	  { label: "Baths", value: "2" },
	  { label: "Year built", value: "1992" },
	  { label: "Lot dimensions", value: "120 sqft" },
	  { label: "Price", value: "$2 Million" },
	  { label: "Property Status", value: "For Sale" }
	],
	features: [
	  { name: "Living Room", size: "20 x 16 sq feet" },
	  { name: "Garage", size: "20 x 16 sq feet" },
	  { name: "Dining Area", size: "20 x 16 sq feet" },
	  { name: "Bedroom", size: "20 x 16 sq feet" },
	  { name: "Bathroom", size: "20 x 16 sq feet" },
	  { name: "Gym Area", size: "20 x 16 sq feet" },
	  { name: "Garden", size: "20 x 16 sq feet" },
	  { name: "Parking", size: "20 x 16 sq feet" }
	],
	amenities: [
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
	  "Indoor Game"
	],
	reviews: [
	  {
		name: "Adam Smith",
		date: "September 3, 2020",
		rating: 4.5,
		comment: "Great property with modern amenities and perfect location."
	  },
	  {
		name: "Jane Doe",
		date: "September 2, 2020",
		rating: 4,
		comment: "Beautiful apartment, but could use more parking space."
	  }
	],
	floorPlans: [
	  { floor: "First Floor", description: "Spacious first floor with a living room and kitchen." },
	  { floor: "Second Floor", description: "Second floor has bedrooms and bathrooms." },
	  { floor: "Third Floor", description: "Third floor offers extra space for offices or study rooms." },
	  { floor: "Top Garden", description: "The top garden area is ideal for relaxation." }
	]
  };

const ShopDetails = () => {
	

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__shop-details-area pb-10">
			<div className="container">

				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
							<div className="ltn__blog-meta">
								<ul>
									<li className="ltn__blog-date">
										<i className="far fa-calendar-alt" />May 19, 2021
									</li>
								</ul>
							</div>
							
							<h1>Diamond Manor Apartment</h1>
							<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> Belmont Gardens, Chicago</label>
							<h4 className="title-2">Description</h4>
							<p>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec
								Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
								quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas
								sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee
								iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
							<p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p>
							<h4 className="title-2">Property Detail</h4>

							<div className="property-detail-info-list section-bg-1 clearfix mb-60">
								<ul>

									<li><label>Area: </label> <span>120 sqft</span></li>
									<li><label>Rooms:</label> <span>7</span></li>
									<li><label>Baths:</label> <span>2</span></li>
									<li><label>Year built:</label> <span>1992</span></li>
								</ul>
								<ul>

									<li><label>Lot dimensions:</label> <span>120 sqft</span></li>

									<li><label>Price:</label> <span>2</span></li>
									<li><label>Property Status:</label> <span>For Sale</span></li>
								</ul>
							</div>

							<h4 className="title-2">Facts and Features</h4>
							<div className="property-detail-feature-list clearfix mb-45">
								<ul>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Living Room</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Garage</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Dining Area</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Bedroom</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Bathroom</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Gym Area</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Garden</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<i className="flaticon-double-bed" />
											<div>
												<h6>Parking</h6>
												<small>20 x 16 sq feet</small>
											</div>
										</div>
									</li>
								</ul>
							</div>
							
							<h4 className="title-2">From Our Gallery</h4>

							<div className="ltn__property-details-gallery mb-30">
								<div className="row">
									<div className="col-md-6">
										<a href={publicUrl + "assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/others/14.jpg"} alt="Image" />
										</a>
										<a href={publicUrl + "assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/others/15.jpg"} alt="Image" />
										</a>
									</div>
									<div className="col-md-6">
										<a href={publicUrl + "assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/others/16.jpg"} alt="Image" />
										</a>
									</div>
								</div>
							</div>

							<h4 className="title-2 mb-10">Amenities</h4>

							<div className="property-details-amenities mb-60">
								<div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="ltn__menu-widget">
											<ul>
												<li>
													<label className="checkbox-item">Air Conditioning
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Gym
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Microwave
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Swimming Pool
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">WiFi
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="ltn__menu-widget">
											<ul>
												<li>
													<label className="checkbox-item">Barbeque
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Recreation
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Microwave
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Basketball Cout
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Fireplace
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="ltn__menu-widget">
											<ul>
												<li>
													<label className="checkbox-item">Refrigerator
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Window Coverings
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Washer
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">24x7 Security
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
												<li>
													<label className="checkbox-item">Indoor Game
														<input type="checkbox" defaultChecked="checked" />
														<span className="checkmark" />
													</label>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<h4 className="title-2">Location</h4>
							<div className="property-details-google-map mb-60">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
							</div>

							<h4 className="title-2">Floor Plans</h4>
							{/* APARTMENTS PLAN AREA START */}

							<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
								<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
									<div className="nav">
										<a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a>
										<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
										<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
										<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a>
									</div>
								</div>
								<div className="tab-content">
									<div className="tab-pane fade" id="liton_tab_3_1">
										<div className="ltn__apartments-tab-content-inner">
											<div className="row">
												<div className="col-lg-7">
													<div className="apartments-plan-img">
														<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
													</div>
												</div>
												<div className="col-lg-5">
													<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
														<h2>First Floor</h2>
														<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
															Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
															eiusmod tempor.Incididunt labore et dolore magna aliqua.
															sed ayd minim veniam.</p>
													</div>
												</div>
												
											</div>
										</div>
									</div>
									<div className="tab-pane fade active show" id="liton_tab_3_2">
										<div className="ltn__product-tab-content-inner">
											<div className="row">
												<div className="col-lg-7">
													<div className="apartments-plan-img">
														<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
													</div>
												</div>
												<div className="col-lg-5">
													<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
														<h2>Second Floor</h2>
														<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
															Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
															eiusmod tempor.Incididunt labore et dolore magna aliqua.
															sed ayd minim veniam.</p>
													</div>
												</div>
												
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="liton_tab_3_3">
										<div className="ltn__product-tab-content-inner">
											<div className="row">
												<div className="col-lg-7">
													<div className="apartments-plan-img">
														<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
													</div>
												</div>
												<div className="col-lg-5">
													<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
														<h2>Third Floor</h2>
														<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
															Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
															eiusmod tempor.Incididunt labore et dolore magna aliqua.
															sed ayd minim veniam.</p>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="product-details-apartments-info-list  section-bg-1">
														<div className="row">
															<div className="col-lg-6">
																<div className="apartments-info-list apartments-info-list-color mt-40---">
																	<ul>
																		<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
																		<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
																	</ul>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="apartments-info-list apartments-info-list-color mt-40---">
																	<ul>
																		<li><label>Belcony/Pets</label> <span>Allowed</span></li>
																		<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="liton_tab_3_4">
										<div className="ltn__product-tab-content-inner">
											<div className="row">
												<div className="col-lg-7">
													<div className="apartments-plan-img">
														<img src={publicUrl + "assets/img/others/10.png"} alt="#" />
													</div>
												</div>
												<div className="col-lg-5">
													<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
														<h2>Top Garden</h2>
														<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
															Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
															eiusmod tempor.Incididunt labore et dolore magna aliqua.
															sed ayd minim veniam.</p>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="product-details-apartments-info-list  section-bg-1">
														<div className="row">
															<div className="col-lg-6">
																<div className="apartments-info-list apartments-info-list-color mt-40---">
																	<ul>
																		<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
																		<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
																	</ul>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="apartments-info-list apartments-info-list-color mt-40---">
																	<ul>
																		<li><label>Belcony/Pets</label> <span>Allowed</span></li>
																		<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
																	</ul>
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

							{/* APARTMENTS PLAN AREA END */}
							<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
								<h4 className="title-2">Customer Reviews</h4>
								
								<hr />
								{/* comment-area */}
								<div className="ltn__comment-area mb-30">
									<div className="ltn__comment-inner">
										<ul>
											<li>
												<div className="ltn__comment-item clearfix">
													<div className="ltn__commenter-img">
														<img src={publicUrl + "assets/img/testimonial/1.jpg"} alt="Image" />
													</div>
													<div className="ltn__commenter-comment">
														<h6><a href="#">Adam Smit</a></h6>
														
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
														<span className="ltn__comment-reply-btn">September 3, 2020</span>
													</div>
												</div>
											</li>

											<li>
												<div className="ltn__comment-item clearfix">
													<div className="ltn__commenter-img">
														<img src={publicUrl + "assets/img/testimonial/2.jpg"} alt="Image" />
													</div>
													<div className="ltn__commenter-comment">
														<h6><a href="#">Adam Smit</a></h6>
														<div className="product-ratting">
															<ul>
																<li><a href="#"><i className="fas fa-star" /></a></li>
																<li><a href="#"><i className="fas fa-star" /></a></li>
																<li><a href="#"><i className="fas fa-star" /></a></li>
																<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
																<li><a href="#"><i className="far fa-star" /></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
														<span className="ltn__comment-reply-btn">September 2, 2020</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								{/* comment-reply */}
								<div className="ltn__comment-reply-area ltn__form-box mb-30">
									<form action="#">
										<h4>Add a Review</h4>
										<div className="mb-30">
											<div className="add-a-review">
												<h6>Your Ratings:</h6>
												<div className="product-ratting">
													<ul>
														<li><a href="#"><i className="fas fa-star" /></a></li>
														<li><a href="#"><i className="fas fa-star" /></a></li>
														<li><a href="#"><i className="fas fa-star" /></a></li>
														<li><a href="#"><i className="fas fa-star" /></a></li>
														<li><a href="#"><i className="fas fa-star" /></a></li>
													</ul>
												</div>
											</div>
										</div>

										<div className="input-item input-item-name ltn__custom-icon">
											<input type="text" placeholder="Type your name...." />
										</div>
										<div className="input-item input-item-email ltn__custom-icon">
											<input type="email" placeholder="Type your email...." />
										</div>

										<div className="input-item input-item-textarea ltn__custom-icon">
											<textarea placeholder="Type your comments...." defaultValue={""} />
										</div>

										<label className="mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
										<div className="btn-wrapper">
											<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Post Comment</button>
										</div>
									</form>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-4">
						<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
							{/* Form Widget */}
							<div className="widget ltn__form-widget">
								<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
								<form action="#">
									<input type="text" name="yourname" placeholder="Your Name*" />
									<input type="text" name="youremail" placeholder="Your e-Mail*" />
									<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
									<button type="submit" className="btn theme-btn-1">Send Messege</button>
								</form>
							</div>

							{/* Banner Widget */}
							<div className="widget ltn__banner-widget d-none go-top">
								<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" /></Link>
							</div>
						</aside>
					</div>

				</div>
			</div>
		</div>
	}

export default ShopDetails