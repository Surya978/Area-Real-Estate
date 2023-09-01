import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul className='d-flex'>
				<li><a href="https://www.facebook.com/ankurbhaseenraywhite" title="Facebook"><img src={publicUrl+"assets/img/social/facebook.png"}></img></a></li>
				<li><a href="https://www.instagram.com/ankur.bhaseen/" title="Instagram"><img src={publicUrl+"assets/img/social/instagram.png"}></img></a></li>
				<li><a href="https://twitter.com/ankurbhaseen" title="twitter"><img src={publicUrl+"assets/img/social/twitter.png"}></img></a></li>
				<li><a href="https://www.youtube.com/channel/UCUqCgfnVFKcNApXKhFYAdTA" title="youtube"><img src={publicUrl+"assets/img/social/youtube.png"}></img></a></li>
				<li><a href="https://www.linkedin.com/in/ankur-bhaseen-29a591174/" title="linkedin"><img src={publicUrl+"assets/img/social/linkedin.png"}></img></a></li>
				<li><a href="https://www.tiktok.com/@ankur.bhaseen?_t=8dhVaoIS9p4&_r=1" title="tiktok"><img src={publicUrl+"assets/img/social/tiktok.png"}></img></a></li>
			</ul>
		</div>
        }
}

export default Social