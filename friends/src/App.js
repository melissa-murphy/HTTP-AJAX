import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { Navbar, Container } from 'reactstrap';

import FriendList from './components/FriendList';
import Friend from './components/Friend';
import FormSection from './components/Form';

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
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.log(error);
        console.error({ error: error.response.message });
      });
    console.log('bottom cdm');
  }

  postFriend = () => {
    axios
    .post('http://localhost:5000/friends')
    .then(response => console.log(response))
    .catch(error => console.log({error: error.response.message}))
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <h1>My Friend List</h1>
        </Navbar>

        <Route
          path="/"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route exact path="/friends:id" component={Friend} />

        <Container>
          <FormSection postFriend={this.postFriend} />
        </Container>
      </div>
    );
  }
}
