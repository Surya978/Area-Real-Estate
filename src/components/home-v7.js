import React from 'react';
import Navbar from './global-components/navbar-v4';
import BannerV6 from './section-components/banner-v6';
import Aboutv2 from './section-components/about-v2';
import Awards from "./section-components/Awards";
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v4';
import Testimonial from './section-components/testimonial-v1';
import CallToActionV2 from './section-components/call-to-action-v2';
import CallToActionV3 from './section-components/call-to-action-v3';
import Footer from './global-components/footer';

const Home_V7 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent" /> 
        <BannerV6 />
        <Aboutv2 />
        <Awards />
        <ProSlider customClass="section-bg-2"/>
        <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <Testimonial />
        <CallToActionV3 />
        {/* <BlogSlider customClass="section-subtitle-2"/> */}
        <CallToActionV2 />
        <Footer />

    </div>
}

export default Home_V7

