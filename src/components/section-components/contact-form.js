import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			option: '',
			addressValue: '',
			phone: '',
			successMessage: '',
			errorMessage: '',
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		// Get the form data from the component state
		const { name, email, option, phone } = this.state;
		const { addressValue } = this.props;

		// Make the API request to send the email
		axios
			.get('/send-email', {
				params: {
					name,
					email,
					option,
					phone,
					address: addressValue,
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

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';
		const { name, email, option, phone, successMessage, errorMessage } = this.state;
		const { addressValue } = this.props;

		return (
			<div className="ltn__contact-message-area mb-120">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="ltn__form-box contact-form-box box-shadow white-bg">
								<form id="contact-form" onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-md-12">
											<div className="input-item">
												<label htmlFor="name"><b>Name</b></label>
												<input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={this.handleChange} required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-item">
												<label htmlFor="email"><b>Email</b></label>
												<input type="email" name="email" id="email" placeholder="Enter email address" value={email} onChange={this.handleChange} required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="input-item">
												<label htmlFor="phone"><b>Mobile Number</b></label>
												<input type="text" name="phone" id="phone" placeholder="Enter phone number" value={phone} onChange={this.handleChange} />
											</div>
										</div>
										<div className="col-md-12">
											<div className="input-item">
												<label htmlFor="address"><b>Address</b></label>
												<input
													type="text"
													name="addressValue"
													id="address"
													value={addressValue}
													onChange={this.handleChange}
													placeholder="Enter Property Address"
												/>
											</div>
										</div>
										<div className="col-md-12 d-flex gap-5 radio_button">
											<div className="radio-group d-flex gap-1">
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
											<div className="radio-group d-flex gap-1">
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
										</div>
									</div>
									<p>
										<label className="input-info-save mb-0">
											<input type="checkbox" name="agree" className='mr-1' />
											I agree with{' '}
											<Link to="/privacy-policy" className="text-underline">
												Terms & Conditions
											</Link>
										</label>
										{/* Add closing tag for <p> element */}
									</p>
									<div className="btn-wrapper mt-0">
										<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
											Get in Touch
										</button>
									</div>
									<p className="form-messege mb-0 mt-20">{successMessage}</p>
									<p className="error-message mb-0 mt-20">{errorMessage}</p>
									{/* Add closing tag for <p> element */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;
