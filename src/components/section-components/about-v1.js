import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV1 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pt-120 pb-90 ">
			<div className="container">

				<div
					className="row"
					style={{ display: "flex", justifyContent: "center", gap: "50px" }}
				>
					<div class="col-lg-4 self-center ml-8 mt-4">
						<div class="relative overflow-hidden mx-auto max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg">
							<img src={publicUrl + "assets/img/others/7.png"} alt="About Us Image" class="rounded-lg w-full" />
						</div>
					</div>

					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap ">
							<div className="section-title-area ltn__section-title-2--- mb-20">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
								<h1 className="section-title">The Leading Real Estate Marketplace<span>.</span></h1>
								<p className='font-weight:500' style={{ fontWeight: 'bold' }}>Collective Industry Experience: 50+ years</p>
							</div>
							<ul className="ltn__list-item-half clearfix" style={{marginTop: "0 px"}}>
								<li>
									<i className="flaticon-home-2" />
									Total Clients Served : 1000+
								</li>
								<li>
									<i className="flaticon-mountain" />
									Growth for Investors: 70%+ in 4-5 years
								</li>
								<li>
									<i className="flaticon-heart" />
									Associated Agents and Associates: 100+
								</li>
								<li>
									<i className="flaticon-secure" />
									Complete 24/7 Security
								</li>
							</ul>

							<div className="btn-wrapper animated go-top">
								<Link to="/service" className="theme-btn-1 btn btn-effect-1">Know More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default AboutV1