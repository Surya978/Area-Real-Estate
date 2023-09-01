import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-120 pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 col-md-6 align-self-start">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-40">
			            <h1 className="section-title">Meet the real experts of real estate in your area</h1>
			            <p>At Area Real Estate, we're more than just a real estate agency - we're your partner working towards your property goals. As an independent, locally-owned agency, we're committed to providing a personalised, full-service, and relationship-driven approach to our clients.</p>
						<p className='mt-50'>Led by our dedicated Licensee, Ankur Bhaseen, we're passionate about providing exceptional experiences for buyers and sellers alike. That's why we enthusiastically offer our consulting services to all individuals and families, helping them make informed decisions to achieve their long-term real estate objectives</p>
			          </div>
					  <div className="btn-wrapper mt-0 go-top">
							<Link to="/about" className="btn theme-btn-1 btn-effect-1 text-uppercase">Read More</Link>
					  </div>
			        </div>
			      </div>
			      <div className="col-lg-6 col-md-6 align-self-center">
			        <div className="about-us-img-wrap about-img-right">
			          <img src={publicUrl+"assets/img/others/9.png"} alt="About Us Image" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV2