import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const UserHeader = ({ userId, user }) => {
  const renderContent = () => {
    if (!user) {
      return null
    } else {
      return <div className='header'>{user.name}</div>
    }
  }

    return ( <div>{renderContent()}</div> )
}

function mapStateToProps({ users }, ownProps) {
  return { user: users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, null)(UserHeader)
