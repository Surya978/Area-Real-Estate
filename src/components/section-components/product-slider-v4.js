import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Nodata from '../global-components/nodata';
import ShogGrid from '../shop-components/homeproduct';

class ProductSliderV4 extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  data: null,
		};
	  }
	  componentDidMount() {
		this.fetchData();
	  }
	  fetchData = async () => {
		try {
		  const response = await fetch('https://area-rewa.com.au/token'); // Replace with your API endpoint
		  const jsonData = await response.json();
		  const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData]; // Convert to array if necessary
		  this.setState({ data: dataArray }); // Update the state with the fetched data
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
	  

    render() {

		let publicUrl = process.env.PUBLIC_URL+'/'
		let customClass = this.props.customClass ? this.props.customClass :''

		const { data } = this.state;

    if (!data || !Array.isArray(data)) {
      return <Nodata/>;
    }

    return <div className=''>
			<div className={customClass + " ltn__product-slider-area ltn__product-gutter pt-115 pb-70"}>
				<div className="container">
					<div className="row title_hide">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center mb-20">
							<h1 className="section-title">Browse the latest listings of top properties in the area</h1>
							</div>
						</div>
					</div>
					<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			          <div className="nav">
			            <a data-bs-toggle="tab" href="#liton_tab_3_1">Sold</a>
			            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_3" >For Sale</a>
			          </div>
			        </div>
					<div className="tab-content">
			          <div className="tab-pane fade" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">
						  	<ShogGrid filter="Settled"/>
			              </div>
			            </div>
						<div className="btn-wrapper mt-0 go-top d-flex">
							<Link to="/Sold" className="btn theme-btn-1 btn-effect-1 text-uppercase">See all listing</Link>
							</div>
			          </div>
			          <div className="tab-pane fade active show" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
						  <ShogGrid filter="Listed" customhide="remove_home "/>
			              </div>
			            </div>
						<div className="btn-wrapper mt-0 go-top d-flex">
							<Link to="/buy" className="btn theme-btn-1 btn-effect-1 text-uppercase">See all listing</Link>
							</div>
			          </div>
			        </div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/7.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5><Link to="">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
									<div className="btn-wrapper">
									<Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
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
			</div>

			<div className="ltn__modal-area ltn__quick-view-modal-area">
				<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
					<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
							{/* <i class="fas fa-times"></i> */}
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-lg-6 col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/4.png"} alt="#" />
								</div>
								</div>
								<div className="col-lg-6 col-12">
								<div className="modal-product-info">
									<div className="product-ratting">
									<ul>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
										<li><a href="#"><i className="far fa-star" /></a></li>
										<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
									</ul>
									</div>
									<h3>Brake Conversion Kit</h3>
									<div className="product-price">
									<span>$149.00</span>
									<del>$165.00</del>
									</div>
									<div className="modal-product-meta ltn__product-details-menu-1">
									<ul>
										<li>
										<strong>Categories:</strong> 
										<span className="go-top">
											<Link to="/blog">Parts</Link>
											<Link to="/blog">Car</Link>
											<Link to="/blog">Seat</Link>
											<Link to="/blog">Cover</Link>
										</span>
										</li>
									</ul>
									</div>
									<div className="ltn__product-details-menu-2">
									<ul>
										<li>
										<div className="cart-plus-minus">
											<input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
										</div>
										</li>
										<li>
										<a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
											<i className="fas fa-shopping-cart" />
											<span>ADD TO CART</span>
										</a>
										</li>
									</ul>
									</div>
									<hr />
									<div className="ltn__social-media">
									<ul>
										<li>Share:</li>
										<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
										<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
										<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
										<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
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
			</div>

			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/1.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5 className="go-top"><Link to="">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />Successfully added to your Cart</p>
									<div className="btn-wrapper">
									<Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
									<Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
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
			</div>
   		</div>
        }
}

export default ProductSliderV4