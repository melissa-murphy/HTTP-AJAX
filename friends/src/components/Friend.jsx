import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Friend = props => {
  return (
    <>
      <Container>
        <Row className="friend text-left p-1">
          <Col>{props.friend.name}</Col>
          <Col>{props.friend.age}</Col>
          <Col>{props.friend.email}</Col>
          <Button size="sm" color="danger">x</Button>
        </Row>
      </Container>
    </>
  );
};

export default Friend;
