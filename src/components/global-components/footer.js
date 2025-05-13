import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-2 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-5 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-about-widget">
									<div className="footer-logo">
										<div className="site-logo">
											<img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" />
										</div>
									</div>
									<p>We focus on the urban dwelling places and you would find us offering you one of the exciting experiences in choosing a perfect dwelling place. The iconic and exciting places that we offer you should make us stand apart from the rest.</p>


								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Useful Links</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/about">About</Link></li>
											<li><Link to="/blog-grid">Services</Link></li>
											<li><Link to="/shop">Prperties</Link></li>
											<li><Link to="/contact">Contact us</Link></li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-xl-2 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<div className="footer-menu go-top">
										<div className="footer-address">
											<ul>
												<li>
													<div className="footer-address-icon">
														<i className="icon-placeholder" />
													</div>
													<div className="footer-address-info">
														<p>D-215, D Block, Sector 63, Noida, Uttar Pradesh 201301</p>
													</div>
												</li>
												<li>
													<div className="footer-address-icon">
														<i className="icon-call" />
													</div>
													<div className="footer-address-info">
														<p><a href="tel:+91-870-0341968">+91-870-0341968</a></p>
													</div>
												</li>
												<li>
													<div className="footer-address-icon">
														<i className="icon-mail" />
													</div>
													<div className="footer-address-info">
														<p><a href="mailto:info@sqrftinfratech.com">info@sqrftinfratech.com</a></p>
													</div>
												</li>
											</ul>
										</div>
										<div className="ltn__social-media mt-20">
											<Social />
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<Copyright />
			</footer>
		)
	}
}


export default Footer_v1