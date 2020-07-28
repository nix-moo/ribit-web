/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import { addPattern } from '../store';
// import '../app.scss'

class PatternInfo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      sizes: '',
      ravelry: '',
    };
  }

  handleChange = (evt) => {
    evt.preventDefault();
    console.log('evt.target.id', evt.target.id);
    console.log('evt.target.value', evt.target.value);
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSizeChange = (evt) => {
    evt.preventDefault();
    const sizeStr = evt.target.value;
    const regex = /\W+/g;
    let sizeArr = sizeStr.split(regex);
    console.log('sizeArr', sizeArr);
    this.setState({
      sizes: sizeArr,
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="bx--grid bx--grid--full-width"
      >
        <div className="bx--row">
          <FormGroup className="bx--col-md-6 bx--col-lg-6">
            <TextInput
              id="title"
              helperText="Enter the name of the pattern"
              invalidText="This field is required."
              labelText="Title"
              placeholder="Pattern Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="bx--col-md-6 bx--col-lg-6">
            <TextInput
              id="author"
              helperText="Who wrote/published this pattern?"
              invalidText="This field is required."
              labelText="Author"
              placeholder="Author Name"
              onChange={this.handleChange}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <TextInput
            helperText="Copy & paste the list of sizes here"
            id="sizes"
            labelText="Sizes"
            placeholder="XS, S, (M, L, XL)"
            onChange={this.handleSizeChange}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            helperText="The pattern's ravelry page"
            id="ravelry"
            labelText="Ravelry Link (Optional)"
            placeholder="www.ravelry.com/....."
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Next</Button>
      </Form>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const newPattern = this.state;
      console.log(newPattern);
      dispatch(addPattern(newPattern));
    },
  };
};

export default connect(mapDispatch)(PatternInfo);

PatternInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
