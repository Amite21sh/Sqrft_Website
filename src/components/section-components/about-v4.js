import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
			<div className="container">
				<div className="row">

					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">
							<div className="section-title-area ltn__section-title-2--- mb-20">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Core Features</h6>
								<h3 className="section-title">
									Dream Living Space Setting New Standards<span>.</span>
								</h3>
							</div>
							<div className="row">
								{/* Card 1 */}
								<div className="col-md-12 mb-4">
									<div className="card p-4 shadow-sm d-flex flex-row align-items-center">
										<div className="icon me-3">
											<i className="flaticon-home-2 fs-1 text-danger" />
										</div>
										<div>
											<h6 className="fw-bold mb-1">Expertise and Experience</h6>
											<p className="mb-0">
												With over 50 years of collective industry experience, we possess in-depth knowledge and insights to guide you through the real estate market.
											</p>
										</div>
									</div>
								</div>

								{/* Card 2 */}
								<div className="col-md-12 mb-4">
									<div className="card p-4 shadow-sm d-flex flex-row align-items-center">
										<div className="icon me-3">
											<i className="flaticon-mountain fs-1 text-danger" />
										</div>
										<div>
											<h6 className="fw-bold mb-1">Trust and Transparency</h6>
											<p className="mb-0">
												We believe in open and honest communication, ensuring transparency at every step of the real estate transaction process.
											</p>
										</div>
									</div>
								</div>

								{/* Card 3 */}
								<div className="col-md-12">
									<div className="card p-4 shadow-sm d-flex flex-row align-items-center">
										<div className="icon me-3">
											<i className="flaticon-heart fs-1 text-danger" />
										</div>
										<div>
											<h6 className="fw-bold mb-1">Impressive Growth Potential</h6>
											<p className="mb-0">
												Our track record of providing investors with a growth rate of 70%+ over 4-5 years demonstrates our dedication to delivering profitable opportunities.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="col-lg-5 align-self-center mt-3">
						<div className="about-us-img-wrap about-img-left">
							<img src={publicUrl + "assets/img/others/13.jpg"} alt="About Us Image" />
							<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	}
}

export default AboutV4