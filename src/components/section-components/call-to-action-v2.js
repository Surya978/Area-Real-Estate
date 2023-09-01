import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToActonV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area ltn__call-to-action-4 pt-115 pb-120 ">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-4 text-center">
						<div className="section-title-area ltn__section-title-2">
						<h1 className="section-title">Here at Area Real Estate we are, by nature, an optimistic bunch.</h1>
						</div>
						<p>Discover your slice of paradise in Perth's real estate market with the help of our industry experts. From beachside villas to suburban family homes, benefit from insights and make the right choice.</p>
						<div className="btn-wrapper d-flex">
						<span className="go-top"><Link to="/team" className="btn theme-btn-1 btn btn-effect-1 go-top">Meet Our Team</Link></span>
						<span className="go-top"><Link to="/about" className="btn btn-transparent btn-effect-3 go-top">Learn About us</Link></span>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default CallToActonV2