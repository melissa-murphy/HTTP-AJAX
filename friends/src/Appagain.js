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
      console.log(`bottom of CDM`)
  }

  // Add Friend


  // Remove Friend


  // handleAdd


  // handleRemove
}
