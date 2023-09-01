import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Disclamer extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
			<div className="container">
				<div className="row align-items-center mt-200 about_founder">
					<div className='col-md-12'>
						<h2>Disclaimer</h2>
						<p className='mb-4'>The information provided on this site relating to all properties has been furnished to us by the vendor/s. We are not liable whether that information is accurate and do not have any belief in one way or the other in its accuracy. We do no more than pass it on and hence, do not accept any responsibility to any person for its accuracy. All interested parties should make and rely upon their own inquiries to determine whether this information is in fact accurate.</p>

						<p className='mb-4'>Our company (including its owners, employees, and agents) are not bound by any warranty, representation, collateral agreement, or implied terms under the general law or imposed by legislation in relation to goods, services and other offers advertised on or purchased through our website.</p>

						<p className='mb-4'>All the information is provided in good faith. However, we make no representation or warranty of any kind express or implied, regarding the advertisement, sale or use of goods, services of other offers advertised on or purchased on the site.</p>

						<p className='mb-4'>Our company accepts advertisements for the sale of goods, services and other offers on a no-charge basis and is not involved with any transactions in relation to the advertised goods, services, or other offers. If our company advertises your goods or services for sale, it does so only on the condition that you agree to indemnify from all liabilities or claims of liability that may arise from the sale of or subsequent use of those goods, services, or other offers. If you purchase any goods or service through our company, you agree that you will not seek any remedy for any default in the item or for any damages that flow from the purchase of the item or service for any other purpose.</p>

						<p className='mb-4'>We reserve the right to amend the policy at any given time. If you would like to keep yourself up to date with the latest amendments, we suggest you to frequently visit the website.</p>

					</div>
				</div>
			</div>

		</div>
	}
}

export default Disclamer