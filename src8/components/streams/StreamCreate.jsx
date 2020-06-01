import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import StreamForm from './StreamForm'

const StreamCreate = ({ createStream }) => {

  const onSubmit = (formValues) => createStream(formValues)

  return (
    <div>
      <h2 className='ui header'>Create a Stream</h2>
      <StreamForm onSubmit={onSubmit} />
    </div>
  )
}


export default connect(null, actions)(StreamCreate)
