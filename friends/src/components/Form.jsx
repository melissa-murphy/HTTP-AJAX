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
  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="name" />
            <Input type="name" name="name" id="name" placeholder="name" />
            <Label for="age" />
            <Input type="age" name="age" id="age" placeholder="age" />
            <Label for="email" />
            <Input type="email" name="email" id="email" placeholder="email" />
          </FormGroup>
          <Button>+friend</Button>
        </Form>
      </>
    );
  }
}

export default FormSection;
