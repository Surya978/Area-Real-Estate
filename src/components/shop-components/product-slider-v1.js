import React, { Component } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import { Carousel } from 'react-carousel-minimal';

class ProductSliderV1 extends Component {
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
		console.log(sysid , "line")
	
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
			if (item.sysid == sysid) {
			  product = item;
			  console.log(product)
			  break; // Stop iteration if product is found
			}
		  }
		  
        if (product) {
          this.setState({ product });
        } else {
          throw new Error('Product not found');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

    render() {
		const { product, error } = this.state;
		if (error) {
			return <div>Error: {error}</div>;
		  }
	  
		  if (!product) {
			return <div>Loading...</div>;
		  };
		//   {product.photos[0].url}
		  const data = product.photos.map(photo => ({
			image: photo.url,
		  }));
	  
		  const captionStyle = {
			fontSize: '2em',
			fontWeight: 'bold',
		  };
	  
		  const slideNumberStyle = {
			fontSize: '20px',
			fontWeight: 'bold',
		  };

		  let publicUrl = process.env.PUBLIC_URL+'/'

        
    return <div className="ltn__img-slider-area mb-90" id="top">
				<div className="container">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all slider_height">
					{/* <div className="col-lg-9">
					<div className="ltn__img-slide-item-4">
						<a href={product.photos[0].url} data-rel="lightcase:myCollection">
						<img src={product.photos[0].url} alt="Image" />
						</a>
					</div>
					</div>
					<div className='col-lg-2 offset-md-1'>
						<div className="ltn__img-slide-item-4">
							<a href={product.photos[1].url} data-rel="lightcase:myCollection">
							<img src={product.photos[1].url} alt="Image" />
							</a>
						</div>
						<div className="ltn__img-slide-item-4">
							<a href={product.photos[2].url} data-rel="lightcase:myCollection">
							<img src={product.photos[2].url} alt="Image" />
							</a>
						</div>
						<div className="ltn__img-slide-item-4">
						<a href={product.photos[3].url} data-rel="lightcase:myCollection">
						<img src={product.photos[3].url} alt="Image" />
						</a>
						</div>
						<div className="ltn__img-slide-item-4">
						<a href={product.photos[4].url} data-rel="lightcase:myCollection">
						<img src={product.photos[4].url} alt="Image" />
						</a>
						</div>
					</div> */}


		<div style={{ textAlign: "center" }}>
          <div style={{ padding: "0 20px" }}>
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="500px"
              captionStyle={captionStyle}
              radius="0"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="white"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "",
              }}
            />
          </div>
        </div>





				</div>
				<div className='row mt-4'>
					<div className='col-md-6'></div>
						<div className='col-md-6'> <div className="btn-wrapper mt-0 go-top d-flex justify-content-end">
							<Link to="/contact" className="btn theme-btn-1 btn-effect-1 text-uppercase">Enquire Now</Link>
					  </div></div>
					</div>
				</div>
			</div>
        }
}

export default withRouter (ProductSliderV1)