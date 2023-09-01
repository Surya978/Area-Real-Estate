import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import TeamV1 from './section-components/team-v2';
import CallToActionV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const Team_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Meet the Team" headerimg="assets/img/bg/team.png"/>
        <TeamV1 />
        <CallToActionV2 />
        <Footer />
    </div>
}

export default Team_V1

