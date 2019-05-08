import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import FriendList from './components/FriendList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.log(error);
        console.error({ error: error.response.message });
      });
  }

  render() {
    return (
      <div className="App">
      <Route exact path="/" component={FriendList} />
      </div>
    )
  }
}
