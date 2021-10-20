import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent></BackComponent>
      </Container>
    )
  }
}

export default EditUserContainer;
