import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Game from '../Game/Game';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

import {
	ROUTE_HOME,
	ROUTE_GAME,
	ROUTE_PROFILE
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		access: state.setUserAccess.access,
		route: state.setRoute.route
	};
}

class App extends Component {

	renderRouteComponent = () => {
		const { access, route } = this.props;

		switch(route) {
			case ROUTE_HOME:
				return <Home />;
			case ROUTE_GAME:
				return <Game />;
			case ROUTE_PROFILE:
				return <Profile access={access}/>;
			default:
				return <Home />;
		}
	}

  render() {
    return (
      <div className="App">
        <Navigation />
				{this.renderRouteComponent()}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);