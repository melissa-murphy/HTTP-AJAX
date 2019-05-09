import React from 'react';
// import { Link } from 'react-router-dom';

import FriendCard from './FriendCard';
// import Friend from './Friend';

const FriendList = props => {
  return (
    <>
      <div className="friend-list">
        {props.friends.map(friend => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
      </div>
    </>
  );
};

export default FriendList;
