import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Awards extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area award_Section pt-120 pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12 align-self-center">
			        <div className="awards-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-30">
			            <h2 className="section-title">Celebrate excellence's best and standout agents</h2>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-12 align-self-center">
			        <div className="awards-img-wrap Awards-img-right d-flex justify-content-center gap-12">
                      <img src={publicUrl+"assets/img/others/awards_3.png"} alt="Awards Image" />
					  <img src={publicUrl+"assets/img/others/awards_4.jpeg"} alt="Awards Image" />
					  <img src={publicUrl+"assets/img/others/awards_5.png"} alt="Awards Image" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Awards