import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV1 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className="ltn__team-area pt-115 pb-90 go-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team Members</h6>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6">
						<div className="ltn__team-item ltn__team-item-3---">
							<div className="team-img">
								<img style={{ width: "89%", marginTop: "10px" }} src={publicUrl + "assets/img/team/4.png"} alt="Image" />
							</div>
							<div className="team-info">
								<h4>Abhay Pratap Singh</h4>
								<h6 className="ltn__secondary-color">Sales & Marketing</h6>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="ltn__team-item ltn__team-item-3---">
							<div className="team-img">
								<img style={{ width: "89%", marginTop: "10px" }} src={publicUrl + "assets/img/team/2.png"} alt="Image" />
							</div>
							<div className="team-info">
								<h4>Jeewan Pant</h4>
								<h6 className="ltn__secondary-color">Operations & Marketing</h6>

							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="ltn__team-item ltn__team-item-3---">
							<div className="team-img">
								<img style={{ width: "89%", marginTop: "10px" }} src={publicUrl + "assets/img/team/5.png"} alt="Image" />
							</div>
							<div className="team-info">
								<h4>Rohit Trivedi</h4>
								<h6 className="ltn__secondary-color">Sales & Liaisoning</h6>

							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="ltn__team-item ltn__team-item-3---">
							<div className="team-img">
								<img style={{ width: "89%", marginTop: "10px" }} src={publicUrl + "assets/img/team/6.png"} alt="Image" />
							</div>
							<div className="team-info">
								<h4>Ashish Pandey</h4>
								<h6 className="ltn__secondary-color">HR Finance & Liaisoning</h6>

							</div>
						</div>
					</div>

				</div>

				<div className="row justify-content-center mt-10">
					<h4>Here are our Plus Points</h4>
					<p>What makes us the best real estate partner company in Noida? The focus on proficiency and commitment is what would make it one of the excellent options  in the long run. We simply pay a lot of essence on the customer satisfaction as our prime goal.
						You would be in for one of the best possible properties ever because of the utmost care that we take on conducting the legal verification of your property. We make it a point to assess the real value of the property and make it a hassle free deals for the buyers.
						We, the SQRFT is known for partnering with the builders indulged in developing the residential and commercial properties that tend to be quite great in all respects. The premium projects that we offer you would provide you access to a few of the finest living standards and that should make us one of the best developers in the region.</p>
					<h4>We use the latest technologies</h4>
					<p>The reliance on the latest technologies makes us stand apart from the rest. We believe working in the present and that is what makes us a force to reckon with. The cutting edge technology that we have always been focussing on should further make it a great experience.</p>
					<h4>We believe in moving ahead</h4>
					<p>The fact that we focus on moving ahead is what makes us a favourable choice among the real estate partner service providers in Noida and surrounding areas. We create a place quite close to nature and that would make us one of the best options ever.
						Yet another prime feature that we excel in is the safety provided for the investors.</p>
					<h4>Our Vision and Mission</h4>
					<p>As one of the serious and prominent real estate channel partners, we have been striving ahead to achieve success. Being associated with more than 500 people so far, our vision remains to equip everyone with the affordable home in tune with the investment capability of the investor. HAR BANDE KO APNA HI GHAR is what we dream in and will continue to strive to achieve the goal. Real Estate scenario has long been marred by the controversies of severe nature, especially in metros and bigger cities. Our vision is to introduce professionalism in every sort of real estate development so that every one dreaming of his or her own home will not leave us unsatisfied or dejected.</p>
					<img style={{ width: "85%", marginTop: "10px"}} src={publicUrl + "assets/img/team/10.png"} alt="Image" />
				</div>

			</div>
		</div>
	}
}

export default TeamV1