/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
} from 'carbon-components-react';
import '../app.scss';
import { render } from 'node-sass';

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
      <div className="bx--row">
        <Form onSubmit={this.handleSubmit}>
          <div className="bx--col-md-4 bx--col-lg-6">
            <FormGroup legendText="info">
              <TextInput
                light
                name="pattern_title"
                id="title"
                invalidText="This field is required."
                labelText="Title"
                placeholder="Pattern Name"
                onChange={this.handleChange}
              />
              <TextInput
                light
                name="pattern_author"
                id="author"
                invalidText="This field is required."
                labelText="Author"
                placeholder="Author Name"
                onChange={this.handleChange}
              />
              <TextInput
                light
                name="pattern_sizes"
                helperText="Copy & paste the list of sizes here."
                id="sizes"
                labelText="Sizes"
                placeholder="XS, S, (M, L, XL)"
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <Button tabIndex={0} type="submit">
            Next
          </Button>
        </Form>
      </div>
    );
  }
}
