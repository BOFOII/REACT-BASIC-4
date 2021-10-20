import React, { Component } from 'react';
import TableComponent from '../components/TableComponent';
import { connect } from 'react-redux';
import { clearAlert, deleteUserDetails, getUserList } from '../actions/UserAction';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserList());
    this.props.dispatch(deleteUserDetails());
    this.props.dispatch(clearAlert());
  }
  render() {
    return (
      <TableComponent/>
    )
  }
}

export default connect()(HomeContainer);
