import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us" headerimg="assets/img/bg/about.png" />
        <AboutV4 />
        <CallToActionV2 />
        <Footer />
    </div>
}

export default About_v1

