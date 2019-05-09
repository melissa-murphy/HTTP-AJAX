import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default function Friend(props) {
  const deleteHandler = event => {
    event.preventDefault();
    props.deleteFriend(props.friend.target);
  };

  return (
    <>
      <Container>
        <Row className="friend text-left p-1">
          <Col>{props.friend.name}</Col>
          <Col>{props.friend.age}</Col>
          <Col>{props.friend.email}</Col>
          <Button
            size="sm"
            color="danger"
            onClick={event => deleteHandler(event)}
          >
            X
          </Button>
        </Row>
      </Container>
    </>
  );
}
