import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import getGoogleAuth from '../utils/getGoogleAuth'

const GoogleAuth = ({ auth, signIn, signOut }) => {
  const [gAuth, isSignedIn, userId] = getGoogleAuth()

  useEffect(() => {
    if (isSignedIn) {
      signIn(userId)
    } else if (isSignedIn === false) {
      signOut()
    }
  }, [isSignedIn])

  const onSignInClick = () => {
    gAuth.signIn()
  }

  const onSignOutClick = () => {
    gAuth.signOut()
  }

  const renderAuthButton = () => {
    if (auth.isSignedIn === null) {
      return (
        <div className='ui active dimmer'
          style={{ backgroundColor: '#6434C9' }}>
          <div className='ui tiny loader'></div>
        </div>
      )
    } else if (auth.isSignedIn) {
      return (
        <button className='ui olive google button'
          onClick={onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui olive google button'
          onClick={onSignInClick}>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }

  }

  return <div className='ui item'>{renderAuthButton()}</div>
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(GoogleAuth)
