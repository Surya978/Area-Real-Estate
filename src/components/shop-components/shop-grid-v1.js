import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Nodata from '../global-components/nodata'

class ShopGridV1 extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			filter : this.props.filter, 
		};
	}
	componentDidMount() {
		this.fetchData();
		window.scrollTo(0, 0);
	}
	fetchData = async () => {
		try {
			const response = await fetch('https://area-rewa.com.au/token'); // Replace with your API endpoint
			const jsonData = await response.json();
			const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData]; // Convert to array if necessary
			let filteredData = dataArray[0].listinglist.filter((data) => {
				console.log(data, "23")
				return data.details.status == this.state.filter

			})
			this.setState({ data: filteredData }); // Update the state with the fetched data

		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};


	render() {
		let customhide = this.props.customhide ? this.props.customhide :''
		let publicUrl = process.env.PUBLIC_URL + '/'
		const { data } = this.state;

		if (!data || !Array.isArray(data)) {
			return <Nodata />;
		}
		if (data.length == 0) {
			return <Nodata />;
		}
		
		return <div>
			<div className={customhide + "ltn__product-area ltn__product-gutter mb-100"}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ltn__shop-options">
								<ul>
									{/* <li>
										<div className="ltn__grid-list-tab-menu ">
											<div className="nav">
												<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
												<a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
											</div>
										</div>
									</li> */}
									<li>
										<div className="short-by text-center">
											<select className="nice-select">
												<option>Default sorting</option>
												<option>Sort by popularity</option>
												<option>Sort by new arrivals</option>
												<option>Sort by price: low to high</option>
												<option>Sort by price: high to low</option>
											</select>
										</div>
									</li>
									{/* <li>
										<div className="showing-product-number text-right">
											<span>Showing 9 of 20 results</span>
										</div>
									</li> */}
								</ul>
							</div>
							<div className="tab-content ">
								<div className="tab-pane fade active show" id="liton_product_grid">
									<div className="ltn__product-tab-content-inner ltn__product-grid-view">
										<div className="row">
											<div className="col-lg-12">
												{/* Search Widget */}
												<div className="ltn__search-widget mb-30">
													<form action="#">
														<input type="text" name="search" placeholder="Search your keyword..." />
														<button type="submit"><i className="fas fa-search" /></button>
													</form>
												</div>
											</div>
											<div className='row'>
												{data.map((innerItem) => (
													<div key={innerItem.id} className="col-lg-4 col-sm-6 col-12">
														<div>
															<Link to={`/shop-details/${innerItem.sysid}/#top`}>
																<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
																	<div className="product-img">
																		{innerItem.photos.length > 0 && <img src={innerItem.photos[0].url} alt="#" />}
																	</div>
																	<div className="product-info">
															
																		<h2 className="product-title go-top"><Link to={`/shop-details/${innerItem.sysid}`}>{innerItem.promo.headline}</Link></h2>
																		<div className="product-img-location">
																			<ul>
																				<li className="go-top">
																					<Link to={`/shop-details/${innerItem.sysid}`}><i className="flaticon-pin" /> {innerItem.address._showaddress}</Link>
																				</li>
																			</ul>
																		</div>
																		<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																			<li><span>{innerItem.residential.bedroooms} </span>
																				Bedrooms
																			</li>
																			<li><span>{innerItem.residential.bathrooms} </span>
																				Bathrooms
																			</li>
																			<li><span>{JSON.stringify(innerItem.areas.landarea.from)} </span>
																				square Ft
																			</li>
																		</ul>
																		{/* <div className="product-hover-action">
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
												<span className="go-top">
												<Link to="" title="Product Details">
													<i className="flaticon-add" />
												</Link>
												</span>
												</li>
											</ul>
											</div> */}
																	</div>
																	<div className="product-info-bottom">
																		<div className="product-price">
																			<span>$ {JSON.stringify(innerItem.price.from)}</span>
																		</div>
																	</div>
																</div>
															</Link>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liton_product_list">
									<div className="ltn__product-tab-content-inner ltn__product-list-view">
										<div className="row">
											<div className="col-lg-12">
												{/* Search Widget */}
												<div className="ltn__search-widget mb-30">
													<form action="#">
														<input type="text" name="search" placeholder="Search your keyword..." />
														<button type="submit"><i className="fas fa-search" /></button>
													</form>
												</div>
											</div>
											{/* ltn__product-item */}
											<div className="col-lg-12">
												<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
													<div className="product-img">
														<Link to=""><img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" /></Link>
													</div>
													<div className="product-info">
														<div className="product-badge-price">
															<div className="product-badge">
																<ul>
																	<li className="sale-badg">For Rent</li>
																</ul>
															</div>
															<div className="product-price">
																<span>$34,900<label>/Month</label></span>
															</div>
														</div>
														<h2 className="product-title go-top"><Link to="">New Apartment Nice View</Link></h2>
														<div className="product-img-location">
															<ul>
																<li className="go-top">
																	<Link to=""><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
													</div>
													<div className="product-info-bottom">
														<div className="real-estate-agent">
															<div className="agent-img">
																<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
															</div>
															<div className="agent-brief go-top">
																<h6><Link to="/team-details">William Seklo</Link></h6>
																<small>Estate Agents</small>
															</div>
														</div>
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
																	<span className="go-top">
																		<Link to="" title="Product Details">
																			<i className="flaticon-add" />
																		</Link>
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											{/* ltn__product-item */}
											<div className="col-lg-12">
												<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
													<div className="product-img">
														<Link to=""><img src={publicUrl + "assets/img/product-3/2.jpg"} alt="#" /></Link>
													</div>
													<div className="product-info">
														<div className="product-badge-price">
															<div className="product-badge">
																<ul>
																	<li className="sale-badg">For Rent</li>
																</ul>
															</div>
															<div className="product-price">
																<span>$34,900<label>/Month</label></span>
															</div>
														</div>
														<h2 className="product-title go-top"><Link to="">New Apartment Nice View</Link></h2>
														<div className="product-img-location">
															<ul>
																<li className="go-top">
																	<Link to=""><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
													</div>
													<div className="product-info-bottom">
														<div className="real-estate-agent">
															<div className="agent-img">
																<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
															</div>
															<div className="agent-brief go-top">
																<h6><Link to="/team-details">William Seklo</Link></h6>
																<small>Estate Agents</small>
															</div>
														</div>
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
																	<span className="go-top">
																		<Link to="" title="Product Details">
																			<i className="flaticon-add" />
																		</Link>
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											{/* ltn__product-item */}
											<div className="col-lg-12">
												<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
													<div className="product-img">
														<Link to=""><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
													</div>
													<div className="product-info">
														<div className="product-badge-price">
															<div className="product-badge">
																<ul>
																	<li className="sale-badg">For Rent</li>
																</ul>
															</div>
															<div className="product-price">
																<span>$34,900<label>/Month</label></span>
															</div>
														</div>
														<h2 className="product-title go-top"><Link to="">New Apartment Nice View</Link></h2>
														<div className="product-img-location">
															<ul>
																<li className="go-top">
																	<Link to=""><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
													</div>
													<div className="product-info-bottom">
														<div className="real-estate-agent">
															<div className="agent-img">
																<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
															</div>
															<div className="agent-brief go-top">
																<h6><Link to="/team-details">William Seklo</Link></h6>
																<small>Estate Agents</small>
															</div>
														</div>
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
																	<span className="go-top">
																		<Link to="" title="Product Details">
																			<i className="flaticon-add" />
																		</Link>
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											{/* ltn__product-item */}
											<div className="col-lg-12">
												<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
													<div className="product-img">
														<Link to=""><img src={publicUrl + "assets/img/product-3/4.jpg"} alt="#" /></Link>
													</div>
													<div className="product-info">
														<div className="product-badge-price">
															<div className="product-badge">
																<ul>
																	<li className="sale-badg">For Rent</li>
																</ul>
															</div>
															<div className="product-price">
																<span>$34,900<label>/Month</label></span>
															</div>
														</div>
														<h2 className="product-title go-top"><Link to="">New Apartment Nice View</Link></h2>
														<div className="product-img-location">
															<ul>
																<li className="go-top">
																	<Link to=""><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
													</div>
													<div className="product-info-bottom">
														<div className="real-estate-agent">
															<div className="agent-img">
																<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
															</div>
															<div className="agent-brief go-top">
																<h6><Link to="/team-details">William Seklo</Link></h6>
																<small>Estate Agents</small>
															</div>
														</div>
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
																	<span className="go-top">
																		<Link to="" title="Product Details">
																			<i className="flaticon-add" />
																		</Link>
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											{/* ltn__product-item */}
											<div className="col-lg-12">
												<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
													<div className="product-img">
														<Link to=""><img src={publicUrl + "assets/img/product-3/5.jpg"} alt="#" /></Link>
													</div>
													<div className="product-info">
														<div className="product-badge-price">
															<div className="product-badge">
																<ul>
																	<li className="sale-badg">For Rent</li>
																</ul>
															</div>
															<div className="product-price">
																<span>$34,900<label>/Month</label></span>
															</div>
														</div>
														<h2 className="product-title go-top"><Link to="">New Apartment Nice View</Link></h2>
														<div className="product-img-location">
															<ul>
																<li className="go-top">
																	<Link to=""><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
													</div>
													<div className="product-info-bottom">
														<div className="real-estate-agent">
															<div className="agent-img">
																<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
															</div>
															<div className="agent-brief go-top">
																<h6><Link to="/team-details">William Seklo</Link></h6>
																<small>Estate Agents</small>
															</div>
														</div>
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
																	<span className="go-top">
																		<Link to="" title="Product Details">
																			<i className="flaticon-add" />
																		</Link>
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											{/*  */}
										</div>
									</div>
								</div>
							</div>
							{/* <div className="ltn__pagination-area text-center">
								<div className="ltn__pagination">
									<ul>
										<li><a href="#"><i className="fas fa-angle-double-left" /></a></li>
										<li><a href="#">1</a></li>
										<li className="active"><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">...</a></li>
										<li><a href="#">10</a></li>
										<li><a href="#"><i className="fas fa-angle-double-right" /></a></li>
									</ul>
								</div>
							</div> */}
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
													<img src={publicUrl + "assets/img/product/7.png"} alt="#" />
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
														<img src={publicUrl + "assets/img/icons/payment.png"} alt="#" />
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
													<img src={publicUrl + "assets/img/product/4.png"} alt="#" />
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
													<img src={publicUrl + "assets/img/product/1.png"} alt="#" />
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
														<img src={publicUrl + "assets/img/icons/payment.png"} alt="#" />
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

export default ShopGridV1