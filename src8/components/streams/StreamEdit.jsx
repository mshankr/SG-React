import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      )}

    return (
      <>
        <h2 className="ui header">Edit Stream</h2>
        <StreamForm
          initialValues={{
            title: stream.title,
            description: stream.description }}
          onSubmit={this.onSubmit}/>
      </>
    )

  }
}

function mapStateToProps({ streams }, ownProps) {
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, actions)(StreamEdit)
