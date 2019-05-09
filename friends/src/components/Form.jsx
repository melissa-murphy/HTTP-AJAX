import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  changeHandler = event => {
    let value = event.target.value;
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postFriend(this.state.friend)
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name" />
            <Input type="name" name="name" id="name" placeholder="name" onChange={this.changeHandler} />
            <Label for="age" />
            <Input type="age" name="age" id="age" placeholder="age" onChange={this.changeHandler} />
            <Label for="email" />
            <Input type="email" name="email" id="email" placeholder="email" onChange={this.changeHandler} />
          </FormGroup>
          <Button>+friend</Button>
        </Form>
      </>
    );
  }
}

export default FormSection;
