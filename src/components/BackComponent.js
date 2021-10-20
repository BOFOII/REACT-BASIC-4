import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const BackComponent = () => {
  return (
    <Row>
      <Col>
        <Link to="/">
          <Button color="dark">Back</Button>
        </Link>
      </Col>
    </Row>
  )
}

export default BackComponent;
