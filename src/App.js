import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer';
import AddUserContainer from './pages/AddUserContainer';
import EditUserContainer from './pages/EditUserContainer';
import DetailUserContainer from './pages/DetailUserContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Router>
					<NavbarComponent />
					<JumbotronComponent />
					<Route path="/" exact component={HomeContainer} />
					<Route path="/create" exact component={AddUserContainer} />
					<Route path="/edit/:id" exact component={EditUserContainer} />
					<Route path="/details/:id" exact component={DetailUserContainer} />
				</Router>
			</div>
		);
	}
}

export default App;
