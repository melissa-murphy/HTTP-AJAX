import React from 'react';
import Friend from './Friend';

const FriendCard = props => {
  return (
    <div className="friend-card">
      <p>I am a friend card</p>
      <Friend />
    </div>
  );
};

export default FriendCard;
