import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row mb-5">
		      <div className="col-lg-7">
				<h2>Get the inside scoop on the latest market trends in Perth, Australia</h2>
		      </div>
			  <div className='col-lg-5'>
			  <div className="btn-wrapper go-top text-right cta-button"><a className="btn btn-effect-3 btn-white text-right" href="#/contact"><b>More from our blogs</b></a></div>
			  </div>
		    </div>
		    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Market and Local Wrap-up – March 2023</Link></h3>
					<p>What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More</p>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Market and Local Wrap-up – March 2023</Link></h3>
					<p>What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More</p>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Market and Local Wrap-up – March 2023</Link></h3>
					<p>What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More</p>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/4.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
				  <h3 className="ltn__blog-title"><Link to="/blog-details">Market and Local Wrap-up – March 2023</Link></h3>
					<p>What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More</p>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/5.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
				  <h3 className="ltn__blog-title"><Link to="/blog-details">Market and Local Wrap-up – March 2023</Link></h3>
					<p>What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More</p>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/*  */}
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSlider;
