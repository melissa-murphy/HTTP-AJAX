import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import { Navbar, Container } from 'reactstrap';

import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  // CDM
  componentDidMount() {
    console.log(`top of CDM`);
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => console.log(response))
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
    console.log(`bottom of CDM`);
  }

  // Add Friend

  addFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.setState({ friend: response.data });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  // Remove Friend

  removeFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  /**deleteItem = id => {
    axios
      .delete(`http://localhost:3333/items/${id}`)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/item-list");
      })
      .catch(err => console.log(err));
  }; */

  // handleAdd

  // handleRemove
}
