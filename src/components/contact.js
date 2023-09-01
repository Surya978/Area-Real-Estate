import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm2 from './section-components/contact-form_2';
import Map from './section-components/map';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us" subheader="Contact" headerimg="assets/img/bg/contact.png" />
        {/* <ContactInfo /> */}
        <ContactForm2 />
        <Map />
        <CallToActionV2 />
        <Footer />
    </div>
}

export default ContactV1

