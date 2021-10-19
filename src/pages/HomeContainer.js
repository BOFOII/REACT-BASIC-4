import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TableComponent from '../components/TableComponent';

class HomeContainer extends Component {
  render() {
    return (
      <TableComponent users={ this.props.users }/>
    )
  }
}

export default HomeContainer;
