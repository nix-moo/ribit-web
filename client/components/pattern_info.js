/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import '../app.scss';
export default class PatternInfo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      sizes: '',
      ravelry: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    evt.preventDefault();
    console.log('evt.target.id', evt.target.id);
    console.log('evt.target.value', evt.target.value);
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('evt', this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup legendText="Pattern Info">
          <TextInput
            id="title"
            invalidText="This field is required."
            labelText="Title"
            placeholder="Pattern Name"
            onChange={this.handleChange}
          />
          <TextInput
            id="author"
            invalidText="This field is required."
            labelText="Author"
            placeholder="Author Name"
            onChange={this.handleChange}
          />
          <TextInput
            helperText="Copy & paste the list of sizes here"
            id="sizes"
            labelText="Sizes"
            placeholder="XS, S, (M, L, XL)"
            onChange={this.handleChange}
          />
          <TextInput
            helperText="Optional"
            id="ravelry"
            labelText="Ravelry Link"
            placeholder="www.ravelry.com/....."
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Next</Button>
      </Form>
    );
  }
}
