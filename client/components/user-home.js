import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'carbon-components-react'
import PatternList from './pattern-list'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props
  console.log('props', props)
  return (
    <div>
      <h3>Welcome, {user.email}</h3>
      <p>{user.id}</p>
      {/* <PatternList /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object
}
