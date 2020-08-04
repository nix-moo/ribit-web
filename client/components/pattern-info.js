/* eslint-disable react/no-unused-state */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react'
import { addPattern } from '../store'

const PatternInfo = props => {
  let formState = {
    sizes: [],
  }

  // Adds the new info to the state
  const handleChange = evt => {
    evt.preventDefault()
    console.log('evt.target.id', evt.target.id)
    console.log('evt.target.value', evt.target.value)
    formState[evt.target.id] = evt.target.value
  }

  // Parses the sizes into an array before adding to state
  const handleSizeChange = evt => {
    evt.preventDefault()
    const sizeStr = evt.target.value
    const regex = /\W+/g // followed by a word  boundary
    let sizeArr = sizeStr.split(regex)
    console.log('sizeArr', sizeArr)
    formState.sizes = sizeArr
  }

  // Dispatches the addPattern thunk with the contents of the current state
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('evt.target', evt.target)
    console.log(formState)
    props.addPattern(formState)
    history.push('/pattern-rows')
  }

  return (
    <Form onSubmit={handleSubmit} id="form" className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <FormGroup className="bx--col-md-6 bx--col-lg-6">
          <TextInput
            id="title"
            helperText="Enter the name of the pattern"
            invalidText="This field is required."
            labelText="Title"
            placeholder="Pattern Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="bx--col-md-6 bx--col-lg-6">
          <TextInput
            id="author"
            helperText="Who wrote/published this pattern?"
            invalidText="This field is required."
            labelText="Author"
            placeholder="Author Name"
            onChange={handleChange}
          />
        </FormGroup>
      </div>
      <FormGroup>
        <TextInput
          helperText="Copy & paste the list of sizes here"
          id="sizes"
          labelText="Sizes"
          placeholder="XS, S, (M, L, XL)"
          onChange={handleSizeChange}
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          helperText="The pattern's ravelry page"
          id="ravelry"
          labelText="Ravelry Link (Optional)"
          placeholder="www.ravelry.com/....."
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Next</Button>
    </Form>
  )
}
const mapDispatch = dispatch => {
  return {
    addPattern: formState => dispatch(addPattern(formState)),
  }
}

export default connect(mapDispatch)(PatternInfo)

PatternInfo.propType = {
  pattern: PropTypes.object,
}
