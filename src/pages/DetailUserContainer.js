import React, { Component } from 'react'
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';
import { connect } from 'react-redux';
import { getUserDetail } from '../actions/UserAction';
import UserdetailsComponent from '../components/UserdetailsComponent';

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>User details</h1>
        <UserdetailsComponent />
      </Container>
    )
  }
}

export default connect()(DetailUserContainer);
