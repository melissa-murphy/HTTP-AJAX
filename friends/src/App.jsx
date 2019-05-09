import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { Navbar } from 'reactstrap';

import FriendList from './components/FriendList';
import FriendCard from './components/FriendCard';
import Friend from './components/Friend';

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
        <Navbar>
          <h1>My Friend List</h1>
        </Navbar>
        <FriendList friends={this.state.friends} />

        <Route exact path="/" component={App} />
        <Route
          exact
          path="/friend-list"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/friend-card"
          render={props => (
            <FriendCard {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/friend-card/:id"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}
