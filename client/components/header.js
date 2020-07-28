import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent
} from 'carbon-components-react/lib/components/UIShell'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20'
import Wheat32 from '@carbon/icons-react/lib/wheat/32'
// import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'

const Header = ({handleClick, isLoggedIn}) => (
  <>
    <Header aria-label="header">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="Rib">
        It
        <Wheat32 />
      </HeaderName>
      {isLoggedIn ? (
        <HeaderNavigation>
          <HeaderMenuItem element={Link} to="/home">
            Home
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/pattern-upload">
            Add Pattern
          </HeaderMenuItem>
        </HeaderNavigation>
      ) : (
        <HeaderNavigation></HeaderNavigation>
      )}
      {isLoggedIn ? (
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Log Out"
            onClick={() => {
              handleClick()
            }}
          >
            <UserAvatar20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      ) : (
        <HeaderGlobalBar>
          <HeaderGlobalAction element={Link} to="/login">
            Log In
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      )}
    </Header>
  </>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
