import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import history from '../../history'
import Modal from '../Modal'

class StreamDelete extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onDismiss = () => history.push('/')

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id)
    this.onDismiss()
  }

  actions = (
    <>
    <button className='ui button negative' onClick={this.onDeleteClick}>Delete</button>
    <button className='ui button'
      onClick={this.onDismiss}>Cancel</button>
    </>
  )

  modalContent = (stream) => {
    if (!stream) {
      return ''
    }
    return (
    <>
    <h3>{stream.title}</h3>
    <p>{stream.description}</p>
    </>
  )
}

  render() {
    const { stream } = this.props
    return (
      <>
      <Modal
        title="Permanently delete this stream?"
        content={this.modalContent(stream)}
        actions={this.actions}
        onDismiss={this.onDismiss} />
      <h2 className='ui header'>Delete a stream</h2>
      </>
    )
  }
}

function mapStateToProps({ streams }, ownProps) {
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, actions)(StreamDelete)
