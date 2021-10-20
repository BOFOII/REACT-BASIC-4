import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';

class AddUserContainer extends Component {
	render() {
		return (
			<Container>
				<BackComponent />
				<FormComponent />
			</Container>
		);
	}
}

export default AddUserContainer;
