import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  changeHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
    console.log(this.state.newFriend);
  };

  handleSubmit = event => {
    this.props.newFriend(event, this.state.newFriend);
    this.setState({
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name" />
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.newFriend.name}
              placeholder="Name"
              onChange={this.changeHandler}
            />
            <Label for="age" />
            <Input
              type="number"
              name="age"
              id="age"
              value={this.state.newFriend.age}
              placeholder="Age"
              onChange={this.changeHandler}
            />
            <Label for="email" />
            <Input
              type="email"
              name="email"
              id="email"
              value={this.state.newFriend.email}
              placeholder="email"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button>+friend</Button>
        </Form>
      </>
    );
  }
}
