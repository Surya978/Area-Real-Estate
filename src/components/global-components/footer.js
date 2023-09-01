import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  plr--5">
				    <div className="container">
				      <div className="row">
				        <div className="col-xl-5 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" />
				              </div>
				            </div>
				            <p>A prominent real estate company based in Perth, Australia. Whether you're buying, selling, or renting properties, we specialize in providing comprehensive Real Estate solutions. </p>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
							<img src={publicUrl+"assets/img/others/house-sketch-footer 1.png"} alt="Logo" />
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Quick Links</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/">Home</Link></li>
				                <li><Link to="/about">About</Link></li>
				                <li><Link to="/team">Team</Link></li>
				                <li><Link to="/contact">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Properties</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/buy">Buy</Link></li>
				                <li><Link to="/rent">Rent</Link></li>
				                <li><Link to="/sold">Sold</Link></li>
				                <li><Link to="/sell">Sell</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Contact Us</h4>
				            <p>Monday - Friday <br/>‍9:00 AM - 5:00 PM <br/><br/>Saturday and after hrs<br/>By appointment <br/> <br/>Unit 2, 82 Hale rd Forrestfield WA 6058  <br/><br/> 08 9253 3456
							<br/> 0430294110 <br/>admin@area-rewa.com.au</p>
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