import React from 'react';
import Friend from './Friend';

const FriendCard = props => {
  const { id, name } = props.friend;
  return (
    <div className="friend-card">
      <p>I am a friend card</p>
      <p>{id}</p>
      <p>{name}</p>
      <Friend />
    </div>
  );
};

export default FriendCard;
