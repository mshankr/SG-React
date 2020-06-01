import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import history from '../../history'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.auth.userId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => (
      <div className='item' key={stream.id}>
      {this.renderAdmin(stream)}
        <i className='large middle aligned camera icon'
          onClick={() => history.push(`/streams/${stream.id}`)}/>
        <div className='content'>
          {stream.title}
          <div className='description'>{stream.description}</div>
        </div>
      </div>
    ))
  }

  renderCreate() {
    if (this.props.auth.isSignedIn) {
      return (
        <Link to='/streams/new' className='ui button right floated primary'>Create stream</Link>
        )
      }
  }

  render() {
    return (
      <div className='ui container'>
        <h2 className='ui header'>Streams</h2>
        <div className='ui list relaxed'>
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}

function mapStateToProps({ streams, auth }) {
  // Object.values(TARGET_OBJECT)
  // Converts object into array!!! key disappears
  return { streams: Object.values(streams), auth }
}

export default connect(mapStateToProps, actions)(StreamList)
