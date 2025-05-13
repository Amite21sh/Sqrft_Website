import React, { Component } from 'react';

class WhyChooseUs extends Component {
	render() {
		const publicUrl = process.env.PUBLIC_URL + '/';

		// JSON Data for feature items
		const features = [
			{
				iconClass: "flaticon-house-4",
				title: "RERA Approved Projects",
				description: "Your needs and goals are at the forefront of our services, and we work tirelessly to exceed your expectations."
			},
			{
				iconClass: "icon-mechanic",
				title: "Profitability for Clients",
				description: "We strive to deliver real estate solutions that generate profitable returns for our clients, ensuring their investment objectives are met.",
			},
			{
				iconClass: "icon-repair-1",
				title: "Exit for Clients",
				description: "We believe in open and honest communication, ensuring profitable exits at every step of the real estate transaction process.",
			},
			{
				iconClass: "icon-repair-1",
				title: "Technology Enabled",
				description: "We leverage cutting-edge technology to enhance our services, offering clients a seamless and efficient real estate experience.",
			},
			{
				iconClass: "flaticon-house-4",
				title: "Home Selling",
				description: "We will help our Clients To provide a good amount for their Property.",
			},
			{
				iconClass: "icon-repair-1",
				title: "Escrow Services",
				description: "We Will Help Our Clients Full Paper and Money Transfer Security.",
			}
		];

		return (
			<div className="ltn__feature-area pb-90">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h3 className="section-title">Our Core USP</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
							</div>
						</div>
					</div>

					<div className="row justify-content-center">
						{features.map((feature, index) => (
							<div
								key={index}
								className="col-xl-4 col-sm-6 col-12"
								style={{
									display: "flex",
									justifyContent: "center",
									marginBottom: "20px", // Add spacing between rows
								}}
							>
								<div
									className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white"
									style={{
										height: "320px", // Set the fixed height for all cards
										width: "100%", // Ensure the width matches the container
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "space-between",
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add some styling
										padding: "20px",
										backgroundColor: "white",
										textAlign: "center",
									}}
								>
									<div
										className="ltn__feature-icon"
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											height: "100px", // Fixed height for icon area
										}}
									>
										<span>
											<i className={feature.iconClass} style={{ fontSize: '55px', color: "black" }} />
										</span>
									</div>
									<div
										className="ltn__feature-icon-title"
										style={{
											height: "60px", // Fixed height for title area
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<h3 style={{ color: "black" }}>
											{feature.link ? (
												<a href={feature.link}>{feature.title}</a>
											) : (
												feature.title
											)}
										</h3>
									</div>
									<div
										className="ltn__feature-info"
										style={{
											height: "80px", // Fixed height for description area
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<p style={{ color: "black" }}>{feature.description}</p>
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

export default WhyChooseUs;
