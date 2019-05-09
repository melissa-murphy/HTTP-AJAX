import React from 'react';

import Friend from './Friend';

const FriendList = props => {
  console.log(props.friends.length);
  return (
    <div className="friend-list">
      {props.friends.map((friend, id) => (
        <Friend
          className="friend-info"
          friend={friend}
          key={friend.id}
          {...friend}
          newFriend={props.newFriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
