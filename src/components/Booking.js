import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ContactForm from './section-components/contact-form';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom"

const Booking = () => {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)
    return <div>
          <Navbar CustomClass="color_black" /> 
        <PageHeader headertitle="Book an Appraisal" subheader="Contact" headerimg="assets/img/bg/booking.png"/>
        <ContactForm addressValue={queryParameters.get("address")}/>
        <CallToActionV2 />
        <Footer />
    </div>
}

export default Booking

