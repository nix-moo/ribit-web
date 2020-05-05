/* eslint-disable react/no-unused-state */
import React, { Component } from 'React';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
} from 'carbon-components-react';
import '../app.scss';

export default class PatternForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      sizes: '',
      text: '',
    };
  }

  handleChange = (evt) => {
    console.log('change', JSON.stringify(evt.target));

    this.setState({
      [evt.target]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('evt', JSON.stringify(this.state));
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup legendText="info">
            <TextInput
              light
              id="title"
              invalidText="This field is required."
              labelText="Title"
              placeholder="Pattern Name"
              onChange={this.handleChange}
            />
            <TextInput
              light
              id="author"
              invalidText="This field is required."
              labelText="Author"
              placeholder="Author Name"
              onChange={this.handleChange}
            />
            <TextInput
              light
              helperText="Copy & paste the list of sizes here."
              id="sizes"
              labelText="Sizes"
              placeholder="XS, S, (M, L, XL)"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup legendText="pattern">
            <TextArea
              light
              onChange={this.handleChange}
              cols={50}
              id="text"
              invalidText="This field is required."
              labelText="Paste the pattern text here."
              placeholder="1. Row one..."
              rows={4}
            />
          </FormGroup>
          <Button kind="secondary" tabIndex={0} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
