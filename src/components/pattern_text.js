/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Form, FormGroup, TextArea, Button } from 'carbon-components-react';
import '../app.scss';

export default class PatternText extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      rows: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    evt.preventDefault();
    console.log('change', JSON.stringify(evt.target));

    const

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
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <h1 className="landing-page__heading">Pattern Text</h1>
          </div>
        </div>
        <div className="bx--row">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup legendText="Pattern">
              <div className="bx--col-md-4 bx--col-lg-6">
                <TextArea
                  light
                  onChange={this.handleChange}
                  id="text"
                  invalidText="This field is required."
                  labelText="Paste the pattern text here."
                  placeholder="1. Row one..."
                  rows={40}
                />
              </div>
            </FormGroup>
            <Button kind="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
