import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
				<div className='row mb-5'>
					<div className='col-md-7'>
						<h1 className="section-title">Delivering exceptional service, one client at a time</h1>
					</div>
					<div className='col-md-5'>
					<div className="btn-wrapper go-top text-right cta-button"><a className="btn btn-effect-3 btn-white text-right" href="https://www.ratemyagent.com.au/real-estate-agent/ankur-bhaseen-ec792/sales/overview">See us on rate my agent </a></div>
					</div>
				</div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
					<div className='col-lg-12'>
						<div className="RMA-widget" data-widget-instance-id="2552" data-widget-api-url="https://widgets.ratemyagent.com"> 
							<a href="https://ratemyagent.com.au/real-estate-agency/area-real-estate-wa-bh798/sales/overview"> 
								<img src="https://static.ratemyagent.com.au/assets/images/widgets/rma-duo-logo.png" width="164" height="40" />
								<span>Reviews</span>
							</a>
						</div>
					</div>
			      {/* <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
					  <img src={publicUrl+"assets/img/testimonial/testimonial_1.png"} alt="#" />
			            <p className='ltn__testimoni-info-text'>
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}
				  
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial