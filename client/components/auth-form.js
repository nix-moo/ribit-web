import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link, Form, FormGroup, TextInput, Button} from 'carbon-components-react'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        <FormGroup>
          <TextInput id="email" labelText="Email" name="email" />
        </FormGroup>
        <FormGroup>
          <TextInput.PasswordInput
            id="password"
            labelText="Password"
            name="password"
            showPasswordLabel="Show password"
            hidePasswordLabel="Hide password"
          />
        </FormGroup>
        <div>
          <Button type="submit">{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      {/* <Button kind="secondary">{displayName} with Google</Button> */}
      <Link href="/auth/google">{displayName} with Google</Link>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
