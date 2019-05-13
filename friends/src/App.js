import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';


import './App.css';
import { Navbar, Container } from 'reactstrap';

import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import Friend from './components/Friend';

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

  // Add Friend (POST)

  addFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.setState({ friend: response.data });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  // Remove Friend (DELETE)

  removeFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  // handleAdd()
  handleAdd = friend => {
    this.setState({
      friends: [...this.state.friends, friend]
    });
  };

  // handleRemove()
  handleRemove = id => {
    this.setState({
      friends: [...this.state.friends, id]
    });
  };

  // Render
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar>
            {/* Links */}
            <NavLink to="/add-new-friend">+Friend</NavLink>
            <NavLink to="/">Home</NavLink>
          </Navbar>
          <Container>
            <FriendList friends={this.state.friends} />
          </Container>
        </Container>

        {/* Routes */}
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/friend-list"
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              removeFriend={this.removeFriend}
              handleRemove={this.handleRemove}
            />
          )}
        />
        <Route
          path="/friend/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              removeFriend={this.removeFriend}
              handleRemove={this.handleRemove}
            />
          )}
        />
        <Route
          path="/add-new-friend"
          render={props => (
            <AddFriendForm
              {...props}
              addFriend={this.addFriend}
              handleAdd={this.handleAdd}
            />
          )}
        />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.string
};
