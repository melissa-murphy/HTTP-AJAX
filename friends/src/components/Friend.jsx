import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Friend = props => {
  return (
    <>
      <Container>
        <Row className="friend text-left">
          <Col>{props.friend.name}</Col>
          <Col>{props.friend.age}</Col>
          <Col>{props.friend.email}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Friend;
