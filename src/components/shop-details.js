import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';
import Shopdetails from './shop-components/shop-details'

const Shop_Details = () => {
    return <div>
        <Navbar CustomClass="" /> 
        <ProductSlider />
        <Shopdetails />
        <CallToActionV2 />
        <Footer />
    </div>
}

export default Shop_Details

