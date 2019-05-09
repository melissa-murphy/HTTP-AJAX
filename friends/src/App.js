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

  componentDidMount() {
    console.log('top cdm');
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
        // console.log(response);
      })
      .catch(error => console.log(error));
    console.log('bottom cdm');
  }

  newFriend = (event, newFriend) => {
    event.preventDefault();
    console.log(`add friend fired`)
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => this.setState({ friends: response.data }))
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };


  render() {
    return (
      <div className="App">
        <Navbar>
          <h1>My Friend List</h1>
        </Navbar>
        <Container>
        <FriendList friends={this.state.friends} />
        <AddFriendForm newFriend={this.newFriend} />
        </Container>
      </div>
    );
  }
}
