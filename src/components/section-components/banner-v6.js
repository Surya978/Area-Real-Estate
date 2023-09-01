import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from "../section-components/contact-form";

class BannerV6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "" // Initialize inputValue in state
		};
		this.autoCompleteRef = React.createRef();
		this.inputRef = React.createRef();
		this.options = {
			componentRestrictions: { country: ["au", "nz"] },
			fields: ["address_components", "geometry", "icon", "name"],
			types: ["establishment"],
		};
	}

	componentDidMount() {
		this.autoCompleteRef.current = new window.google.maps.places.Autocomplete(
			this.inputRef.current,
			this.options
		);

		this.autoCompleteRef.current.addListener("place_changed", this.handlePlaceChanged);
	}

	handlePlaceChanged = () => {
		const selectedValue = this.inputRef.current.value;
		this.setState({ inputValue: selectedValue }, () => {
			console.log(selectedValue); // Log the selected value to the console
		});
	};

	handleGetEstimate = () => {
		const { inputValue } = this.state; // Destructuring to access inputValue
		// Use Link component to navigate to /Booking route passing the input value as a parameter
		// You can access the inputValue in the target component using location.search or a router parameter
		// Example: /Booking?address=value or /Booking/:address
		// Replace "address" with the appropriate parameter name you want to use
		// Note: Ensure that the target component is rendered within a Router component (e.g., BrowserRouter)
	};

	handleInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';
		const { inputValue } = this.state; // Destructuring to access inputValue

		return (
			<div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
					<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- banner_bg_image bg-overlay-theme-black-30" data-bs-bg={publicUrl + "assets/img/slider/41.jpg"}>
						<div className="ltn__slide-item-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-7 align-self-start">
										<div className="slide-item-car-dealer-form">
											<div className="section-title-area ltn__section-title-2">
												<h1 className="section-title text-color-white">Determine the current market value of your property</h1>
											</div>
											<div className="ltn__car-dealer-form-tab">
												<div className="tab-content">
													<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
														<div className="car-dealer-form-inner">
															<form className="ltn__car-dealer-form-box row">
																<div className="ltn__car-dealer-form-item col-lg-12 col-md-12">
																	<div className='row'>
																		<div className='col-md-12'>
																			{/* Search Widget */}
																			<div className="ltn__search-widget">
																				<input type='text'
																					ref={this.inputRef}
																					value={inputValue}
																					onChange={this.handleInputChange}
																				/>
																				<Link to={`/Booking?address=${inputValue}`}>Get an Estimate</Link>
																			</div>
																		</div>
																	</div>
																</div>
															</form>
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
	}
}

export default BannerV6;
