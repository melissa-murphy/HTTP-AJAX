import React from 'react';
// import { Link } from 'react-router-dom';

const FriendCard = props => {
  return (
    <>
      <div className="friend-card">
        <h4>{props.friend.name}</h4>
      </div>
    </>
  );
};

export default FriendCard;
