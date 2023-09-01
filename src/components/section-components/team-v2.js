import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-110--- pb-90 help">
				<div className="container">
					<div className='row image-first'>
					<div className='col-md-6 col-md-6'>
						<h2 className='mb-0 text-center mt-5'>Ankur Bhaseen</h2>
						<span className='mb-40 d-block text-center'>Director/Licensee</span>
						<p className='mb-4'>Ankur Bhaseen is not your typical real estate agent—he's a dynamic leader who's passionate about helping his clients achieve their dreams. </p>
						<p className='mb-4'>As the Founder and Licensee of Area Real Estate WA, Ankur brings a wealth of experience and expertise to the table, having worked in the building and construction industry as a Project Supervisor in numerous projects across Perth. His deep understanding of the market, combined with his energetic, client-focused approach, has earned him a reputation as one of the most trusted and respected agents in the real estate industry. Fluent in multiple languages, Ankur communicates effectively with clients from diverse backgrounds, and his commitment to building strong, lasting relationships is evident in every transaction he handles. </p>
						<p>When he's not working hard for his clients, Ankur can be found playing cricket or soccer, spending time with his family, or exploring the local community he loves. With Ankur at the helm, you can trust that your real estate goals are in good hands.</p>
						<span className="go-top"><Link to="#" className="btn btn-transparent btn-effect-1"><img className="mr-10" src={publicUrl+"assets/img/team/telephone.png"} />0430 294 110</Link></span>
					</div>
					
					
					<div className='col-md-6'>
					<img className="teams_founder" src={publicUrl+"assets/img/others/about_founder.png"} alt="About Us Image" />
					</div>
					</div>
					<div className='row'>
					<div className='col-md-6'>
					<img className="teams_founder" src={publicUrl+"assets/img/team/t-4.png"} alt="About Us Image" />
					</div>
					<div className='col-md-6 col-md-6'>
						<h2 className='mb-0 text-center mt-5'>Terry Granger</h2>
						<span className='mb-40 d-block text-center'>Real estate Consultant</span>
						<p className='mb-4'>Terry has been successfully selling local real estate since 1978. Arguably the longest-serving and most experienced agent servicing the City of Kalamunda&#39;s foothill suburbs of High Wycombe, Maida Vale &amp; Forrestfield areas. Having
recommenced his real estate career with Area Real Estate
WA after a couple of short breaks from the industry to
resolve some health issues( now sorted), Terry is again
thriving in this competitive and somewhat challenging
marketplace, with outstanding results for his clients.</p>
						<p className='mb-4'>&quot; Passion, persistence, perspiration &amp; skilled negotiation&quot;
coupled with loads of good old-fashioned communication
while guiding his clients through the listing, selling &amp;
buying processes. Terry Granger knows what needs to
happen to get the job done at the best available price and
in the shortest time possible. </p>
						<span className="go-top"><Link to="#" className="btn btn-transparent btn-effect-1"><img className="mr-10" src={publicUrl+"assets/img/team/telephone.png"} />043 995 0978</Link></span>
					</div>
					</div>
				</div>
			</div>
        }
}

export default TeamV2