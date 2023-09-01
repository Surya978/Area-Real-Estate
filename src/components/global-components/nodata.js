import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class nodata extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<div className="ltn__nodata">
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='nodata_box'>
								<h1 className='nodata_text'>Sorry currently there is no property for sell.</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
        )
    }
}


export default nodata