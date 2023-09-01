import React, { Component } from 'react';
import axios from 'axios';
import Social from './social';

class ContactForm2 extends Component {

	constructor(props) {
		super(props);
		this.queryParameters = new URLSearchParams(window.location.search);
		this.state = {
			name: '',
			email: '',
			message: '',
			option: '', // Renamed from selectedOption
			address: '',
			phone: '',
			successMessage: '',
			errorMessage: '',
			inputValue: '', // Initialize inputValue in state
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
	
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	
	handleSubmit = (e) => {
		e.preventDefault();
	
		// Get the form data from the component state
		const { name, email, message, option, phone, address } = this.state;
		const { inputValue } = this.state;
		// Make the API request to send the email
		axios
			.get('/send-email', {
				params: {
					name,
					email,
					message,
					option,
					phone,
					address: inputValue,
				},
			})
			.then((response) => {
				console.log('Email sent successfully');
				this.setState({ successMessage: 'Thank you for contacting us. Our team will get in touch', errorMessage: '' });
			})
			.catch((error) => {
				console.error('Error sending email:', error);
				this.setState({ successMessage: '', errorMessage: 'Failed to send the email. Please try again later.' });
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

		const { name, email, message, option, phone, address, successMessage, errorMessage } = this.state;

		let publicUrl = process.env.PUBLIC_URL + '/'

		const { inputValue } = this.state; // Destructuring to access inputValue

		return <div className="ltn__contact-message-area mb-120">
			<div className="container">
				<div className='row'>
					<div className='col-md-12'>
						<div className='form_text_upper'>
							<p className='text-center contact-us_heading_text'>Located conveniently at Unit 2, 82 Hale rd Forrestfield WA 6058 offers tailored real estate service to those who live in the 3217 area.</p>
							<span className='text-center'>If you would like to book a sale or a rental appraisal, please click here.</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="ltn__form-box contact-form-box box-shadow white-bg">
							<form id="contact-form" onSubmit={this.handleSubmit}>
								<div className="row">
									<div className="col-md-6">
										<div className="input-item">
											<label for="name"><b>Full Name</b></label>
											<input type="text"
												id="name"
												name="name"
												value={name}
												onChange={this.handleChange}
												required placeholder="Enter your name" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="input-item">
											<label for="email"><b>Email</b></label>
											<input type="email"
												id="email"
												name="email"
												value={email}
												onChange={this.handleChange}
												required placeholder="Enter email address" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="input-item">
											<label htmlFor="option">
												<b>Choose an Option</b>
											</label>
											<div className='d-flex gap-5 radio_button'>
												<div className="radio-group">
													<input
														type="radio"
														id="buy"
														name="option"
														value="Buy"
														checked={option === 'Buy'}
														onChange={this.handleChange}
														required
													/>
													<label className='input-info-save' htmlFor="buy">Buy</label>
												</div>
												<div className="radio-group">
													<input
														type="radio"
														id="sale"
														name="option"
														value="Sale"
														checked={option === 'Sale'}
														onChange={this.handleChange}
														required
													/>
													<label className='input-info-save' htmlFor="sale">Sale</label>
												</div>
												<div className="radio-group">
													<input
														type="radio"
														id="rent"
														name="option"
														value="Rent"
														checked={option === 'Rent'}
														onChange={this.handleChange}
														required
													/>
													<label htmlFor="rent">Rent</label>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="input-item">
											<label for="phone"><b>Phone</b></label>
											<input type="text" name="phone" id="phone" 
											value={phone} 
											onChange={this.handleChange} 
											required 
											placeholder="Enter phone number" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="input-item ">
											<label for="address"><b>Address</b></label>
											<input type="text" 
											ref={this.inputRef} 
											name="address" id="address" 
											value={inputValue} 
											onChange={this.handleInputChange} 
											required placeholder="Enter Property Address" />
										</div>
									</div>
								</div>
								<div className="input-item">
									<label for="message"><b>Message</b></label>
									<textarea id="message"
										name="message"
										value={message}
										onChange={this.handleChange}
										required placeholder="Enter message" defaultValue={""} />
								</div>
								<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> I agree with Terms & Conditions</label></p>
								<div className="btn-wrapper mt-0">
									<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Contact Us</button>
								</div>
								<p className="form-messege mb-0 mt-20">{successMessage}</p>
									<p className="error-message mb-0 mt-20">{errorMessage}</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ContactForm2