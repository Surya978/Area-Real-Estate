import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-grid-v1';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';


const Buy = () => {
    return <div>
       <Navbar CustomClass="" /> 
        <PageHeader headertitle="Properties Sold" headerimg="assets/img/bg/sold.png"/>
        <ShogGrid filter="Settled"/>
        <CallToActionV2 />
        <Footer />
    </div>
}

export default Buy