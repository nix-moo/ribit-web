/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Form, FormGroup, TextArea, Button } from 'carbon-components-react';
import '../app.scss';

export default class PatternText extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    evt.preventDefault();
    console.log('change', evt.target.id);

    // this.setState({
    //   text: evt.target.value,
    // });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('this.state', this.state);
    console.log(evt);
    // const newPatternRows = this.split(evt.text)
  };

  split = (str, ss = '\n\n') => {
    return str.split(ss);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup legendText="Pattern Text">
          <TextArea
            onChange={this.handleChange}
            id="text"
            name="text"
            invalidText="This field is required."
            labelText="Paste the pattern text here."
            placeholder="1. Row one..."
            // rows={40}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
