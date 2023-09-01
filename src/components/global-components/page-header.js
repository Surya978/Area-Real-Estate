import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
		let CustomClass = this.props.customclass ? this.props.customclass : ''
        let Img = this.props.Img ? this.props.Img :'14.jpg'
		let headerimg = this.props.headerimg;

        return (

		<div className={"ltn__breadcrumb-area text-left bg-image"} data-bs-bg={publicUrl+headerimg}>
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ HeaderTitle }</h1>
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }
}


export default Page_header