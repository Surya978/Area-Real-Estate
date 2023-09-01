import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToActonV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div>
		<div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120 mb-120 desktop" data-bs-bg={publicUrl+"assets/img/bg/6.jpg"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-4 text-center">
						<div className="section-title-area ltn__section-title-2">
						<h1 className="section-title white-color">Hold the key to every <span>real estate opportunity in Perth</span></h1>
						</div>
						<p className='font_white'>Whether you're a first-time homebuyer, seasoned investor, or seeking expert advice, We give you the support and resources to reach your goals.</p>
						<div className="btn-wrapper">
						<a href="tel:+0430294110" className="theme-btn-1 btn btn-effect-1">Call 0430294110</a>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			<div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120 mb-120 mobile" data-bs-bg={publicUrl+"assets/img/bg/mobile_cta.png"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-4 text-center">
						<div className="section-title-area ltn__section-title-2">
						<h1 className="section-title white-color">Hold the key to every <span>real estate opportunity in Perth</span></h1>
						</div>
						<p className='font_white'>Whether you're a first-time homebuyer, seasoned investor, or seeking expert advice, We give you the support and resources to reach your goals.</p>
						<div className="btn-wrapper">
						<a href="tel:+123456789" className="theme-btn-1 btn btn-effect-1">Get in Touch</a>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
	</div>
        }
}

export default CallToActonV3