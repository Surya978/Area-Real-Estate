import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
				<div className="container">
				<div className="row align-items-center">
					<div className='col-md-6'>
						<h2>Your trusted local partner in perth real estate</h2>
						<p className='mb-4'>We are Area Real Estate WA, your independent, locally-owned real estate agency in Perth. Our dedicated Licensee, Ankur Bhaseen, leads this great agency defined by our full-service, relationship-driven approach and our deep commitment to providing buyers and sellers with an exceptional and reposeful experience.</p>
						<p>At Area Real Estate, we believe that every client is unique, and we enthusiastically provide expert consulting to all individuals and families. We focus is on assisting in long-term planning to help our clients achieve their real estate goals.</p>
					</div>
					<div className='col-md-6'>
					<img src={publicUrl+"assets/img/others/about-1.png"} alt="About Us Image" />
					</div>
				</div>
				<div className="row align-items-center mt-200 about_acc">
				<div className='col-md-6'>
					<img src={publicUrl+"assets/img/others/about-2.png"} alt="About Us Image" />
					</div>
					<div className='col-md-6'>
						<h2>We specialise in the following key areas</h2>
						<div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
			          <div className="row">
			            <div className="col-lg-12">
			              <div id="accordion_2">
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="true">
			                    <img className='mr-1' src={publicUrl+"assets/img/icons/ac_1.png"}></img> Personalisation
			                  </h6>
			                  <div id="faq-item-2-1" className="collapse show" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>We are hardworking and committed to delivering the most professional, prompt, and efficient service in the marketplace. Our agents are highly skilled and knowledgeable, providing you with top-notch service and advice throughout the process.</p>
			                    </div>
			                  </div>
			                </div>
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
							  <img className='mr-1' src={publicUrl+"assets/img/icons/ac_2.png"}></img> Transparency
			                  </h6>
			                  <div id="faq-item-2-2" className="collapse show---" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>Our agency actively maintains the highest ethical standards and business practices. We diligently monitor local trends and market conditions to minimise stress and ensure you achieve the best outcome of the sales process. You can trust us to be honest, transparent, and dedicated to your needs.</p>
			                    </div>
			                  </div>
			                </div>                          
			                {/* card */}
			                <div className="card">
			                  <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
							  <img className='mr-1' src={publicUrl+"assets/img/icons/ac_3.png"}></img>  Communication
			                  </h6>
			                  <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
			                    <div className="card-body">
			                      <p>At Area Real Estate, we believe that success comes from listening. We listen to you to understand your requirements and establish a strategy to achieve your goals. We are proactive and are there for you when you need us, communicating with you throughout the process to ensure you are informed every step of the way.</p>
			                    </div>
			                  </div>
			                </div>
			              </div>                                
			            </div>
			          </div>
			        </div>
					</div>
				</div>
				<div className="row align-items-center mt-200 about_founder">
					<div className='col-md-6'>
						<h2>About the Founder</h2>
						<p className='mb-4'>Ankur Bhaseen is not your typical real estate agent—he's a dynamic leader who's passionate about helping his clients achieve their dreams. </p>
						<p className='mb-4'>As the Founder and Licensee of Area Real Estate WA, Ankur brings a wealth of experience and expertise to the table, having worked in the building and construction industry as a Project Supervisor for numerous projects across Perth. His deep understanding of the market, combined with his energetic, client-focused approach, has earned him his reputation of being one of the most trusted and respected agents in the real estate industry. Fluent in multiple languages, Ankur communicates effectively with clients from diverse backgrounds, and his commitment to building strong, lasting relationships is evident in every transaction he handles. </p>
						<p>When he's not working hard for his clients, Ankur can be found playing cricket or soccer, spending time with his family, or exploring the local community he loves. With Ankur at the helm, you can trust that your real estate goals are in good hands.</p>
					</div>
					<div className='col-md-6'>
					<img src={publicUrl+"assets/img/others/about_founder.png"} alt="About Us Image" />
					</div>
				</div>
				</div>
				
			</div>
        }
}

export default AboutV4