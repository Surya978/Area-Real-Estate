import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV7 from './components/home-v7';
import About from './components/about';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import Contact from './components/contact';
import Buy from './components/Buy';
import Sold from './components/Sold';
import Rent from './components/Rent';
import Booking from './components/Booking';
import Disclaimer from './components/Disclaimer';
import PrivacyPolicy from './components/Privacy-Policy';
import BuyPage from './components/BuyPage';
import ShopDetails from './components/shop-details';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV7} />
                        <Route path="/about" component={About} />
                        <Route path="/team" component={ Team } />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/faq" component={ Faq } />
                        <Route path="/shop" component={ Shop } />
                        <Route path="/shop-details/:id" component={ ShopDetails } />
                        <Route path="/shop-grid" component={ ShopGrid } />
                        <Route path="/buy" component={ Buy } />
                        <Route path="/Sell" component={ Booking } />
                        <Route path="/Rent" component={ Rent } />
                        <Route path="/Sold" component={ Sold } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/BuyPage" component={ BuyPage } />
                        <Route path="/Booking" component={ Booking } />
                        <Route path="/Disclaimer" component={ Disclaimer } />
                        <Route path="/privacy-policy" component={ PrivacyPolicy } />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}
export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
