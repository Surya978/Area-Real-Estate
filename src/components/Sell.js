import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-grid-v1';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';


const Sell = () => {
    return <div>
       <Navbar CustomClass="" /> 
        <PageHeader headertitle="Properties for Sale" headerimg="assets/img/bg/sell.png"/>
        <ShogGrid filter="Settled"/>
        <CallToActionV2 />
        <Footer />
    </div>
}

export default Sell