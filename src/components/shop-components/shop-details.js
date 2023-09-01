import React, { Component } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import Nodata from '../global-components/nodata'
import Relatedproduct from '../section-components/product-slider-v4'

class ShopDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  product: null,
		  error: null
		};
	  }
	  

	  componentDidMount() {
		const { match } = this.props;
		const sysid = match.params.id;
		console.log(sysid , "line");
		window.scrollTo(0, 0);
	
		fetch('https://area-rewa.com.au/token')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
		console.log(data.listinglist.length);
        let product = null;
		console.log(data.listinglist, "line 29")
        // Iterate through the outer data array
		for (let i = 0; i < data.listinglist.length; i++) {
			const item = data.listinglist[i];
			console.log(item.sysid, "line 37")
			if (item.sysid == sysid) {
			  product = item;
			  console.log(product, "line 40")
			  break; // Stop iteration if product is found
			}
		  }
		  
        if (product) {
          this.setState({ product });
		  console.log(product, "line 46")
        } else {
          throw new Error('Product not found');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
	

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
		
	const { product, error } = this.state;
	
    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!product) {
      return <div>Loading...</div>;
    }
	// const latitude = product.promo.latitude; // Replace with your API latitude value
	// const longitude = -73.97198251485975; // Replace with your API longitude value

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							</li>
				
						</ul>
						</div>
						<h1>{product.promo.headline}</h1>
						<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> {product.address._showaddress}</label>
						<h4>AUD {product.price.first}</h4>
						<h4 className="title-2">Description</h4>
						<p>{product.promo.advert}</p>
						<h4 className="title-2">Property Detail</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Property ID:</label> <span>{product.sysid}</span></li>
							<li><label>Home Area: </label> <span>{product.landarea}</span></li>
							<li><label>Rooms:</label> <span>{product.residential.bedroooms}</span></li>
							<li><label>Baths:</label> <span>{product.residential.bathrooms}</span></li>
						</ul>
						</div>
						{/* <h4 className="title-2">Facts and Features</h4>
						<div className="property-detail-feature-list clearfix mb-45">                            
						<ul>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Living Room</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garage</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Dining Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bedroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bathroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Gym Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garden</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Parking</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
						</ul>
						</div>
						<h4 className="title-2 mb-10">Amenities</h4>
						<div className="property-details-amenities mb-60">
						<div className="row">
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Air Conditioning
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Gym
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Microwave
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Swimming Pool
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">WiFi
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Barbeque
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Recreation
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Microwave
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Basketball Cout
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Fireplace
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Refrigerator
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Window Coverings
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Washer
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">24x7 Security
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Indoor Game
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
						</div>
						</div> */}
						<h4 className="title-2">Location</h4>
						<div className="property-details-google-map mb-60">
						{/* <iframe title="Google Map"  width="100%" height="450" frameBorder="0" style={{ border: 0 }} src={mapUrl} allowFullScreen ></iframe> */}
						{/* ${product.promo.longitude}!3d${product.promo.latitude} */}
						{/* <p>{`https://maps.google.com/maps?q=${product.promo.longitude},${product.promo.latitude}&hl=es&z=14&amp;output=embed`}
						<br/>
							{`https://maps.google.com/maps?q=${product.promo.longitude},${product.promo.latitude}&hl=es;z=14&amp;output=embed`}</p> */}
						<iframe title="Google Map" width="100%" height="450" frameBorder="0" style={{ border: 0 }} src={`https://maps.google.com/maps?q=${product.promo.latitude},${product.promo.longitude}&z=15&output=embed`} allowFullScreen ></iframe>
						</div>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area floor_plan product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a>
							</div>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>First Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Second Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Third Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_4">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Top Garden</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
						{/* APARTMENTS PLAN AREA END */}
						{/* <h4 className="title-2">Property Video</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
						</a>
						</div> */}
						<h4 className="title-2">Related Properties</h4>
						<div className="row">
						{/* ltn__product-item */}
						{/* <div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Rent</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Bedrooms
								</li>
								<li><span>2 </span>
									Bathrooms
								</li>
								<li><span>3450 </span>
									square Ft
								</li>
								</ul>
								<div className="product-hover-action">
								<ul>
									<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
										<i className="flaticon-expand" />
									</a>
									</li>
									<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
										<i className="flaticon-heart-1" /></a>
									</li>
									<li>
									<Link to="/shop" title="Compare">
										<i className="flaticon-add" />
									</Link>
									</li>
								</ul>
								</div>
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>$349,00<label>/Month</label></span>
								</div>
							</div>
							</div>
						</div> */}
						{/* ltn__product-item */}
						{/* <div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Sale</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Bedrooms
								</li>
								<li><span>2 </span>
									Bathrooms
								</li>
								<li><span>3450 </span>
									square Ft
								</li>
								</ul>
								<div className="product-hover-action">
								<ul>
									<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
										<i className="flaticon-expand" />
									</a>
									</li>
									<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
										<i className="flaticon-heart-1" /></a>
									</li>
									<li>
									<a href="portfolio-details.html" title="Compare">
										<i className="flaticon-add" />
									</a>
									</li>
								</ul>
								</div>
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>$349,00<label>/Month</label></span>
								</div>
							</div>
							</div>
							
						</div> */}

						<Relatedproduct customClass="related_product" />

						</div>
					</div>
					</div>
					{/* <div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						<div className="widget ltn__author-widget">
						<div className="ltn__author-widget-inner text-center">
							<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
							<h5>Rosalina D. Willaimson</h5>
							<small>Traveller/Photographer</small>
							<div className="product-ratting">
							<ul>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star" /></a></li>
								<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
								<li><a href="#"><i className="far fa-star" /></a></li>
								<li className="review-total"> <a href="#"> ( 1 Reviews )</a></li>
							</ul>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
							<div className="ltn__social-media">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
								<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
							</ul>
							</div>
						</div>
						</div>
					</aside>
					</div> */}
				</div>
				</div>
			</div>
        }
}

export default withRouter (ShopDetails);