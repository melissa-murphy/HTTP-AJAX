import React from 'react';
import { Container } from 'reactstrap';

import Friend from './Friend';

const FriendList = props => {
  console.log(props.friends.id);
  return (
    <>
      <Container className="friend-list">
        {props.friends.map(friend => (
          <Friend className="friend-info" friend={friend} key={friend.id} />
        ))}
      </Container>
    </>
  );
};

export default FriendList;
