import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import FriendList from './components/FriendList';

export default class App extends Component {
  constructor() {
    super();
    this.state = []
  }


  render() {
    return (


      <Route exact path="/" component={FriendList} />
    )
  }
}
