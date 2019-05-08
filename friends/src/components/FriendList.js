import React from 'react';
// import { Link } from 'react-router-dom';

import FriendCard from './FriendCard';

const FriendList = props => {
  return (
    <div className="friend-list">
      <FriendCard />
    </div>
  );
};

export default FriendList;

// function FriendDetails({ friend }) {
//   return (
//     <Link to={`/friends/${friend.id}`}>
//       <FriendCard friend={friend} />
//     </Link>
//   );
// }
