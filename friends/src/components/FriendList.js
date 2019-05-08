import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return <div className="friend-list" />;
  }
}

// function FriendDetails({ friend }) {
//   return (
//     <Link to={`/friends/${friend.id}`}>
//       <FriendCard friend={friend} />
//     </Link>
//   );
// }
