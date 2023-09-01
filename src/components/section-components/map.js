import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map">
			<div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.960377723363!2d116.00572680865409!3d-31.989089548124067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bf355253d2a7%3A0x686007e09e93319d!2sArea%20Real%20Estate%20WA!5e0!3m2!1sen!2sin!4v1687688037888!5m2!1sen!2sin" width="100%" height="500px" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
                </div>
            </div>
            </div>
		</div>
        }
}

export default Map