import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FriendCard from './FriendCard';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return <div className="friend-list" />;
  }
}

function FriendDetails({ friend }) {
  return (
    <Link to={`/friends/${friend.id}`}>
      <FriendCard friend={friend} />
    </Link>
  );
}
