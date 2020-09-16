/* eslint-disable react/no-unused-state */
import React from 'react'
import { Form, FormGroup, TextArea, Button } from 'carbon-components-react'
import '../app.scss'

const split = (str, ss = '[\n\r]+') => {
  let res = str.split(ss).map(substr => {
    substr.trim()
  })
  return res
}

export const PatternRows = props => {
  const handleChange = evt => {
    evt.preventDefault()
    console.log('change', evt.target.id)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(evt)
    console.log('split(evt.text)', split(evt.text))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup legendText="Pattern Text">
        <TextArea
          onChange={handleChange}
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
  )
}

